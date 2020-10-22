import { AlgorithmStatisticsDTO } from '@smarthome/data';

const MockData: AlgorithmStatisticsDTO[] = [...new Array(30)].map(
  (_, index) => ({
    day: index + 1,
    executionNumber: index < 25 ? Math.floor(Math.random() * 100) : 0,
  })
);

export const fetchAlgorithmStatistics = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  algorithmId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startDate,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endDate,
}: {
  algorithmId: string;
  startDate: number;
  endDate: number;
}): AlgorithmStatisticsDTO[] => MockData;
