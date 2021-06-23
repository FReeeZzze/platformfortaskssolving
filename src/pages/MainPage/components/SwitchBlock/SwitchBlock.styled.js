import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  width: '100%',
  height: 'calc(100% - 10px)',
  backgroundColor: '#C4C4C4',
  gridRow: '1 / 4',
  '@media (max-width: 990px)': {
    height: '100%',
    gridRow: '2',
  },
  border: '1px solid #AAAAAA',
  justifyContent: 'center',
}));
