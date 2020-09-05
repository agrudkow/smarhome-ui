import { TotalMonthlyBillingDTO } from '@smarthome/data';
import { TotalMonthlyBilling } from './billing.interface';

export const totalBillingParser: (
  data: TotalMonthlyBillingDTO
) => TotalMonthlyBilling = ({ billed, milliseconds, dailyBillings }) => {
  const seconds = Math.trunc((milliseconds / 1000) % 60);
  const minutes = Math.trunc((milliseconds / (1000 * 60)) % 60);
  const hours = Math.trunc((milliseconds / (1000 * 60 * 60)) % 24);
  const parsedDailyBillings = dailyBillings.map(({ billed, day }) => ({
    day: day < 10 ? `0${day}` : `${day}`,
    billed,
  }));

  const billedTime = `${hours}h ${minutes}m ${seconds}s`;
  return { billed, time: billedTime, dailyBillings: parsedDailyBillings };
};
