import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';
import { P, UploadButton, BaseButton } from '@smarthome/common/ui';

export interface UploadNewFileProps {
  onUploadFile: (event: ChangeEvent<HTMLInputElement>) => void;
  fileName?: string;
  onSendFile: () => void;
}

const StyledUploadNewFile = styled.div`
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

export const UploadNewFile: FC<UploadNewFileProps> = ({
  onSendFile: onAddEntity,
  onUploadFile,
  fileName,
}) => {
  return (
    <StyledUploadNewFile>
      <P>
        <b>SELECT FILE</b> with new source code and click <b>SEND</b> to update
        source code.
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
          <BaseButton onClick={onAddEntity}>SEND</BaseButton>
        </StyledButtonContainer>
      </BottomBar>
    </StyledUploadNewFile>
  );
};

export default UploadNewFile;
