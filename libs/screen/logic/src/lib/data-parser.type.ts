export type TableDataParser<T, K, M = (id: string) => () => void> = (
  data: K[],
  rowButtonText: string,
  rowButtonHandlerFactory: M
) => T[];
