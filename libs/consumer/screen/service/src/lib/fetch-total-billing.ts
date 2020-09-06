import { TotalMonthlyBillingDTO } from '@smarthome/data';

const MockData = [...new Array(30)].map((_, index) => ({
  day: index + 1,
  billed: index < 25 ? Number((Math.random() * 100).toFixed(2)) : 0.0,
}));

export const fetchTotalBilling = (_: Date): TotalMonthlyBillingDTO => ({
  billed: Number(
    MockData.reduce(({ billed: billedA }, { billed: billedB }) => ({
      billed: billedA + billedB,
      day: 0,
    })).billed.toFixed(2)
  ),
  milliseconds: 254334234,
  dailyBillings: MockData,
});
