import styled from '@emotion/styled';

export const MainContainer = styled.main(() => ({
  width: '100%',
  minHeight: '100vh',
  display: 'grid',
  gridTemplate: '2fr 3fr / 3fr 3fr',
  fontFamily: '"Roboto", sans-serif',
}));
