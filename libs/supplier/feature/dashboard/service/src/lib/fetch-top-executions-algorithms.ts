import { AlgorithmTopExecDTO } from '@smarthome/data';

export const fetchTopExecutionsAlgorithms: () => AlgorithmTopExecDTO[] = () =>
  [...new Array(5)]
    .map(() => ({
      algorithmId: `${Math.floor(Math.random() * 100)}`,
      displayName: `Algorithm ${Math.floor(Math.random() * 100)}`,
      algorithmSummary:
        'This view allows you to search through avaliable algortihms provided by ' +
        'suppliers. You can dispaly all algorithms by leaving search input empty ' +
        'or you can fill it up and search algorithms by key words (provided text ' +
        'will be treated as separate tags by which algorithms will be searched). ' +
        'Additionaly you can sort result by name and rating.',
      algorithmExecutions: Math.floor(Math.random() * 1000) + 100,
    }))
    .sort(({ algorithmExecutions: a }, { algorithmExecutions: b }) => b - a);
