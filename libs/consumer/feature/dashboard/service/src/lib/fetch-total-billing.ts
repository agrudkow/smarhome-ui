import { ConsumerTotalMonthlyBillingDTO } from '@smarthome/data';

export interface FetchTotalBillingProps {
  startDate: number;
  endDate: number;
}

export const fetchTotalBilling: (
  data: FetchTotalBillingProps
) => Promise<ConsumerTotalMonthlyBillingDTO> = ({ startDate, endDate }) =>
  new Promise((resolve, reject) => {
    const currentDay = new Date().getDate();
    const currentDate = new Date().getTime();
    const fetchType: 'past' | 'current' | 'future' =
      currentDate > endDate
        ? 'past'
        : currentDate < startDate
        ? 'future'
        : 'current';
    const MockData = [...new Array(30)].map((_, index) => ({
      day: index + 1,
      billed:
        fetchType === 'current'
          ? index < currentDay
            ? Number((Math.random() * 100).toFixed(2))
            : 0.0
          : fetchType === 'past'
          ? Number((Math.random() * 100).toFixed(2))
          : 0.0,
    }));
    return setTimeout(
      () =>
        Math.random() * 100 > 5
          ? resolve({
              billed: Number(
                MockData.reduce(({ billed: billedA }, { billed: billedB }) => ({
                  billed: billedA + billedB,
                  day: 0,
                })).billed.toFixed(2)
              ),
              milliseconds: Math.floor(Math.random() * 5000000),
              dailyBillings: MockData,
            })
          : reject(new Error('Server error')),
      500
    );
  });
