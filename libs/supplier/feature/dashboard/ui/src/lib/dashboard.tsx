import React, { useState, useEffect } from 'react';
import { InfoHeader, UnderlinedContainer } from '@smarthome/common/ui';
import {
  TotalMonthlyBilling,
  totalBillingParser,
} from '@smarthome/consumer/feature/resultsets/logic';
import { fetchTotalBilling } from '@smarthome/consumer/feature/resultsets/service';
import TotalBilling from './total-billing';
import BillingsPlot from './billings-plot';

export const Dashboard: React.FC = () => {
  const [totalIncomes, setTotalIncomes] = useState<
    TotalMonthlyBilling | undefined
  >();
  const [totalCosts, setTotalCosts] = useState<
    TotalMonthlyBilling | undefined
  >();
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleChangeMonthFactory = (value: number) => () =>
    setCurrentDate(
      (previousValue) =>
        new Date(
          previousValue.getFullYear(),
          previousValue.getMonth() + value,
          previousValue.getDate()
        )
    );

  useEffect(() => {
    setTotalIncomes(totalBillingParser(fetchTotalBilling(currentDate)));
    setTotalCosts(totalBillingParser(fetchTotalBilling(currentDate)));
  }, [currentDate]);

  return (
    <>
      <InfoHeader
        headerText={'Dashboard'}
        infoMessageText={
          'This view allows you to check your current billinng information like an overall billing for month, a plot the most billed datsets and list of recentliy billed execuitons of algorithms on datasets.'
        }
      />
      <UnderlinedContainer />
      <TotalBilling
        billedAmount={totalIncomes?.billed ?? '-'}
        billedTime={totalIncomes?.time ?? '-'}
        month={currentDate.getMonth()}
        year={currentDate.getFullYear()}
        onNextMonthClick={handleChangeMonthFactory(1)}
        onPreviousMonthClick={handleChangeMonthFactory(-1)}
      />
      <BillingsPlot
        incomes={totalIncomes?.dailyBillings ?? []}
        costs={totalCosts?.dailyBillings ?? []}
      />
    </>
  );
};

export default Dashboard;
