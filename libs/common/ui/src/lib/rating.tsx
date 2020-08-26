import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import MUIRating, {
  RatingProps as MUIRatingProps,
} from '@material-ui/lab/Rating';
import { useWindowDimensions } from '@smarthome/common/logic';

/* eslint-disable-next-line */
export interface RatingProps extends MUIRatingProps {}

export const Rating: FC<RatingProps> = (props) => {
  const { width } = useWindowDimensions();
  const {
    breakpoints: {
      inPixels: { tablet },
    },
  } = useContext(ThemeContext);
  const isMobile = width <= tablet;

  return <MUIRating {...props} size={isMobile ? 'small' : undefined} />;
};

export default Rating;
