import React, { FC, useState, useCallback, useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { DatasetDetailsDTO } from '@smarthome/data';
import {
  CustomerRoutes,
  CustomerDatasetRoutes,
} from '@smarthome/common/service';
import { fetchDatasetDetails } from '@smarthome/consumer/feature/datasets/service';
import EditDatasetAccordions from './edit-dataset-accordions';
import {
  regularSpaceBetweenViewStyle,
  InfoHeader,
  UnderlinedContainer,
  OvalBoxContainer,
  OutlinedButton,
  DeleteDialog,
  BackButton,
  H6,
} from '@smarthome/common/ui';

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

const OptionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OptionButtonContainer = styled.div<{ margin: 'left' | 'right' }>`
  width: calc(50% - 2px);
  margin: ${({ margin }) =>
    margin === 'left' ? '2px 0 2px 2px' : '2px 2px 2px 0'};

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    width: 100%;
    margin: 5px 0;
  }
`;

export const DetailedDataset: FC = () => {
  const history = useHistory();
  const { id: datasetId } = useParams<{ id: string }>();
  const [datasetData, setDatasetData] = useState<DatasetDetailsDTO | undefined>(
    undefined
  );
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const {
    palette: { error },
  } = useContext(ThemeContext);

  const handleDeleteDialogClose = useCallback(() => {
    setOpenDeleteDialog(false);
  }, []);

  const handleDeleteDialogOpen = useCallback(() => {
    setOpenDeleteDialog(true);
  }, []);

  const handleBackClick = useCallback(() => {
    history.push(`/${CustomerRoutes.Datasets}`);
  }, [history]);

  const handleDeleteDataset = useCallback(() => {
    console.log(`Delete dataset ${datasetId}`);
    setOpenDeleteDialog(false);
  }, [datasetId]);

  const handleRunWithAlgorithmClick = useCallback(() => {
    history.push(
      `/${CustomerRoutes.Datasets}/${encodeURIComponent(datasetId)}/${
        CustomerDatasetRoutes.SelectAlgorithm
      }`
    );
  }, [datasetId, history]);

  useEffect(() => {
    if (datasetId !== undefined) {
      setDatasetData(fetchDatasetDetails(datasetId));
    }
  }, [datasetId]);

  return (
    <StyledDetailedDataset>
      {datasetData && (
        <>
          <div>
            <InfoHeader
              headerText={datasetData.displayName}
              infoMessageText={
                'This view allows you to search through avaliable algortihms provided by suppliers. You can dispaly all datasets by leaving search input empty or you can fill it up and search datasets by key words (provided text will be treated as separate tags by which datasets will be searched). Additionaly you can sort result by name and rating. '
              }
            />
            <UnderlinedContainer />
            <OvalBoxContainer>
              <DescriptionContainer>
                {datasetData.datasetDescription}
              </DescriptionContainer>
            </OvalBoxContainer>
            <EditDatasetAccordions
              name={datasetData.displayName}
              summary={datasetData.datasetSummary}
              description={datasetData.datasetDescription}
            />
            <OptionButtons>
              <OptionButtonContainer margin="right">
                <OutlinedButton
                  onClick={handleDeleteDialogOpen}
                  customColor={error}
                  customBorderColor={error}
                >
                  Delete dataset
                </OutlinedButton>
              </OptionButtonContainer>
              <OptionButtonContainer margin="left">
                <OutlinedButton onClick={handleRunWithAlgorithmClick}>
                  Run with algorithm
                </OutlinedButton>
              </OptionButtonContainer>
            </OptionButtons>
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
