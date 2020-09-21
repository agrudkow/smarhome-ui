import { AlgorithmDTO } from '@smarthome/data';
import { LoremIpsumGenerator } from '@smarthome/common/logic';

export const fetchTopRatingAlgorithms: () => AlgorithmDTO[] = () =>
  [...new Array(5)]
    .map(() => ({
      algorithmId: `${Math.floor(Math.random() * 100)}`,
      displayName: `Algorithm ${LoremIpsumGenerator.generateWords(
        3
      )} ${Math.floor(Math.random() * 100)}`,
      algorithmSummary: LoremIpsumGenerator.generateSentences(1),
      algorithmRating: +(Math.random() * 5).toFixed(2),
    }))
    .sort(({ algorithmRating: a }, { algorithmRating: b }) => b - a);
