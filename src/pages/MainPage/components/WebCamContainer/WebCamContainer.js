import React from 'react';
import { Container } from './WebCamContainer.styled';
import noVideo from 'assets/no-video.jpg';

const WebCamContainer = () => {
  return (
    <Container>
      <img src={noVideo} alt="noVideo" />
    </Container>
  );
};

export default WebCamContainer;
