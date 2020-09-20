import { AlgorithmDTO } from '@smarthome/data';

export const fetchAlgorithmsList: (
  searchPharse?: string
) => Promise<AlgorithmDTO[]> = async () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 5
          ? resolve(
              [...new Array(45)].map((_, index) => ({
                algorithmId: `${index}`,
                displayName: `Algorithm ${index}`,
                algorithmSummary:
                  'This view allows you to search through avaliable algortihms provided by ' +
                  'suppliers. You can dispaly all algorithms by leaving search input empty ' +
                  'or you can fill it up and search algorithms by key words (provided text ' +
                  'will be treated as separate tags by which algorithms will be searched). ' +
                  'Additionaly you can sort result by name and rating.',
                algorithmRating: +(Math.random() * 5).toFixed(2),
              }))
            )
          : reject(new Error('Server error')),
      500
    )
  );
