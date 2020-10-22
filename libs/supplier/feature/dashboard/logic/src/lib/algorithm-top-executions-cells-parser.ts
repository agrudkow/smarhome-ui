import { Cell } from '@smarthome/common/ui';
import { AlgorithmTopExec } from './algorithms-top.interface';

const getDesktopCells = (): Cell<keyof AlgorithmTopExec>[] => {
  const cells: Cell<keyof AlgorithmTopExec>[] = [
    {
      id: 'name',
      label: 'Name',
      disablePadding: false,
      enableSorting: true,
      align: 'left',
      style: { width: '20%' },
    },
    {
      id: 'briefDescription',
      label: 'Short description',
      disablePadding: false,
      align: 'left',
      style: { maxWidth: '70%' },
    },
    {
      id: 'executions',
      label: 'Number of executions',
      disablePadding: false,
      enableSorting: true,
      align: 'right',
      style: { width: '140px' },
    },
    {
      id: 'button',
      label: '',
      disablePadding: false,
      align: 'right',
      style: { width: '100px' },
    },
  ];

  return cells;
};

const getTabletCells = (): Cell<keyof AlgorithmTopExec>[] => {
  const cells: Cell<keyof AlgorithmTopExec>[] = [
    {
      id: 'name',
      label: 'Name',
      disablePadding: false,
      enableSorting: true,
      align: 'left',
      style: { width: '45%' },
    },
    {
      id: 'executions',
      label: 'Number of executions',
      disablePadding: false,
      enableSorting: true,
      align: 'right',
      style: { width: '130px' },
    },
    {
      id: 'button',
      label: '',
      disablePadding: false,
      align: 'right',
      style: { width: '90px' },
    },
  ];

  return cells;
};

const getMobileCells = (): Cell<keyof AlgorithmTopExec>[] => {
  const cells: Cell<keyof AlgorithmTopExec>[] = [
    {
      id: 'name',
      label: 'Name',
      disablePadding: false,
      enableSorting: true,
      align: 'left',
      style: { width: '45%' },
    },
    {
      id: 'executions',
      label: 'Number of executions',
      disablePadding: false,
      enableSorting: true,
      align: 'right',
      style: { width: '75px' },
    },
    {
      id: 'button',
      label: '',
      disablePadding: false,
      align: 'right',
      style: { width: '80px' },
    },
  ];

  return cells;
};

export const algorithmTopExecutionsCellsParser = (
  screenWidth: number,
  defaultScreenWidths: { desktop: number; tablet: number }
): Cell<keyof AlgorithmTopExec>[] => {
  const { desktop, tablet } = defaultScreenWidths;

  if (screenWidth > desktop) return getDesktopCells();
  else if (screenWidth > tablet) return getTabletCells();
  else return getMobileCells();
};
