import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  display: 'grid',
  gridTemplate: '5fr /auto',
  width: '100%',
  gridGap: 5,
  height: 'calc(100% - 45px)',
}));

export const ButtonsBox = styled.div(() => ({
  display: 'grid',
  gridTemplate: 'auto / 1fr 1fr 1fr',
  alignSelf: 'center',
  justifySelf: 'center',
  gridGap: 10,
}));

export const PanelCommands = styled.div(() => ({
  padding: 5,
  display: 'grid',
  gridGap: 5,
}));

export const Option = styled.option((props) => ({
  backgroundColor: props.active ? '#007aff' : 'none',
}));
