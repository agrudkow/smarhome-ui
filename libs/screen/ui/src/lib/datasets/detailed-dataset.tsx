import React, { FC, useState, useCallback, useEffect, useContext } from 'react';

import styled, { ThemeContext } from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import { DatasetDetailsDTO } from '@smarthome/data';
import { Routes, DatasetRoutes } from '@smarthome/common/service';
import { fetchDatasetDetails } from '@smarthome/screen/service';
import {
  InfoHeader,
  H6,
  OvalBoxContainer,
  OutlinedButton,
  BaseButton,
} from '@smarthome/common/ui';
import DeleteDialog from './delete-dialog';

const StyledDetailedDataset = styled.div`
  min-height: ${({
    theme: {
      layout: { headerHeight },
    },
  }) =>
    `calc(100vh - ${
      headerHeight + 40
    }px)`}; //40 -> padding from libs/common/ui/src/lib/main-container.tsx
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    min-height: ${({
      theme: {
        layout: { headerHeight },
      },
    }) =>
      `calc(100vh - ${
        headerHeight + 20
      }px)`}; // 20 -> padding from libs/common/ui/src/lib/main-container.tsx
  }

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    min-height: ${({
      theme: {
        layout: { headerHeight },
      },
    }) =>
      `calc(100vh - ${
        headerHeight + 10
      }px)`}; //10 -> padding from libs/common/ui/src/lib/main-container.tsx
  }
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

const UnderlinedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid
    ${({
      theme: {
        palette: { primary },
      },
    }) => primary};

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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
    palette: { error, success },
  } = useContext(ThemeContext);

  const handleDeleteDialogClose = useCallback(() => {
    setOpenDeleteDialog(false);
  }, []);

  const handleDeleteDialogOpen = useCallback(() => {
    setOpenDeleteDialog(true);
  }, []);

  const handleBackClick = useCallback(() => {
    history.push(`/${Routes.Datasets}`);
  }, [history]);

  const handleDeleteDataset = useCallback(() => {
    console.log(`Delete dataset ${datasetId}`);
    setOpenDeleteDialog(false);
  }, [datasetId]);

  const handleRunWithAlgorithmClick = useCallback(() => {
    history.push(
      `/${Routes.Datasets}/${encodeURIComponent(datasetId)}/${
        DatasetRoutes.SelectAlgorithm
      }`
    );
  }, [datasetId, history]);

  const handleEditDataset = useCallback(() => {
    history.push(
      `/${Routes.Datasets}/${encodeURIComponent(datasetId)}/${
        DatasetRoutes.Edit
      }`
    );
  }, [datasetId, history]);

  const handleAddEntity = useCallback(() => {
    history.push(
      `/${Routes.Datasets}/${encodeURIComponent(datasetId)}/${
        DatasetRoutes.AddEntity
      }`
    );
  }, [datasetId, history]);

  useEffect(() => {
    if (datasetId) {
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
                <OutlinedButton
                  onClick={handleAddEntity}
                  customColor={success}
                  customBorderColor={success}
                >
                  Add new entity
                </OutlinedButton>
              </OptionButtonContainer>
            </OptionButtons>
            <OptionButtons>
              <OptionButtonContainer margin="right">
                <OutlinedButton onClick={handleEditDataset}>
                  Edit dataset
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
          />
          <div>
            <BaseButton onClick={handleBackClick}>Back</BaseButton>
          </div>
        </>
      )}
    </StyledDetailedDataset>
  );
};

export default DetailedDataset;
