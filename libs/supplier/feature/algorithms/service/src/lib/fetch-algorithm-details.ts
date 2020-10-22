import { LoremIpsumGenerator } from '@smarthome/common/logic';
import { AlgorithmDetailsDTO } from '@smarthome/data';

export const fetchAlgorithmDetails: (
  algorithmId: string
) => Promise<AlgorithmDetailsDTO> = (algorithmId) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 5
          ? resolve({
              algorithmId: `${algorithmId}`,
              displayName: `Algorithm ${LoremIpsumGenerator.generateWords(
                3
              )} ${algorithmId}`,
              algorithmSummary: LoremIpsumGenerator.generateSentences(1),
              algorithmDescription: LoremIpsumGenerator.generateParagraphs(4),
              algorithmRating: +(Math.random() * 5).toFixed(2),
              author: 'Jan Kowalski',
              linkURL: 'test-link.test',
            })
          : reject(new Error('Server error')),
      500
    )
  );
