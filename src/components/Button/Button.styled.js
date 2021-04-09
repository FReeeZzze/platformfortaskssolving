import styled from '@emotion/styled';

export const Container = styled.button(() => ({
  marginRight: '5px',
  padding: '8px',
  width: '10rem',
  fontSize: 16,
  fontWeight: 450,
  border: '1px solid rgba(0,0,0, 0.5)',
  borderRadius: '5px',
  background: 'radial-gradient(at top, #FEFFFF, #A7CECC)',
  transition: 'background 500ms ease-in-out',
  '&:selection': {
    userSelect: 'none',
  },
  '&:focus': {
    outline: 'none',
  },
  '&:active': {
    background: 'linear-gradient(45deg, #EECFBA, #C5DDE8)',
    transition: 'background 500ms ease-in-out',
  },
}));
