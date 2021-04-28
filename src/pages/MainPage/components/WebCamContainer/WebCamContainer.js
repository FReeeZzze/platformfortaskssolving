import React from 'react';
import { Container, LiveContainer } from './WebCamContainer.styled';
import noSignal from 'assets/noSignal.svg';
import { SocketContext } from 'context/SocketContext';
import { setLive } from 'store/thunks/webcamThunks';
import { useDispatch, useSelector } from 'react-redux';

const WebCamContainer = () => {
  const { webCamSocket } = React.useContext(SocketContext);
  const [data, setData] = React.useState(noSignal);
  const { isLive } = useSelector((store) => store.webcam);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (webCamSocket) {
      webCamSocket.on('image', (data) => {
        setData(`data:image/jpeg;base64,${data.toString('base64')}`);
      });

      webCamSocket.on('connect', () => {
        dispatch(setLive(true));
      });

      webCamSocket.on('disconnect', () => {
        setData(noSignal);
        dispatch(setLive(false));
      });
    }
  }, [dispatch, webCamSocket]);

  return (
    <Container>
      <LiveContainer>
        <span>{isLive ? 'в эфире' : 'офлайн'}</span>
      </LiveContainer>
      <img src={data} alt="video" />
    </Container>
  );
};

export default WebCamContainer;
