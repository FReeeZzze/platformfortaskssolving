import styled from '@emotion/styled';

export const Select = styled.select(() => ({
  width: '100%',
  height: '100%',
  fontSize: 22,
  padding: '5px 0',
  border: '1px solid rgba(90, 37, 105, 0.4)',
  color: 'white',
  background: '#767676',
  '&:focus': {
    outline: 'none',
  },
  '& option:checked': {
    background:
      'linear-gradient(rgba(90, 37, 105, 0.4), rgba(90, 37, 105, 0.6))',
  },
}));
