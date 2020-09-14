import React, { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  InfoHeader,
  OvalBoxContainer,
  H6,
  CustomRating,
  UnderlinedContainer,
  BackButton,
  regularSpaceBetweenViewStyle,
  DeleteDialog,
  H5,
  UnderlinedSubtitle,
} from '@smarthome/common/ui';
import { useHistory, useParams } from 'react-router';
import { CustomerRoutes } from '@smarthome/common/service';
import { fetchAlgorithmDetails } from '@smarthome/consumer/feature/algorithms/service';
import { AlgorithmDetailsDTO } from '@smarthome/data';
import AcctionButtons from './acction-buttons';
import Accordions from './accordions';
import EditAlgorithmFrom from './edit-alorithm';

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

export const DetailedAlgorithm: FC = () => {
  const history = useHistory();
  const { id: algorithmId } = useParams<{ id: string }>();
  const [algorithmData, setAlgorithmData] = useState<
    AlgorithmDetailsDTO | undefined
  >(undefined);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [editView, setEditView] = useState(false);

  const handleBackClick = useCallback(() => {
    history.push(`/${CustomerRoutes.Algorithms}`);
  }, [history]);

  const handleDeleteAlgorithm = useCallback(() => {
    console.log(`Delete dataset ${algorithmId}`);
    setOpenDeleteDialog(false);
  }, [algorithmId]);

  const handleDeleteDialogClose = useCallback(() => {
    setOpenDeleteDialog(false);
  }, []);

  const handleDeleteDialogOpen = useCallback(() => {
    setOpenDeleteDialog(true);
  }, []);

  const handleEditSave = useCallback(() => {
    setEditView(false);
  }, []);

  const handleToggleEditView = useCallback(() => {
    setEditView((prevState) => !prevState);
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
              <H6></H6>
              <RatingContainer>
                {!editView && (
                  <>
                    <H6>Rating:&nbsp;&nbsp;</H6>
                    <CustomRating
                      value={algorithmData.algorithmRating}
                      readOnly={true}
                    />
                  </>
                )}
              </RatingContainer>
            </UnderlinedContainer>
            {editView ? (
              <OvalBoxContainer>
                <EditAlgorithmFrom
                  name={algorithmData.displayName}
                  summary={algorithmData.algorithmSummary}
                  description={algorithmData.algorithmDescription}
                  onSave={handleEditSave}
                  onCancle={handleToggleEditView}
                />
              </OvalBoxContainer>
            ) : (
              <>
                <UnderlinedSubtitle>
                  <H5>Summary: </H5>
                </UnderlinedSubtitle>
                <OvalBoxContainer>
                  <DescriptionContainer>
                    words (provided text will be treated as separate tags by
                    which algorithms will be searched). Additionaly you can sort
                    result by name and rating.
                  </DescriptionContainer>
                </OvalBoxContainer>
                <UnderlinedSubtitle>
                  <H5>Description: </H5>
                </UnderlinedSubtitle>
                <OvalBoxContainer>
                  <DescriptionContainer>
                    {algorithmData.algorithmDescription}
                  </DescriptionContainer>
                </OvalBoxContainer>
                <Accordions
                  handleTestSyntex={() => console.log('Test syntax')}
                  algorithmId={algorithmId}
                />
                <AcctionButtons
                  handleDeleteDialogOpen={handleDeleteDialogOpen}
                  handleOpenEditView={handleToggleEditView}
                />
              </>
            )}
          </div>
          <DeleteDialog
            open={openDeleteDialog}
            onClose={handleDeleteDialogClose}
            onConfirm={handleDeleteAlgorithm}
            title={'Delete datase'}
            description={'Please confirm deleting dataset.'}
          />
          <BackButton onClick={handleBackClick} />
        </>
      )}
    </StyledDetailedAlgorithm>
  );
};

export default DetailedAlgorithm;
