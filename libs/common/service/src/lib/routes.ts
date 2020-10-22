export enum ConsumerRoutes {
  Algorithms = 'algorithms',
  Datasets = 'datasets',
  User = 'user',
  Dashboard = '',
  Execution = 'execution',
  SignIn = 'sign-in',
  SignUp = 'sign-up',
}
export enum ConsumerAlgorithmRoutes {
  Execute = 'execute',
  SelectDataset = 'select-dataset',
}

export enum ConsumerDatasetRoutes {
  Execute = 'execute',
  SelectAlgorithm = 'select-algorithm',
}

export enum SupplierRoutes {
  Algorithms = 'algorithms',
  User = 'user',
  Dashboard = '',
  SignIn = 'sign-in',
  SignUp = 'sign-up',
}
