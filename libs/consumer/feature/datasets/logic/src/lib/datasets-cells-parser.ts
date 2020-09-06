import { Cell } from '@smarthome/common/ui';
import { BaseDataset } from './dataset.interface';

const getDesktopCells = (): Cell<keyof BaseDataset>[] => {
  const cells: Cell<keyof BaseDataset>[] = [
    {
      id: 'name',
      label: 'Name',
      disablePadding: false,
      enableSorting: true,
      align: 'left',
      style: { width: '25%' },
    },
    {
      id: 'briefDescription',
      label: 'Description',
      disablePadding: false,
      align: 'left',
      style: { maxWidth: '70%' },
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

const getTabletCells = (): Cell<keyof BaseDataset>[] => {
  const cells: Cell<keyof BaseDataset>[] = [
    {
      id: 'name',
      label: 'Name',
      disablePadding: false,
      enableSorting: true,
      align: 'left',
      style: { width: '45%' },
    },
    {
      id: 'briefDescription',
      label: 'Description',
      disablePadding: false,
      align: 'left',
      style: { maxWidth: '30%' },
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

const getMobileCells = (): Cell<keyof BaseDataset>[] => {
  const cells: Cell<keyof BaseDataset>[] = [
    {
      id: 'name',
      label: 'Name',
      disablePadding: false,
      enableSorting: true,
      align: 'left',
      style: { width: '65%' },
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

export const datasetsCellsParser = (
  screenWidth: number,
  defaultScreenWidths: { desktop: number; tablet: number }
): Cell<keyof BaseDataset>[] => {
  const { desktop, tablet } = defaultScreenWidths;

  if (screenWidth > desktop) return getDesktopCells();
  else if (screenWidth > tablet) return getTabletCells();
  else return getMobileCells();
};
