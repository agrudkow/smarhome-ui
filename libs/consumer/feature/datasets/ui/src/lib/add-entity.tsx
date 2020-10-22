import React, { FC, ChangeEvent } from 'react';
import styled from 'styled-components';
import { UploadButton, P, BaseButton } from '@smarthome/common/ui';

export interface AddEntityProps {
  onUploadFile: (event: ChangeEvent<HTMLInputElement>) => void;
  fileName?: string;
  onAddEntity: () => void;
}

const StyledAddEntity = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledButtonContainer = styled.div`
  width: 150px;

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    width: 100%;
  }
`;

const SelectFileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap-reverse;
  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const BottomBar = styled(SelectFileContainer)`
  justify-content: space-between;
  flex-wrap: wrap;
`;

const FileName = styled(P)`
  margin-left: 10px;

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    width: 100%;
    margin: 0;
  }
`;

export const AddEntity: FC<AddEntityProps> = ({
  onUploadFile,
  fileName,
  onAddEntity,
}) => {
  return (
    <StyledAddEntity>
      <P>
        <b>SELECT FILE</b> with new entities and click <b>ADD ENTITY</b> to add
        new entity to existing dataset.
      </P>
      <br />
      <BottomBar>
        <SelectFileContainer>
          <StyledButtonContainer>
            <UploadButton onChange={onUploadFile} text={'Select file'} />
          </StyledButtonContainer>
          {fileName && <FileName>Selected file:&nbsp; {fileName}</FileName>}
        </SelectFileContainer>
        <StyledButtonContainer>
          <BaseButton onClick={onAddEntity}>Add entity</BaseButton>
        </StyledButtonContainer>
      </BottomBar>
    </StyledAddEntity>
  );
};

export default AddEntity;
