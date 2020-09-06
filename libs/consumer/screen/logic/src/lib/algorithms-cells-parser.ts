import { Cell } from '@smarthome/common/ui';
import { BaseAlgorithm } from './algorithm.interface';

const getDesktopCells = (): Cell<keyof BaseAlgorithm>[] => {
  const cells: Cell<keyof BaseAlgorithm>[] = [
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
      id: 'rating',
      label: 'Rating',
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
      style: { width: '100px' },
    },
  ];

  return cells;
};

const getTabletCells = (): Cell<keyof BaseAlgorithm>[] => {
  const cells: Cell<keyof BaseAlgorithm>[] = [
    {
      id: 'name',
      label: 'Name',
      disablePadding: false,
      enableSorting: true,
      align: 'left',
      style: { width: '45%' },
    },
    {
      id: 'rating',
      label: 'Rating',
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

const getMobileCells = (): Cell<keyof BaseAlgorithm>[] => {
  const cells: Cell<keyof BaseAlgorithm>[] = [
    {
      id: 'name',
      label: 'Name',
      disablePadding: false,
      enableSorting: true,
      align: 'left',
      style: { width: '45%' },
    },
    {
      id: 'rating',
      label: 'Rating',
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

export const algorithmsCellsParser = (
  screenWidth: number,
  defaultScreenWidths: { desktop: number; tablet: number }
): Cell<keyof BaseAlgorithm>[] => {
  const { desktop, tablet } = defaultScreenWidths;

  if (screenWidth > desktop) return getDesktopCells();
  else if (screenWidth > tablet) return getTabletCells();
  else return getMobileCells();
};
