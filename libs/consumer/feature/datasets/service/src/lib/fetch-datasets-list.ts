import { DatasetDTO } from '@smarthome/data';

export const fetchDatasetsList: (
  searchPhrase: string
) => Promise<DatasetDTO[]> = async () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 5
          ? resolve(
              [...new Array(45)].map((_, index) => ({
                datasetId: `${index}`,
                displayName: `Dataset ${index}`,
                datasetSummary:
                  'This view allows you to search through avaliable algortihms provided by ' +
                  'suppliers. You can dispaly all datasets by leaving search input empty ' +
                  'or you can fill it up and search datasets by key words (provided text ' +
                  'will be treated as separate tags by which datasets will be searched). ' +
                  'Additionaly you can sort result by name and rating.',
              }))
            )
          : reject(new Error('Server error')),
      500
    )
  );
