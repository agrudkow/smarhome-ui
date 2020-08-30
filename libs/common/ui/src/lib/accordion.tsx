import React, { FC, ReactNode, ChangeEvent } from 'react';
import styled from 'styled-components';
import {
  Accordion as MUIAccordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export interface AccordionProps {
  summary: ReactNode;
  onChange: (event: ChangeEvent<{}>) => void;
  expanded: boolean;
}

const StyledAccordion = styled(MUIAccordion)`
  margin: 5px 0;
  background-color: ${({
    theme: {
      palette: { containerBackgorund },
    },
  }) => containerBackgorund};
  border: 1px solid
    ${({
      theme: {
        palette: { primary },
      },
    }) => primary};

  border-radius: ${({
    theme: {
      layout: { borderRadius },
    },
  }) => borderRadius}px;
`;

export const Accordion: FC<AccordionProps> = ({
  children,
  summary,
  onChange,
  expanded,
}) => {
  return (
    <StyledAccordion expanded={expanded} onChange={onChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {summary}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </StyledAccordion>
  );
};

export default Accordion;
