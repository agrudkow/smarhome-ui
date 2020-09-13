import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { H5, MonthSwitch } from '@smarthome/common/ui';
import { AlgorithmStatistics as AlgorithmStatisticsType } from '@smarthome/supplier/feature/algorithms/logic';
import { fetchAlgorithmStatistics } from '@smarthome/supplier/feature/algorithms/service';
import Plot from './plot';
import { useMonthSwitch } from '@smarthome/common/logic';

export interface AlgorithmStatisticsProps {
  algorithmId: string;
}

const StyledAlgorithmStatistics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 15px 0;
`;

const PlotContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const MonthSwitchContainer = styled.div`
  width: 30%;
`;

export const AlgorithmStatistics: FC<AlgorithmStatisticsProps> = ({
  algorithmId,
}) => {
  const [staisticData, setStaisticData] = useState<AlgorithmStatisticsType[]>(
    []
  );
  const { currentDate, handleChangeMonthFactory } = useMonthSwitch();

  useEffect(() => {
    setStaisticData(fetchAlgorithmStatistics(algorithmId, currentDate));
  }, [algorithmId, currentDate]);
  return (
    <StyledAlgorithmStatistics>
      <MonthSwitchContainer>
        <MonthSwitch
          month={currentDate.getMonth()}
          year={currentDate.getFullYear()}
          onNextMonthClick={handleChangeMonthFactory(1)}
          onPreviousMonthClick={handleChangeMonthFactory(-1)}
        />
      </MonthSwitchContainer>
      <H5>Daily number of executions</H5>
      <br />
      <PlotContainer>
        <Plot data={staisticData} />
      </PlotContainer>
    </StyledAlgorithmStatistics>
  );
};

export default AlgorithmStatistics;
