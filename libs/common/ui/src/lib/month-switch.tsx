import React, { FC } from 'react';
import styled from 'styled-components';
import { getMonthName } from '@smarthome/common/logic';
import ArrowButton from './arrow-button';
import { H4 } from './headings';

export interface MonthSwitchProps {
  /**Displayed month.*/
  month: number;
  /**Displayed year.*/
  year: number;
  /**Next month button click handler.*/
  onNextMonthClick: () => void;
  /**Previous month button click handler.*/
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

/**
 * MonthSwitch component displays provided month and year and provide hadlers for prev and next month buttons.
 *
 * @param props MonthSwitchProps
 */
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
