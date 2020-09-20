import React, { FC } from 'react';
import styled from 'styled-components';
import { StyledOvalBoxContainer, H4, MonthSwitch } from '@smarthome/common/ui';

export interface TotalBillingProps {
  month: number;
  year: number;
  income: number | string;
  numberOfExecutions: number | string;
  onNextMonthClick: () => void;
  onPreviousMonthClick: () => void;
}

const StyledTotalBilling = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  margin: -5px;
  padding-top: 15px;

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    margin: 0;
    padding-top: 5px;
  }
`;

const TotalBillingInfo = styled(StyledOvalBoxContainer)`
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  margin: 5px;

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    padding: 15px 0;
    flex-basis: 100%;
  }
`;

const TotalBilledHeader = styled(H4)`
  font-weight: 500;
`;

export const TotalBilling: FC<TotalBillingProps> = ({
  month,
  year,
  income,
  numberOfExecutions,
  onNextMonthClick,
  onPreviousMonthClick,
}) => {
  return (
    <StyledTotalBilling>
      <TotalBillingInfo>
        <TotalBilledHeader>Total income:&nbsp;</TotalBilledHeader>
        <H4>{income} PLN</H4>
      </TotalBillingInfo>
      <TotalBillingInfo>
        <TotalBilledHeader>Total number of executions:&nbsp;</TotalBilledHeader>
        <H4>{numberOfExecutions}</H4>
      </TotalBillingInfo>
      <TotalBillingInfo>
        <MonthSwitch
          month={month}
          year={year}
          onNextMonthClick={onNextMonthClick}
          onPreviousMonthClick={onPreviousMonthClick}
        />
      </TotalBillingInfo>
    </StyledTotalBilling>
  );
};

export default TotalBilling;
