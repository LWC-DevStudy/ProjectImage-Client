// style
import { css } from 'styled-components';

export const borderBox = (radius = '3px', padding = 0) => {
  return css`
    box-sizing: border-box;
    padding: ${padding};
    border-radius: ${radius};
  `;
};

const theme = {
  palatte: {
    navy: '24, 44, 97',
    white: '255, 255, 255',
    purple: '113, 88, 226',
    black: '0, 0, 0',
  },
};

export default theme;
