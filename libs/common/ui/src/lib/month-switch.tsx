import React, { FC } from 'react';
import styled from 'styled-components';
import { getMonthName } from '@smarthome/common/logic';
import ArrowButton from './arrow-button';
import { H4 } from './headings';

export interface MonthSwitchProps {
  month: number;
  year: number;
  onNextMonthClick: () => void;
  onPreviousMonthClick: () => void;
}

const StyledMonthSwitch = styled.div`
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const MonthName = styled(H4)`
  text-align: center;
  width: 50%;
`;

export const MonthSwitch: FC<MonthSwitchProps> = ({
  month,
  onNextMonthClick,
  onPreviousMonthClick,
  year,
}) => {
  return (
    <StyledMonthSwitch>
      <ArrowButton rotate="180deg" onClick={onPreviousMonthClick} />
      <MonthName>
        {getMonthName(month)}&nbsp;{year}
      </MonthName>
      <ArrowButton onClick={onNextMonthClick} />
    </StyledMonthSwitch>
  );
};

export default MonthSwitch;
