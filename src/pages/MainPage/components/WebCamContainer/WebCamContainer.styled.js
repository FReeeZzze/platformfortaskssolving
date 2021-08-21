import styled from '@emotion/styled';

export const Container = styled.div(() => ({
  display: 'flex',
  userSelect: 'none',
  flexDirection: 'column',
  padding: '10px',
  gridRow: '1',
  backgroundColor: '#C4C4C4',
  border: '1px solid #AAAAAA',
  justifyContent: 'center',
  '@media(max-width: 772px)': {
    justifySelf: 'center',
    maxWidth: 540,
  },
  '@media(max-width: 566px)': {
    justifySelf: 'center',
    maxWidth: 440,
  },
  '@media(max-width: 460px)': {
    justifySelf: 'center',
    maxWidth: 300,
  },
  '& img': {
    maxHeight: '100%',
    maxWidth: 'auto',
  },
}));

export const HeaderContainer = styled.div(() => ({
  display: 'flex',
  marginBottom: '5px',
}));

export const LiveContainer = styled.div(() => ({
  userSelect: 'none',
  textAlign: 'center',
  padding: '0.5rem',
  width: '5rem',
  color: 'white',
  fontSize: 'smaller',
  fontStyle: 'bold',
  fontWeight: 600,
  background: '#E91916',
  textTransform: 'uppercase',
  borderRadius: '5px',
}));

export const HelpButton = styled.button((props) => ({
  marginLeft: 'auto',
  cursor: 'pointer',
  border: 'none',
  fontFamily: 'inherit',
  fontSize: 16,
  fontWeight: 500,
  background: '#007aff',
  borderRadius: '3px',
  padding: '0 20px',
  color: 'white',
  '&:disabled': {
    backgroundColor: 'gray',
    cursor: 'not-allowed',
  },
  '&:active': {
    boxShadow: 'inset 0px 2px 2px rgba(6, 5, 5, 0.25);',
  },
}));
