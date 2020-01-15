import React, { FunctionComponent } from 'react';

export const ArrowLeft: FunctionComponent<
  JSX.IntrinsicElements['svg'] & {
    iconColor: string;
  }
> = ({ iconColor, ...restProps }) => (
  <svg
    width="16px"
    height="17px"
    viewBox="0 0 16 17"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...restProps}
  >
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g
        id="package/table/mobile/manager/line"
        transform="rotate(-90) translate(-310.000000, -12.000000)"
        fill={iconColor}
      >
        <g
          id="icon/arrow-dropdown"
          transform="translate(290.000000, 10.000000)"
        >
          <path
            d="M11.7249436,3.31093631 C11.4840651,2.91080601 10.8438567,2.91080601 10.6037785,3.23091025 L10.5245527,3.31093631 C10.1244224,3.7110666 10.1244224,4.27124901 10.5245527,4.6713793 L15.1250739,9.35192653 L2.88028664,9.35192653 C2.40013029,9.35192653 2,9.83208288 2,10.3122392 C2,10.7923956 2.40013029,11.1925259 2.88028664,11.1925259 L15.0442476,11.1925259 L10.4437264,15.8730731 C10.0435961,16.2732034 10.0435961,16.8333858 10.4437264,17.2335161 C10.6838046,17.6336464 11.3248133,17.6336464 11.5648915,17.3135422 L11.6441173,17.2335161 L17.6050814,11.0324738 C17.8451596,10.7923956 18.0052117,10.5523174 18.0052117,10.1521871 C18.0852378,9.992135 17.9259859,9.75205683 17.6851075,9.51197865 L11.7249436,3.31093631 Z"
            id="Fill-1"
            transform="translate(10.013046, 10.272226) rotate(-90.000000) translate(-10.013046, -10.272226) "
          ></path>
        </g>
      </g>
    </g>
  </svg>
);
