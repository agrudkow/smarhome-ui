import React, { FC } from 'react';
import { useErrorSncakbar } from '@smarthome/common/logic';

export const SnackbarErrorSubscriber: FC = ({ children }) => {
  useErrorSncakbar();
  return <>{children}</>;
};

export default SnackbarErrorSubscriber;
