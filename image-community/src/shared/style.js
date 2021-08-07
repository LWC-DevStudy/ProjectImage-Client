// style
import { css } from 'styled-components';

export const borderBox = (radius = '3px', padding = 0) => {
  return css`
    box-sizing: border-box;
    padding: ${padding};
    border-radius: ${radius};
  `;
};

export const flexBox = (sortHoz = 'center', sortVer = 'center') => {
  return css`
    display: flex;
    justify-content: ${sortHoz};
    align-items: ${sortVer};
  `;
};

export const flexHoz = (sort = 'center') => {
  return css`
    display: flex;
    justify-content: ${sort};
  `;
};

export const flexVer = (sort = 'center') => {
  return css`
    display: flex;
    align-items: ${sort};
  `;
};

const theme = {
  palatte: {
    navy: '24, 44, 97',
    white: '255, 255, 255',
    purple: '113, 88, 226',
    black: '0, 0, 0',
  },

  size: {
    defaultWidth: '540px',
  },
};

export default theme;
