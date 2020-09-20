import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';
import { StyledOvalBoxContainer, H4, ArrowButton } from '@smarthome/common/ui';
import { getMonthName } from '@smarthome/common/logic';

export interface TotalBillingProps {
  billedAmount: ReactNode;
  billedTime: ReactNode;
  month: number;
  year: number;
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

const MonthName = styled(H4)`
  text-align: center;
  width: 50%;
`;

export const TotalBilling: FC<TotalBillingProps> = ({
  billedAmount,
  billedTime,
  month,
  year,
  onNextMonthClick,
  onPreviousMonthClick,
}) => {
  return (
    <StyledTotalBilling>
      <TotalBillingInfo>
        <TotalBilledHeader>Billed in total:&nbsp;</TotalBilledHeader>
        <H4>{billedAmount} PLN</H4>
      </TotalBillingInfo>
      <TotalBillingInfo>
        <TotalBilledHeader>Billed time:&nbsp;</TotalBilledHeader>
        <H4>{billedTime} MS</H4>
      </TotalBillingInfo>
      <TotalBillingInfo>
        <ArrowButton rotate="180deg" onClick={onPreviousMonthClick} />
        <MonthName>
          {getMonthName(month)}&nbsp;{year}
        </MonthName>
        <ArrowButton onClick={onNextMonthClick} />
      </TotalBillingInfo>
    </StyledTotalBilling>
  );
};

export default TotalBilling;
