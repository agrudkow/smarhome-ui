import { css } from 'styled-components';

export const regularSpaceBetweenViewStyle = css`
  min-height: ${({
    theme: {
      layout: { headerHeight },
    },
  }) =>
    `calc(100vh - ${
      headerHeight + 40
    }px)`}; //40 -> padding from libs/common/ui/src/lib/main-container.tsx
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    min-height: ${({
      theme: {
        layout: { headerHeight },
      },
    }) =>
      `calc(100vh - ${
        headerHeight + 20
      }px)`}; // 20 -> padding from libs/common/ui/src/lib/main-container.tsx
  }

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    min-height: ${({
      theme: {
        layout: { headerHeight },
      },
    }) =>
      `calc(100vh - ${
        headerHeight + 10
      }px)`}; //10 -> padding from libs/common/ui/src/lib/main-container.tsx
  }
`;
