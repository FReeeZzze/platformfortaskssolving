import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  display: 'grid',
  gridTemplate: 'auto 35px /auto',
  gridGap: 5,
  height: 'calc(100% - 40px)',
  '& h3': {
    margin: '0 auto',
  },
}));
