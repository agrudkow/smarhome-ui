import React from 'react';

export const User: React.FC<
  JSX.IntrinsicElements['svg'] & { iconColor: string }
> = ({ iconColor, ...restProps }) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 20 20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...restProps}
  >
    <g
      id="icon/user"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <path
        d="M10.3636364,10.6949698 C12.8059091,10.6949698 17.9906476,12.0326302 18.0274658,14.4747808 L18.0274658,18.03479 L18.0274658,18.03479 C16.2628174,18.6782633 13.7436523,19 10.4699707,19 C5.61448975,19 3.12605576,18.0824473 3.00466873,18.0365696 C3,17.7947338 3,16.9682689 3,14.4747808 C3.03681818,12.0326302 7.90909091,10.6949698 10.3636364,10.6949698 Z M10.3636364,1 C12.4009091,1 14.0454545,2.64569044 14.0454545,4.6816341 C14.0454545,6.71880497 12.4009091,8.3632682 10.3636364,8.3632682 C8.32636364,8.3632682 6.68181818,6.71880497 6.68181818,4.6816341 C6.68181818,2.64569044 8.32636364,1 10.3636364,1 Z"
        id="Combined-Shape"
        fill={iconColor}
      ></path>
    </g>
  </svg>
);
