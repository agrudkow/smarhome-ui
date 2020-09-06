import { Cell } from '@smarthome/common/ui';
import { ExecutionBilling } from './billing.interface';

const getDesktopCells = (): Cell<keyof ExecutionBilling>[] => {
  const cells: Cell<keyof ExecutionBilling>[] = [
    {
      id: 'datasetDisplayName',
      label: 'Dataset',
      disablePadding: false,
      align: 'left',
      style: { maxWidth: '25%' },
    },
    {
      id: 'algorithmDisplayName',
      label: ' Algorithm',
      disablePadding: false,
      align: 'left',
      style: { width: '25%' },
    },
    {
      id: 'billed',
      label: 'Billed',
      disablePadding: false,
      align: 'right',
      style: { maxWidth: '15%' },
    },
    {
      id: 'date',
      label: 'Date',
      disablePadding: false,
      enableSorting: true,
      align: 'right',
      style: { maxWidth: '15%' },
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

const getTabletCells = (): Cell<keyof ExecutionBilling>[] => {
  const cells: Cell<keyof ExecutionBilling>[] = [
    {
      id: 'datasetDisplayName',
      label: 'Dataset',
      disablePadding: false,
      align: 'left',
      style: { maxWidth: '45%' },
    },
    {
      id: 'billed',
      label: 'Billed',
      disablePadding: false,
      align: 'right',
      style: { maxWidth: '15%' },
    },
    {
      id: 'date',
      label: 'Date',
      disablePadding: false,
      enableSorting: true,
      align: 'right',
      style: { maxWidth: '15%' },
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

const getMobileCells = (): Cell<keyof ExecutionBilling>[] => {
  const cells: Cell<keyof ExecutionBilling>[] = [
    {
      id: 'datasetDisplayName',
      label: 'Dataset',
      disablePadding: false,
      align: 'left',
      style: { maxWidth: '45%' },
    },
    {
      id: 'billed',
      label: 'Billed',
      disablePadding: false,
      align: 'right',
      style: { maxWidth: '15%' },
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

export const executionBillingsCellsParser = (
  screenWidth: number,
  defaultScreenWidths: { desktop: number; tablet: number }
): Cell<keyof ExecutionBilling>[] => {
  const { desktop, tablet } = defaultScreenWidths;

  if (screenWidth > desktop) return getDesktopCells();
  else if (screenWidth > tablet) return getTabletCells();
  else return getMobileCells();
};

// TODO: service and attach to table remake billings to dashboard
