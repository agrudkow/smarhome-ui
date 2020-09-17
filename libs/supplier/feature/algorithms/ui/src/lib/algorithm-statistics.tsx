import React, { FC } from 'react';
import styled from 'styled-components';
import { H5, MonthSwitch } from '@smarthome/common/ui';
import { useAlgortihmStatistics } from '@smarthome/supplier/feature/algorithms/logic';
import Plot from './plot';

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
  const {
    statistics,
    handleChangeMonthFactory,
    currentDate,
  } = useAlgortihmStatistics(algorithmId);

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
      <PlotContainer>{statistics && <Plot data={statistics} />}</PlotContainer>
    </StyledAlgorithmStatistics>
  );
};

export default AlgorithmStatistics;
