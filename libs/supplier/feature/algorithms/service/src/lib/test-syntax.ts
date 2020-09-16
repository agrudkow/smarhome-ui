export const testSyntax: (
  algorithmId: string
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
) => Promise<string> = (algorithmId) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 90
          ? resolve('OK')
          : reject(new Error('Server error')),
      2000
    )
  );
