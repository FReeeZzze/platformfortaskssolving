import React from 'react';
import {
  Container,
  HeaderContainer,
  LiveContainer,
  HelpButton,
} from './WebCamContainer.styled';
import noSignal from 'assets/noSignal.svg';
import { SocketContext } from 'context/SocketContext';
import { setLive } from 'store/thunks/webcamThunks';
import { useDispatch, useSelector } from 'react-redux';
import { setTour } from 'store/thunks/tourThunks';

const WebCamContainer = () => {
  const { webCamSocket } = React.useContext(SocketContext);
  const [isDisabled, setDisabled] = React.useState(false);
  const [data, setData] = React.useState(noSignal);
  const { isTourOpen } = useSelector((store) => store.tour);
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

  React.useEffect(() => {
    if (isTourOpen) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [isTourOpen]);

  const handleHelpButton = () => dispatch(setTour(true));

  return (
    <Container data-guid="web-cam">
      <HeaderContainer>
        <LiveContainer>
          <span>{isLive ? 'в эфире' : 'офлайн'}</span>
        </LiveContainer>
        <HelpButton disabled={isDisabled} onClick={handleHelpButton}>
          Как это работает?
        </HelpButton>
      </HeaderContainer>
      <img src={data} alt="live_stream" />
    </Container>
  );
};

export default WebCamContainer;
