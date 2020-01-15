import React, { FunctionComponent } from 'react';

export const ArrowheadRight: FunctionComponent<
  JSX.IntrinsicElements['svg'] & {
    iconColor: string;
  }
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
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M6.4833,16.0279 C6.1033,16.0279 5.7243,15.8859 5.4343,15.6029 C4.8553,15.0359 4.8553,14.1179 5.4343,13.5499 L9.5603,9.5129 L5.4343,5.4759 C4.8553,4.9099 4.8553,3.9909 5.4343,3.4239 C6.0143,2.8589 6.9523,2.8589 7.5323,3.4239 L12.4253,8.2119 C12.7803,8.5559 12.9773,9.0189 12.9773,9.5109 C12.9773,10.0069 12.7803,10.4689 12.4223,10.8169 L7.5323,15.6029 C7.2423,15.8859 6.8623,16.0279 6.4833,16.0279"
        fill={iconColor}
      ></path>
    </g>
  </svg>
);
