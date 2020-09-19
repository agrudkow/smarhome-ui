import { ConsumerTotalMonthlyBillingDTO } from '@smarthome/data';

export const fetchTotalBilling = (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: Date
): Promise<ConsumerTotalMonthlyBillingDTO> => {
  const MockData = [...new Array(30)].map((_, index) => ({
    day: index + 1,
    billed: index < 25 ? Number((Math.random() * 100).toFixed(2)) : 0.0,
  }));
  return new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 5
          ? resolve({
              billed: Number(
                MockData.reduce(({ billed: billedA }, { billed: billedB }) => ({
                  billed: billedA + billedB,
                  day: 0,
                })).billed.toFixed(2)
              ),
              milliseconds: 254334234,
              dailyBillings: MockData,
            })
          : reject(new Error('Server error')),
      500
    )
  );
};
