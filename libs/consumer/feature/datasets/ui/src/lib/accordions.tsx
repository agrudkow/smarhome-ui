import React, { FC } from 'react';
import styled from 'styled-components';
import { useAccordion } from '@smarthome/common/logic';
import { useUploadEntity } from '@smarthome/consumer/feature/datasets/logic';
import { Accordion, H6 } from '@smarthome/common/ui';
import AddEntity from './add-entity';

enum AccordionTypes {
  UploadEntity,
}

const StyledAccordions = styled.div`
  margin-bottom: 15px;

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    margin-top: 15px;
  }
`;

export const Accordions: FC = () => {
  const {
    fileName,
    handleDeleteFile,
    handleSendFile,
    handleUploadFile,
  } = useUploadEntity();
  const { expandedAccordion, toggleAccordionFactory } = useAccordion<
    AccordionTypes
  >({
    preToggleFunction: handleDeleteFile,
  });

  return (
    <StyledAccordions>
      <Accordion
        summary={<H6>Add entity</H6>}
        onChange={toggleAccordionFactory(AccordionTypes.UploadEntity)}
        expanded={expandedAccordion === AccordionTypes.UploadEntity}
      >
        <AddEntity
          fileName={fileName}
          onUploadFile={handleUploadFile}
          onAddEntity={handleSendFile}
        />
      </Accordion>
    </StyledAccordions>
  );
};

export default Accordions;
