import styled from '@emotion/styled';

export const Container = styled.div((props) => ({
  display: 'grid',
  textAlign: 'center',
  background: props.active ? '#9A9494' : '#D4D4D4',
  border: props.active ? '1px solid #8C8282' : '1px solid #B1B1B1',
  boxShadow: props.active ? 'inset 0px 4px 5px rgba(6, 5, 5, 0.25);' : 'none',
  color: props.active ? '#FFF' : '#624E4E',
  height: '38px',
  userSelect: 'none',
  '& span': {
    alignSelf: 'center',
  },
}));
