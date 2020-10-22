import { LoremIpsumGenerator } from '@smarthome/common/logic';
import { AlgorithmTopExecDTO } from '@smarthome/data';

export const fetchTopExecutionsAlgorithms: () => AlgorithmTopExecDTO[] = () =>
  [...new Array(5)]
    .map(() => ({
      algorithmId: `${Math.floor(Math.random() * 100)}`,
      displayName: `Algorithm ${LoremIpsumGenerator.generateWords(
        3
      )} ${Math.floor(Math.random() * 100)}`,
      algorithmSummary: LoremIpsumGenerator.generateSentences(1),
      algorithmExecutions: Math.floor(Math.random() * 1000) + 100,
    }))
    .sort(({ algorithmExecutions: a }, { algorithmExecutions: b }) => b - a);
