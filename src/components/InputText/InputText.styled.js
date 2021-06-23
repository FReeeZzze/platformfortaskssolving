import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  padding: 5px 0;
`;

export const Label = styled.label`
  display: grid;
`;

export const Input = styled.input(({ disabled }) => ({
  height: '2.5rem',
  padding: '8px',
  borderRadius: '4px',
  border: disabled ? '2px solid #bf0b0b' : '2px solid #646464',
  backgroundColor: disabled ? '#E91916' : '#767676',
  color: 'rgba(255,255,255)',
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
