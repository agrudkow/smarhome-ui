export enum CustomerRoutes {
  Algorithms = 'algorithms',
  Datasets = 'datasets',
  User = 'user',
  Dashboard = '',
  Execution = 'execution',
}

export enum CustomerAlgorithmRoutes {
  Execute = 'execute',
  SelectDataset = 'select-dataset',
}

export enum CustomerDatasetRoutes {
  Execute = 'execute',
  SelectAlgorithm = 'select-algorithm',
}

export enum SupplierRoutes {
  Algorithms = 'algorithms',
  User = 'user',
  Dashboard = '',
}

export enum SupplierAlgorithmRoutes {
  Edit = 'execute',
  Add = 'select-dataset',
}
