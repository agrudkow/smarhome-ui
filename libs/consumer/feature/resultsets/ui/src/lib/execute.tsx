import React, { FC, useState, useEffect, useCallback, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import {
  InfoHeader,
  UnderlinedContainer,
  OvalBoxContainer,
  H5,
  P,
  BackButton,
  regularSpaceBetweenViewStyle,
  OutlinedButton,
  DeleteDialog,
} from '@smarthome/common/ui';
import { AlgorithmDetailsDTO, DatasetDetailsDTO } from '@smarthome/data';
import { fetchAlgorithmDetails } from '@smarthome/consumer/feature/algorithms/service';
import { fetchDatasetDetails } from '@smarthome/consumer/feature/datasets/service';
import {
  ConsumerRoutes,
  ConsumerAlgorithmRoutes,
  ConsumerDatasetRoutes,
} from '@smarthome/common/service';

const StyledExecute = styled.div`
  ${regularSpaceBetweenViewStyle}
`;

const MainInformaitionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    margin: 5px 0;
  }
`;

const OvalBoxContainerWrapper = styled.div<{ margin: 'left' | 'right' }>`
  width: calc(50% - 15px);
  margin: ${({ margin }) => (margin === 'left' ? '0 0 0 15px' : '0 15px 0 0')};

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    width: 100%;
    margin: 0;
  }
`;

const PaddingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    width: 100%;
    padding: 5px 0;
  }
`;

const OptionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OptionButtonContainer = styled.div<{ margin: 'left' | 'right' }>`
  width: calc(50% - 2px);
  margin: ${({ margin }) =>
    margin === 'left' ? '4px 0 2px 2px' : '4px 2px 2px 0'};

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    width: 100%;
    margin: 5px 0;
  }
`;

export const Execute: FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const { algorithmId, datasetId } = useParams<{
    algorithmId: string;
    datasetId: string;
  }>();
  const [algorithmData, setAlgorithmData] = useState<
    AlgorithmDetailsDTO | undefined
  >(undefined);
  const [datasetData, setDatasetData] = useState<DatasetDetailsDTO | undefined>(
    undefined
  );
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const {
    palette: { success, error },
  } = useContext(ThemeContext);

  const handleBackClick = useCallback(() => {
    if (RegExp(`^/${ConsumerRoutes.Datasets}`).test(pathname)) {
      history.push(
        `/${ConsumerRoutes.Datasets}/${encodeURIComponent(datasetId)}/${
          ConsumerDatasetRoutes.SelectAlgorithm
        }`
      );
    } else if (RegExp(`^/${ConsumerRoutes.Algorithms}`).test(pathname)) {
      history.push(
        `/${ConsumerRoutes.Algorithms}/${encodeURIComponent(algorithmId)}/${
          ConsumerAlgorithmRoutes.SelectDataset
        }`
      );
    } else {
      history.push(`/${ConsumerRoutes.Dashboard}`);
    }
  }, [algorithmId, datasetId, history, pathname]);

  const handleExecute = useCallback(() => {
    console.log(`run :>> algorithm: ${algorithmId} - dataset: ${datasetId}`);
  }, [algorithmId, datasetId]);

  const handleDeleteDialogClose = useCallback(() => {
    setOpenDeleteDialog(false);
  }, []);

  const handleDeleteDialogOpen = useCallback(() => {
    setOpenDeleteDialog(true);
  }, []);

  const handleDeleteResultset = useCallback(() => {
    console.log(`Delete resultset`);
    setOpenDeleteDialog(false);
  }, []);

  useEffect(() => {
    (async () => {
      if (datasetId !== undefined) {
        setDatasetData(await fetchDatasetDetails(datasetId));
      }
      if (algorithmId !== undefined) {
        setAlgorithmData(await fetchAlgorithmDetails(algorithmId));
      }
    })();
  }, [datasetId, algorithmId]);
  return (
    <StyledExecute>
      <div>
        <InfoHeader
          headerText={'Calculate resultset'}
          infoMessageText={
            'This view allows you to compute resultset for you IoT devices using Eko API. Execution is on given dataset with choosen algorithm. After execution will end the option to download dataset will appear. Additionaly you can delete calculated dataset from database for current resultset or for one of the previous ones.'
          }
        />
        <UnderlinedContainer />
        <MainInformaitionContainer>
          <OvalBoxContainerWrapper margin="right">
            <OvalBoxContainer>
              <PaddingBox>
                <H5>Dataset</H5>
                <P>{datasetData?.displayName}</P>
              </PaddingBox>
            </OvalBoxContainer>
          </OvalBoxContainerWrapper>
          <OvalBoxContainerWrapper margin="left">
            <OvalBoxContainer>
              <PaddingBox>
                <H5>Algorithm</H5>
                <P>{algorithmData?.displayName}</P>
              </PaddingBox>
            </OvalBoxContainer>
          </OvalBoxContainerWrapper>
        </MainInformaitionContainer>
        <OptionButtons>
          <OutlinedButton
            onClick={handleExecute}
            customColor={success}
            customBorderColor={success}
          >
            Run
          </OutlinedButton>
          <OptionButtonContainer margin="right">
            <OutlinedButton onClick={handleExecute} disabled={true}>
              Download resultset
            </OutlinedButton>
          </OptionButtonContainer>
          <OptionButtonContainer margin="left">
            <OutlinedButton
              onClick={handleDeleteDialogOpen}
              customColor={error}
              customBorderColor={error}
              disabled={true}
            >
              Delete resultset
            </OutlinedButton>
          </OptionButtonContainer>
        </OptionButtons>
      </div>
      <DeleteDialog
        open={openDeleteDialog}
        onClose={handleDeleteDialogClose}
        onConfirm={handleDeleteResultset}
        title={'Delete resultset'}
        description={'Please confirm deleteing dataset'}
      />
      <BackButton onClick={handleBackClick} />
    </StyledExecute>
  );
};

export default Execute;
