import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  display: 'grid',
  gridTemplate: '3fr /auto',
  gridGap: 10,
  margin: '10px 10px',
}));

export const ButtonsBox = styled.div(() => ({
  display: 'grid',
  gridTemplate: 'auto / 1fr 1fr 1fr',
  gridGap: 10,
}));
