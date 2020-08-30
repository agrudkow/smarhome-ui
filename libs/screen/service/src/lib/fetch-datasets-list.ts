import { DatasetDTO } from '@smarthome/data';

export const fetchDatasetsList: () => DatasetDTO[] = () =>
  [...new Array(45)].map((_, index) => ({
    datasetId: `${index}`,
    displayName: `Dataset ${index}`,
    datasetSummary:
      'This view allows you to search through avaliable algortihms provided by ' +
      'suppliers. You can dispaly all datasets by leaving search input empty ' +
      'or you can fill it up and search datasets by key words (provided text ' +
      'will be treated as separate tags by which datasets will be searched). ' +
      'Additionaly you can sort result by name and rating.',
  }));
