import React, { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { OutlinedButton } from '@smarthome/common/ui';

export interface AcctionButtonsProps {
  handleDeleteDialogOpen: () => void;
  handleOpenEditView: () => void;
  handleRunWithAlgorithmClick: () => void;
}

const OptionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -2px;

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    margin: 0;
  }
`;

const OptionButtonContainer = styled.div`
  width: calc(50% - 4px);
  margin: 2px;

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    width: 100%;
    margin: 5px 0;
  }
`;

const DeleteButtonContainer = styled.div`
  width: 100%;
  margin: 2px;

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    margin: 5px 0;
  }
`;

export const AcctionButtons: FC<AcctionButtonsProps> = ({
  handleDeleteDialogOpen,
  handleOpenEditView,
  handleRunWithAlgorithmClick,
}) => {
  const {
    palette: { error },
  } = useContext(ThemeContext);

  return (
    <OptionButtons>
      <OptionButtonContainer>
        <OutlinedButton onClick={handleOpenEditView}>
          Edit dataset information
        </OutlinedButton>
      </OptionButtonContainer>
      <OptionButtonContainer>
        <OutlinedButton onClick={handleRunWithAlgorithmClick}>
          Run with algorithm
        </OutlinedButton>
      </OptionButtonContainer>
      <DeleteButtonContainer>
        <OutlinedButton
          customColor={error}
          customBorderColor={error}
          onClick={handleDeleteDialogOpen}
        >
          Delete
        </OutlinedButton>
      </DeleteButtonContainer>
    </OptionButtons>
  );
};

export default AcctionButtons;
