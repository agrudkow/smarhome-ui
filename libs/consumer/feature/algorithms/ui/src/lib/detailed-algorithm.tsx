import React, { FC } from 'react';
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
  UnderlinedSubtitle,
  H5,
} from '@smarthome/common/ui';
import {
  useAlgorithmDetails,
  useAlgorithmRating,
} from '@smarthome/consumer/feature/algorithms/logic';

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
  const {
    handleBackClick,
    handleRunOnDatasetClick,
    algorithmDetails,
  } = useAlgorithmDetails();
  const {
    rating,
    openRatingDialog,
    handleOpenRatingDialog,
    handleCloseRatingDialog,
    handleSendRating,
    handleRatingChange,
  } = useAlgorithmRating();

  return (
    <StyledDetailedAlgorithm>
      {algorithmDetails && (
        <>
          <div>
            <InfoHeader
              headerText={algorithmDetails.displayName}
              infoMessageText={
                'This view allows you to view informations about given algorithm and perfomr actions like rating and running dataset on algorithm.'
              }
            />
            <UnderlinedContainer>
              <H6>Author:&nbsp;&nbsp;{algorithmDetails.author}</H6>
              <RatingContainer>
                <H6>Rating:&nbsp;&nbsp;</H6>
                <CustomRating
                  value={algorithmDetails.algorithmRating}
                  readOnly={true}
                />
              </RatingContainer>
            </UnderlinedContainer>
            <UnderlinedSubtitle>
              <H5>Summary: </H5>
            </UnderlinedSubtitle>
            <OvalBoxContainer>
              <DescriptionContainer>
                {algorithmDetails.algorithmSummary}
              </DescriptionContainer>
            </OvalBoxContainer>
            <UnderlinedSubtitle>
              <H5>Description: </H5>
            </UnderlinedSubtitle>
            <OvalBoxContainer>
              <DescriptionContainer>
                {algorithmDetails.algorithmDescription}
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
