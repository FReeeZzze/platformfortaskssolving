import styled from '@emotion/styled';

export const MainContainer = styled.main(() => ({
  width: '100%',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 7fr))',
  gridGap: 10,
  padding: 10,
  gridTemplateRows: 'auto 2fr',
  fontFamily: '"Roboto", sans-serif',
  '@media (max-width: 990px)': {
    gridTemplate: 'auto / auto',
  },
}));
