import { SupplierTotalMonthlyBillingDTO } from '@smarthome/data';

export const fetchTotalBilling = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startDate,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endDate,
}: {
  startDate: number;
  endDate: number;
}): Promise<SupplierTotalMonthlyBillingDTO> =>
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
              numberOfExecutions: Math.floor(Math.random() * 5000),
              dailyBillings: MockData,
            })
          : reject(new Error('Server error')),
      500
    );
  });
