import { AlgorithmDTO } from '@smarthome/data';
import { LoremIpsumGenerator } from '@smarthome/common/logic';

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
                displayName: `Algorithm ${LoremIpsumGenerator.generateWords(
                  3
                )} ${index}`,
                algorithmSummary: LoremIpsumGenerator.generateSentences(1),
                algorithmRating: +(Math.random() * 5).toFixed(2),
              }))
            )
          : reject(new Error('Server error')),
      500
    )
  );
