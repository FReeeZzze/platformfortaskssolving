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
  margin: '10px 0',
  '& img': {
    maxHeight: '550px',
    maxWidth: '900px',
  },
}));

export const LiveContainer = styled.div(() => ({
  userSelect: 'none',
  marginBottom: '5px',
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
