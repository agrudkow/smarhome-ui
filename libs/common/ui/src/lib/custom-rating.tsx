import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import MUIRating, {
  RatingProps as MUIRatingProps,
} from '@material-ui/lab/Rating';
import { useWindowDimensions } from '@smarthome/common/logic';

/**
 * CustomRating compoent displays MUIRating component adaptted to RWB layout (if mobile view then component size is small).
 * @see https://material-ui.com/components/rating/
 */
export const CustomRating: FC<MUIRatingProps> = (props) => {
  const { width } = useWindowDimensions();
  const {
    breakpoints: {
      inPixels: { tablet },
    },
  } = useContext(ThemeContext);
  const isMobile = width <= tablet;

  return <MUIRating {...props} size={isMobile ? 'small' : undefined} />;
};

export default CustomRating;
