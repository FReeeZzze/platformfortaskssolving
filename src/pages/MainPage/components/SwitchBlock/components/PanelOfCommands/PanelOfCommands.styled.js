import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  display: 'grid',
  gridTemplate: 'auto / auto',
  width: '100%',
  padding: '5px',
  userSelect: 'none',
  '& label': {
    fontSize: '14px',
    fontWeight: 400,
    fontStyle: 'normal',
  },
}));
