import { ExecutionBillingDTO } from '@smarthome/data';

const createDate = (day: number) => (day < 10 ? `0${day}` : day);

export const fetchExecutionBillingList = (): ExecutionBillingDTO[] =>
  [...Array(45)].map((_, index) => ({
    algorithmId: `${index}`,
    algorithmDisplayName: `Algorithm ${index}`,
    datasetId: `${index}`,
    datasetDisplayName: `Dataset ${index}`,
    billed: Number((Math.random() * 6).toFixed(4)),
    date: `${createDate(Math.round(Math.random() * 30) + 1)}-06-2020`,
  }));
