import { AlgorithmDetailsDTO } from '@smarthome/data';

export const fetchAlgorithmDetails: (
  algorithmId: string
) => AlgorithmDetailsDTO = (algorithmId) => ({
  algorithmId: `${algorithmId}`,
  displayName: `Algorithm ${algorithmId}`,
  algorithmSummary:
    'This view allows you to search through avaliable algortihms provided by ' +
    'suppliers. You can dispaly all algorithms by leaving search input empty ' +
    'or you can fill it up and search algorithms by key words (provided text ' +
    'will be treated as separate tags by which algorithms will be searched). ' +
    'Additionaly you can sort result by name and rating.',
  algorithmDescription:
    "The Fisher–Yates shuffle is an algorithm for generating a random permutation of a finite sequence—in plain terms, the algorithm shuffles the sequence. The algorithm effectively puts all the elements into a hat; it continually determines the next element by randomly drawing an element from the hat until no elements remain. The algorithm produces an unbiased permutation: every permutation is equally likely. The modern version of the algorithm is efficient: it takes time proportional to the number of items being shuffled and shuffles them in place. The Fisher–Yates shuffle is named after Ronald Fisher and Frank Yates, who first described it, and is also known as the Knuth shuffle after Donald Knuth. A variant of the Fisher–Yates shuffle, known as Sattolo's algorithm, may be used to generate random cyclic permutations of length n instead of random permutations.",
  algorithmRating: +(Math.random() * 5).toFixed(2),
  author: 'Jan Kowalski',
  linkURL: 'test-link.test',
});
