import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  display: 'grid',
  gridTemplate: 'auto / auto',
  gridGap: 5,
  '@media (max-width: 990px)': {
    gridRow: 3,
  },
  '@media (min-width: 1550px)': {
    gridRow: '1 / 4',
    gridColumn: 3,
  },
  '& h3': {
    margin: '0 auto',
  },
}));
