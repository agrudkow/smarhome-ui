import { DatasetDTO } from '@smarthome/data';
import { LoremIpsumGenerator } from '@smarthome/common/logic';

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
                displayName: `Dataset ${LoremIpsumGenerator.generateWords(
                  3
                )} ${index}`,
                datasetSummary: LoremIpsumGenerator.generateSentences(1),
              }))
            )
          : reject(new Error('Server error')),
      500
    )
  );
