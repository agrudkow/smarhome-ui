import React, { ChangeEvent, FC } from 'react';
import BaseButton from './base-button';

export interface UploadButtonProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  text?: string;
}

export const UploadButton: FC<UploadButtonProps> = ({
  onChange,
  text = 'UPLOAD',
}) => {
  return (
    <>
      <input
        accept=".txt"
        id="contained-button-file"
        type="file"
        onChange={onChange}
        style={{ display: 'none' }}
      />
      <label htmlFor="contained-button-file">
        <BaseButton component="span">{text}</BaseButton>
      </label>
    </>
  );
};

export default UploadButton;
