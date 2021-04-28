import styled from '@emotion/styled';

export const MainContainer = styled.main(() => ({
  width: '100%',
  minHeight: '100vh',
  display: 'grid',
  gridGap: 10,
  padding: 10,
  gridTemplate: '5fr 2fr / 8fr 7fr',
  fontFamily: '"Roboto", sans-serif',
}));
