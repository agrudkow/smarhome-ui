export interface RateAlgorithmProps {
  algorithmId: string;
  rating: number;
}

export const rateAlgorithm: (data: RateAlgorithmProps) => Promise<void> = () =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 9 ? resolve() : reject(new Error('Server error')),
      500
    )
  );
