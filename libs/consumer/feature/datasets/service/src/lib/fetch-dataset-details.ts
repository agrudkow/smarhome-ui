import { LoremIpsumGenerator } from '@smarthome/common/logic';
import { DatasetDetailsDTO } from '@smarthome/data';

export const fetchDatasetDetails: (
  datasetId: string
) => Promise<DatasetDetailsDTO> = (datasetId) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 5
          ? resolve({
              datasetId: `${datasetId}`,
              displayName: `Dataset ${LoremIpsumGenerator.generateWords(
                3
              )} ${datasetId}`,
              datasetSummary: LoremIpsumGenerator.generateSentences(1),
              datasetDescription: LoremIpsumGenerator.generateParagraphs(4),
              linkURL: 'test-link.test',
            })
          : reject(new Error('Server error')),
      500
    )
  );
