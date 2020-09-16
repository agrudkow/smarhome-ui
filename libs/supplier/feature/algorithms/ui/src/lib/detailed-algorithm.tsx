import React, { FC } from 'react';
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
import {
  useAlgorithmDetails,
  useDeleteAlgorithm,
  useUpdateAlgorithm,
} from '@smarthome/supplier/feature/algorithms/logic';
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
  const {
    algorithmDetails,
    algorithmId,
    handleBackClick,
  } = useAlgorithmDetails();
  const {
    handleDeleteDialogClose,
    handleDeleteDialogOpen,
    handleDeleteAlgorithm,
    openDeleteDialog,
  } = useDeleteAlgorithm();
  const {
    handleEditSave,
    handleToggleEditView,
    editView,
  } = useUpdateAlgorithm();

  return (
    <StyledDetailedAlgorithm>
      {algorithmDetails && (
        <>
          <div>
            <InfoHeader
              headerText={algorithmDetails.displayName}
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
                      value={algorithmDetails.algorithmRating}
                      readOnly={true}
                    />
                  </>
                )}
              </RatingContainer>
            </UnderlinedContainer>
            {editView ? (
              <OvalBoxContainer>
                <EditAlgorithmFrom
                  name={algorithmDetails.displayName}
                  summary={algorithmDetails.algorithmSummary}
                  description={algorithmDetails.algorithmDescription}
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
                    {algorithmDetails.algorithmDescription}
                  </DescriptionContainer>
                </OvalBoxContainer>
                <Accordions algorithmId={algorithmId} />
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
