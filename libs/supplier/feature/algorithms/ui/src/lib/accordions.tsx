import React, { FC } from 'react';
import styled from 'styled-components';
import { useAccordion } from '@smarthome/common/logic';
import { Accordion, H6 } from '@smarthome/common/ui';
import TestSyntax from './test-syntax';
import UploadNewFile from './upload-new-file';
import AlgorithmStatistics from './algorithm-statistics';
import { useUploadSourceCode } from '@smarthome/supplier/feature/algorithms/logic';

export interface AccordionsProps {
  algorithmId: string;
}

enum AccordionTypes {
  TestSyntax,
  UploadNewFile,
  Statistics,
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

export const Accordions: FC<AccordionsProps> = ({ algorithmId }) => {
  const {
    fileName,
    handleDeleteFile,
    handleSendFile,
    handleUploadFile,
  } = useUploadSourceCode(algorithmId);
  const { expandedAccordion, toggleAccordionFactory } = useAccordion<
    AccordionTypes
  >({
    preToggleFunction: handleDeleteFile,
  });

  return (
    <StyledAccordions>
      <Accordion
        summary={<H6>Statistics</H6>}
        onChange={toggleAccordionFactory(AccordionTypes.Statistics)}
        expanded={expandedAccordion === AccordionTypes.Statistics}
      >
        <AlgorithmStatistics algorithmId={algorithmId} />
      </Accordion>
      <Accordion
        summary={<H6>Syntax correctness</H6>}
        onChange={toggleAccordionFactory(AccordionTypes.TestSyntax)}
        expanded={expandedAccordion === AccordionTypes.TestSyntax}
      >
        <TestSyntax algorithmId={algorithmId} />
      </Accordion>
      <Accordion
        summary={<H6>Upload new source code</H6>}
        onChange={toggleAccordionFactory(AccordionTypes.UploadNewFile)}
        expanded={expandedAccordion === AccordionTypes.UploadNewFile}
      >
        <UploadNewFile
          onSendFile={handleSendFile}
          onUploadFile={handleUploadFile}
          fileName={fileName}
        />
      </Accordion>
    </StyledAccordions>
  );
};

export default Accordions;
