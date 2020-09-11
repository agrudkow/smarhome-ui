import React, { FC, useContext, useState, useEffect, useCallback } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import {
  regularSpaceBetweenViewStyle,
  InfoHeader,
  UnderlinedContainer,
  BackButton,
  StyledOvalBoxContainer,
  H5,
  P,
  OutlinedButton,
  RatingDialog,
} from '@smarthome/common/ui';
import { ResultsetDTO } from '@smarthome/data';
import { fetchResultsetDetails } from '@smarthome/consumer/feature/resultsets/service';
import {
  CustomerRoutes,
  CustomerDatasetRoutes,
} from '@smarthome/common/service';

const StyledExecutionDetails = styled.div`
  ${regularSpaceBetweenViewStyle}
`;

const MainInfoContainer = styled.div`
  flex-basis: calc(50% - 30px);
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  white-space: nowrap;
  margin: 15px;
`;

const CustomOvalBoxContainer = styled(StyledOvalBoxContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const OptionButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -5px;
`;

const OutlinedButtonContainer = styled.div`
  width: calc(50% - 10px);
  margin: 5px;
`;

export const ExecutionDetails: FC = () => {
  const history = useHistory();
  const { resultsetId } = useParams<{
    resultsetId: string;
  }>();
  const [resultsetData, setResultsetData] = useState<ResultsetDTO | undefined>(
    undefined
  );
  const [openRatingDialog, setOpenRatingDialog] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  const {
    palette: { success, error },
  } = useContext(ThemeContext);

  const handleRerun = useCallback(() => {
    if (resultsetData) {
      const { datasetId, algorithmId } = resultsetData;
      history.push(
        `/${CustomerRoutes.Datasets}/${encodeURIComponent(datasetId)}/${
          CustomerDatasetRoutes.Execute
        }/${encodeURIComponent(algorithmId)}`
      );
    }
  }, [history, resultsetData]);

  const handleDeleteResultset = useCallback(() => {
    console.log(`Delete resultset ${resultsetId}`);
  }, [resultsetId]);

  const handleDownloadResultSet = useCallback(() => {
    console.log(`Download resultset ${resultsetId}`);
  }, [resultsetId]);

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
    setResultsetData(fetchResultsetDetails(resultsetId));
  }, [resultsetId]);
  return (
    <StyledExecutionDetails>
      {resultsetData ? (
        <>
          <div>
            <InfoHeader
              headerText={'Execution details'}
              infoMessageText={
                'This view allows you to check execution details like a billing for the execution, data of the execution and name of the dataset and the algorithm used in that execution. What is more you can re-run execution for given dataset, delete resultset of that execution, download resultset or rate the algorithm.'
              }
            />
            <UnderlinedContainer />
            <CustomOvalBoxContainer>
              <MainInfoContainer>
                <H5>Dataset name:&nbsp;</H5>
                <P>{resultsetData.datasetDisplayName}</P>
              </MainInfoContainer>
              <MainInfoContainer>
                <H5>Algorithm name:&nbsp;</H5>
                <P>{resultsetData.algorithmDisplayName}</P>
              </MainInfoContainer>
              <MainInfoContainer>
                <H5>Billed:&nbsp;</H5>
                <P>{resultsetData.billed} PLN</P>
              </MainInfoContainer>
              <MainInfoContainer>
                <H5>Execution date:&nbsp;</H5>
                <P>{resultsetData.date}</P>
              </MainInfoContainer>
            </CustomOvalBoxContainer>
            <OptionButtonsContainer>
              <OutlinedButtonContainer>
                <OutlinedButton
                  onClick={handleRerun}
                  customColor={success}
                  customBorderColor={success}
                >
                  Re-run
                </OutlinedButton>
              </OutlinedButtonContainer>
              <OutlinedButtonContainer>
                <OutlinedButton
                  customColor={error}
                  customBorderColor={error}
                  onClick={handleDeleteResultset}
                >
                  Delete resultset
                </OutlinedButton>
              </OutlinedButtonContainer>
              <OutlinedButtonContainer>
                <OutlinedButton onClick={handleDownloadResultSet}>
                  Download resultset
                </OutlinedButton>
              </OutlinedButtonContainer>
              <OutlinedButtonContainer>
                <OutlinedButton onClick={handleOpenRatingDialog}>
                  Rate algorithm
                </OutlinedButton>
              </OutlinedButtonContainer>
            </OptionButtonsContainer>
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
        </>
      ) : (
        <br />
      )}
      <BackButton />
    </StyledExecutionDetails>
  );
};

export default ExecutionDetails;
