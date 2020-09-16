import { useCallback } from 'react';

export function useAlgortihmStatistics(algorithmId: string) {
  const handleTestSyntax = useCallback(() => {
    console.log(`Test syntax`);
  }, []);

  return { handleTestSyntax } as const;
}
