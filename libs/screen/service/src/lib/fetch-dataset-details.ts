import { DatasetDetailsDTO } from '@smarthome/data';

export const fetchDatasetDetails: (datasetId: string) => DatasetDetailsDTO = (
  datasetId
) => ({
  datasetId: `${datasetId}`,
  displayName: `Dataset ${datasetId}`,
  datasetSummary:
    'This view allows you to search through avaliable algortihms provided by ' +
    'suppliers. You can dispaly all datasets by leaving search input empty ' +
    'or you can fill it up and search datasets by key words (provided text ' +
    'will be treated as separate tags by which datasets will be searched). ' +
    'Additionaly you can sort result by name and rating.',
  datasetDescription:
    "The Fisher–Yates shuffle is an dataset for generating a random permutation of a finite sequence—in plain terms, the dataset shuffles the sequence. The dataset effectively puts all the elements into a hat; it continually determines the next element by randomly drawing an element from the hat until no elements remain. The dataset produces an unbiased permutation: every permutation is equally likely. The modern version of the dataset is efficient: it takes time proportional to the number of items being shuffled and shuffles them in place. The Fisher–Yates shuffle is named after Ronald Fisher and Frank Yates, who first described it, and is also known as the Knuth shuffle after Donald Knuth. A variant of the Fisher–Yates shuffle, known as Sattolo's dataset, may be used to generate random cyclic permutations of length n instead of random permutations." +
    "The Fisher–Yates shuffle is an dataset for generating a random permutation of a finite sequence—in plain terms, the dataset shuffles the sequence. The dataset effectively puts all the elements into a hat; it continually determines the next element by randomly drawing an element from the hat until no elements remain. The dataset produces an unbiased permutation: every permutation is equally likely. The modern version of the dataset is efficient: it takes time proportional to the number of items being shuffled and shuffles them in place. The Fisher–Yates shuffle is named after Ronald Fisher and Frank Yates, who first described it, and is also known as the Knuth shuffle after Donald Knuth. A variant of the Fisher–Yates shuffle, known as Sattolo's dataset, may be used to generate random cyclic permutations of length n instead of random permutations." +
    "The Fisher–Yates shuffle is an dataset for generating a random permutation of a finite sequence—in plain terms, the dataset shuffles the sequence. The dataset effectively puts all the elements into a hat; it continually determines the next element by randomly drawing an element from the hat until no elements remain. The dataset produces an unbiased permutation: every permutation is equally likely. The modern version of the dataset is efficient: it takes time proportional to the number of items being shuffled and shuffles them in place. The Fisher–Yates shuffle is named after Ronald Fisher and Frank Yates, who first described it, and is also known as the Knuth shuffle after Donald Knuth. A variant of the Fisher–Yates shuffle, known as Sattolo's dataset, may be used to generate random cyclic permutations of length n instead of random permutations.",
  author: 'Jan Kowalski',
  linkURL: 'test-link.test',
});
