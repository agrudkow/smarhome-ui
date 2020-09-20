import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
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
import { useResultsetDetails } from '@smarthome/consumer/feature/resultsets/logic';

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
  const {
    handleBackClick,
    handleRerun,
    handleDeleteResultset,
    handleDownloadResultSet,
    handleOpenRatingDialog,
    handleCloseRatingDialog,
    handleRatingChange,
    handleSendRating,
    resultsetDetails,
    openRatingDialog,
    rating,
  } = useResultsetDetails();
  const {
    palette: { success, error },
  } = useContext(ThemeContext);

  return (
    <StyledExecutionDetails>
      {resultsetDetails ? (
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
                <P>{resultsetDetails.datasetDisplayName}</P>
              </MainInfoContainer>
              <MainInfoContainer>
                <H5>Algorithm name:&nbsp;</H5>
                <P>{resultsetDetails.algorithmDisplayName}</P>
              </MainInfoContainer>
              <MainInfoContainer>
                <H5>Billed:&nbsp;</H5>
                <P>{resultsetDetails.billed} PLN</P>
              </MainInfoContainer>
              <MainInfoContainer>
                <H5>Execution date:&nbsp;</H5>
                <P>{resultsetDetails.date}</P>
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
      <BackButton onClick={handleBackClick} />
    </StyledExecutionDetails>
  );
};

export default ExecutionDetails;
