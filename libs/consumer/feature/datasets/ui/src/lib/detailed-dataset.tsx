import React, { FC } from 'react';
import styled from 'styled-components';
import {
  regularSpaceBetweenViewStyle,
  InfoHeader,
  UnderlinedContainer,
  OvalBoxContainer,
  DeleteDialog,
  BackButton,
  H6,
  UnderlinedSubtitle,
  H5,
} from '@smarthome/common/ui';
import {
  useDatasetDetails,
  useDeleteDataset,
  useUpdateDataset,
} from '@smarthome/consumer/feature/datasets/logic';
import Accordions from './accordions';
import AcctionButtons from './action-buttons';
import { EditDatasetFrom } from './edit-dataset-form';

const StyledDetailedDataset = styled.div`
  ${regularSpaceBetweenViewStyle}
`;

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

export const DetailedDataset: FC = () => {
  const {
    datasetDetails,
    handleBackClick,
    handleRunOnAlgorithmClick,
  } = useDatasetDetails();
  const {
    handleDeleteDataset,
    handleDeleteDialogClose,
    handleDeleteDialogOpen,
    openDeleteDialog,
  } = useDeleteDataset();
  const { editView, handleEditSave, handleToggleEditView } = useUpdateDataset();

  return (
    <StyledDetailedDataset>
      {datasetDetails && (
        <>
          <div>
            <InfoHeader
              headerText={datasetDetails.displayName}
              infoMessageText={
                'This view allows you to view details of dataset and perform actions like adding new entity, editing information, deleting dataset or running it with algorithm.'
              }
            />
            <UnderlinedContainer />
            {editView ? (
              <OvalBoxContainer>
                <EditDatasetFrom
                  name={datasetDetails.displayName}
                  summary={datasetDetails.datasetSummary}
                  description={datasetDetails.datasetDescription}
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
                    {datasetDetails.datasetSummary}
                  </DescriptionContainer>
                </OvalBoxContainer>
                <UnderlinedSubtitle>
                  <H5>Description: </H5>
                </UnderlinedSubtitle>
                <OvalBoxContainer>
                  <DescriptionContainer>
                    {datasetDetails.datasetDescription}
                  </DescriptionContainer>
                </OvalBoxContainer>
                <Accordions />
                <AcctionButtons
                  handleDeleteDialogOpen={handleDeleteDialogOpen}
                  handleOpenEditView={handleToggleEditView}
                  handleRunOnAlgorithmClick={handleRunOnAlgorithmClick}
                />
              </>
            )}
          </div>
          <DeleteDialog
            open={openDeleteDialog}
            onClose={handleDeleteDialogClose}
            onConfirm={handleDeleteDataset}
            title={'Delete datase'}
            description={'Please confirm deleting dataset.'}
          />
          <BackButton onClick={handleBackClick} />
        </>
      )}
    </StyledDetailedDataset>
  );
};

export default DetailedDataset;
