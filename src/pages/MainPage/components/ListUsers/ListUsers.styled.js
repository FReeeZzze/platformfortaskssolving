import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  '& h3': {
    color: '#007aff',
    fontSize: '16px',
    fontWeight: 500,
    margin: '10px 0',
  },
  'span': {
    color: 'black',
  },
  '.worker': {
    color: '#00fff3',
    fontWeight: 500,
  },
}));
