import { LoremIpsum } from 'lorem-ipsum';

export const LoremIpsumGenerator = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 2,
  },
  wordsPerSentence: {
    max: 16,
    min: 8,
  },
});
