import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  display: 'grid',
  gridTemplate: 'auto / auto',
  margin: '10px 10px',
  '& label': {
    fontSize: '14px',
    fontWeight: 400,
    fontStyle: 'normal',
  },
}));
