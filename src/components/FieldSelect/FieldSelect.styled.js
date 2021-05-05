import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  display: 'grid',
  margin: '10px 0',
  '& select': {
    height: '2.5rem',
    color: 'rgba(255,255,255)',
    borderRadius: '4px',
    border: '2px solid #646464',
    backgroundColor: '#767676',
    transition: 'background-color 1000ms, border 300ms ease-in-out',
    padding: '10px',
    fontSize: 16,
    '&:focus': {
      outline: 'none',
      backgroundColor: 'rgb(27 39 73 / 64%)',
      border: '2px solid rgba(91,26,91, 0.5)',
      transition: 'background-color 1000ms, border 300ms ease-in-out',
    },
  },
}));
