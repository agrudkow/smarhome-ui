import React from 'react';

export const DashboardIcon: React.FC<
  JSX.IntrinsicElements['svg'] & { iconColor: string }
> = ({ iconColor, ...restProps }) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 448 512"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...restProps}
  >
    <path
      fill={iconColor}
      d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 64v128H256V96zm-192 0v128H64V96zM64 416V288h128v128zm192 0V288h128v128z"
    ></path>
  </svg>
);
