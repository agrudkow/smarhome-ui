export type TableDataParser<T, K> = (
  data: K[],
  rowButtonText: string,
  rowButtonHandlerFactory: (id: string) => () => void
) => T[];
