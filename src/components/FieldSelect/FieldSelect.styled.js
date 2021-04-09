import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  display: 'grid',
  margin: '10px 0',
  '& select': {
    borderRadius: '4px',
    border: '2px solid rgb(161 112 112 / 50%)',
    backgroundColor: 'rgba(91,26,91,0.27)',
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
