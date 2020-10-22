export const deleteResultset: (
  resultsetId: string
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
) => Promise<void> = (resultsetId) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        Math.random() * 100 > 9 ? resolve() : reject(new Error('Server error')),
      500
    )
  );
