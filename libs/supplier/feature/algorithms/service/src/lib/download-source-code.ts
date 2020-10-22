export const downloadSourceCode: (
  algorithmId: string
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
) => Promise<void> = (algorithmId) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 9 ? resolve() : reject(new Error('Server error')),
      500
    )
  );
