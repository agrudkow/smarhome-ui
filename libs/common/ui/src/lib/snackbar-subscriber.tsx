import React, { FC } from 'react';
import { useSncakbarSubscriber } from '@smarthome/common/logic';

export const SnackbarSubscriber: FC = ({ children }) => {
  useSncakbarSubscriber();
  return <>{children}</>;
};

export default SnackbarSubscriber;
