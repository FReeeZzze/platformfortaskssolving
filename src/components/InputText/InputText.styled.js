import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  padding: 5px 0;
`;

export const Label = styled.label`
  display: grid;
`;

export const Input = styled.input(({ disabled }) => ({
  padding: '8px',
  borderRadius: '4px',
  border: '2px solid rgb(161 112 112 / 50%)',
  backgroundColor: disabled ? 'rgba(91,27,17,0.78)' : 'rgba(91,26,91,0.27)',
  color: disabled ? 'rgb(255,255,255)' : 'rgba(0,0,0,0.78)',
  transition: 'background-color 1000ms, border 300ms ease-in-out',
  fontSize: 16,
  cursor: disabled ? 'not-allowed' : 'auto',
  '&:focus': {
    outline: 'none',
    backgroundColor: 'rgb(27 39 73 / 64%)',
    border: '2px solid rgba(91,26,91, 0.5)',
    transition: 'background-color 1000ms, border 300ms ease-in-out',
  },
}));
