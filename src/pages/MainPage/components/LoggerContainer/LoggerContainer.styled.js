import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  display: 'grid',
  gridTemplate: 'auto /auto',
  gridGap: 10,
  margin: '10px 10px',
  '& h3': {
    margin: '0 auto',
  },
}));
