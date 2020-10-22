import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
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
import { useExecute } from '@smarthome/consumer/feature/resultsets/logic';

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
  const {
    handleBackClick,
    handleExecute,
    handleDeleteDialogClose,
    handleDeleteDialogOpen,
    handleDeleteResultset,
    openDeleteDialog,
    algorithmDetails,
    datasetDetails,
    allowActionButtons,
  } = useExecute();
  const {
    palette: { success, error },
  } = useContext(ThemeContext);

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
        {datasetDetails && algorithmDetails && (
          <>
            <MainInformaitionContainer>
              <OvalBoxContainerWrapper margin="right">
                <OvalBoxContainer>
                  <PaddingBox>
                    <H5>Dataset</H5>
                    <P>{datasetDetails.displayName}</P>
                  </PaddingBox>
                </OvalBoxContainer>
              </OvalBoxContainerWrapper>
              <OvalBoxContainerWrapper margin="left">
                <OvalBoxContainer>
                  <PaddingBox>
                    <H5>Algorithm</H5>
                    <P>{algorithmDetails.displayName}</P>
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
                <OutlinedButton
                  onClick={handleExecute}
                  disabled={!allowActionButtons}
                >
                  Download resultset
                </OutlinedButton>
              </OptionButtonContainer>
              <OptionButtonContainer margin="left">
                <OutlinedButton
                  onClick={handleDeleteDialogOpen}
                  customColor={error}
                  customBorderColor={error}
                  disabled={!allowActionButtons}
                >
                  Delete resultset
                </OutlinedButton>
              </OptionButtonContainer>
            </OptionButtons>
          </>
        )}
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
