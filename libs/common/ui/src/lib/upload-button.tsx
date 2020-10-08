import React, { ChangeEvent, FC } from 'react';
import BaseButton from './base-button';

export interface UploadButtonProps {
  /**Callback handling change of input file value.*/
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /**Button text (defaults to 'UPLOAD').*/
  text?: string;
}

/**
 * UploadButton component displays .txt file input with button responsible for triggering input.
 * @param param0
 */
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
