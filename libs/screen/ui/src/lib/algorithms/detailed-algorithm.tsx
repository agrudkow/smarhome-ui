import React, { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  InfoHeader,
  OvalBoxContainer,
  H6,
  CustomRating,
  OutlinedButton,
  UnderlinedContainer,
  BackButton,
  regularSpaceBetweenViewStyle,
  RatingDialog,
} from '@smarthome/common/ui';
import { useHistory, useParams } from 'react-router';
import { Routes, AlgorithmRoutes } from '@smarthome/common/service';
import { fetchAlgorithmDetails } from '@smarthome/screen/service';
import { AlgorithmDetailsDTO } from '@smarthome/data';

const DescriptionContainer = styled(H6)`
  padding: 0;
  margin: 15px 0;
  text-align: justify;

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    margin: 5px 0;
  }
`;

const StyledDetailedAlgorithm = styled.div`
  ${regularSpaceBetweenViewStyle}
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const OptionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OptionButtonContainer = styled.div<{ margin: 'left' | 'right' }>`
  width: calc(50% - 2px);
  margin: ${({ margin }) => (margin === 'left' ? '0 0 0 2px' : '0 2px 0 0')};

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    width: 100%;
    margin: 5px 0;
  }
`;

export const DetailedAlgorithm: FC = () => {
  const history = useHistory();
  const { id: algorithmId } = useParams<{ id: string }>();
  const [algorithmData, setAlgorithmData] = useState<
    AlgorithmDetailsDTO | undefined
  >(undefined);
  const [openRatingDialog, setOpenRatingDialog] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  const handleBackClick = useCallback(() => {
    history.push(`/${Routes.Algorithms}`);
  }, [history]);

  const handleRunOnDatasetClick = useCallback(() => {
    history.push(
      `/${Routes.Algorithms}/${encodeURIComponent(algorithmId)}/${
        AlgorithmRoutes.SelectDataset
      }`
    );
  }, [algorithmId, history]);

  const handleOpenRatingDialog = useCallback(() => {
    setOpenRatingDialog(true);
  }, []);

  const handleCloseRatingDialog = useCallback(() => {
    setOpenRatingDialog(false);
    setRating(0);
  }, []);

  const handleSendRating = useCallback(() => {
    console.log(`sent rating :>> ${rating}`);
    handleCloseRatingDialog();
  }, [handleCloseRatingDialog, rating]);

  const handleRatingChange = useCallback((_, newValue: number | null) => {
    if (newValue !== null) {
      setRating(newValue);
    }
  }, []);

  useEffect(() => {
    if (algorithmId !== undefined) {
      setAlgorithmData(fetchAlgorithmDetails(algorithmId));
    }
  }, [algorithmId]);

  return (
    <StyledDetailedAlgorithm>
      {algorithmData && (
        <>
          <div>
            <InfoHeader
              headerText={algorithmData.displayName}
              infoMessageText={
                'This view allows you to search through avaliable algortihms provided by suppliers. You can dispaly all algorithms by leaving search input empty or you can fill it up and search algorithms by key words (provided text will be treated as separate tags by which algorithms will be searched). Additionaly you can sort result by name and rating. '
              }
            />
            <UnderlinedContainer>
              <H6>Author:&nbsp;&nbsp;{algorithmData.author}</H6>
              <RatingContainer>
                <H6>Rating:&nbsp;&nbsp;</H6>
                <CustomRating
                  value={algorithmData.algorithmRating}
                  readOnly={true}
                />
              </RatingContainer>
            </UnderlinedContainer>
            <OvalBoxContainer>
              <DescriptionContainer>
                {algorithmData.algorithmDescription}
              </DescriptionContainer>
            </OvalBoxContainer>
            <OptionButtons>
              <OptionButtonContainer margin="right">
                <OutlinedButton
                  onClick={handleRunOnDatasetClick}
                  style={{ width: '100%' }}
                >
                  Run on dataset
                </OutlinedButton>
              </OptionButtonContainer>
              <OptionButtonContainer margin="left">
                <OutlinedButton
                  onClick={handleOpenRatingDialog}
                  style={{ width: '100%' }}
                >
                  Rate algorithm
                </OutlinedButton>
              </OptionButtonContainer>
            </OptionButtons>
          </div>
          <RatingDialog
            rating={rating}
            open={openRatingDialog}
            onSend={handleSendRating}
            onClose={handleCloseRatingDialog}
            onRatingChange={handleRatingChange}
            title={'Rate algorithm'}
            description={
              'Please select number of stars (1-5) which corresponds with how well given algorithm do its job.'
            }
          />
          <BackButton onClick={handleBackClick} />
        </>
      )}
    </StyledDetailedAlgorithm>
  );
};

export default DetailedAlgorithm;
