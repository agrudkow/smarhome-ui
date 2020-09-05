import { ResultsetDTO } from '@smarthome/data';

const createDate = (day: number) => (day < 10 ? `0${day}` : day);

export const fetchResultsetDetails = (resultsetId: string): ResultsetDTO => ({
  resultsetId,
  algorithmId: '23',
  algorithmDisplayName: 'Algorithm test name',
  datasetId: '12',
  datasetDisplayName: 'Detaset test name',
  billed: Number((Math.random() * 6).toFixed(4)),
  date: `${createDate(Math.round(Math.random() * 30) + 1)}-06-2020 13:21`,
});
