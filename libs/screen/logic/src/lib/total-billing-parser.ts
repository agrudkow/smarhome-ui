import { TotalMonthlyBillingDTO } from '@smarthome/data';
import { TotalMonthlyBilling } from './billing.interface';

export const totalBillingParser: (
  data: TotalMonthlyBillingDTO
) => TotalMonthlyBilling = ({ billed, milliseconds }) => {
  const seconds = Math.trunc((milliseconds / 1000) % 60);
  const minutes = Math.trunc((milliseconds / (1000 * 60)) % 60);
  const hours = Math.trunc((milliseconds / (1000 * 60 * 60)) % 24);

  const billedTime = `${hours}h ${minutes}m ${seconds}s`;
  return { billed, time: billedTime };
};
