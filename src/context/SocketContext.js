import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import urls from 'constants/urls';
export const SocketContext = React.createContext({
  socket: null,
  webCamSocket: null,
  setSocket: () => {},
  setWebCamSocket: () => {},
});

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = React.useState(null);
  const [webCamSocket, setWebCamSocket] = React.useState(null);

  React.useEffect(() => {
    const socketIo = io(urls.socket);
    const socketWebIo = io(urls.webCamSocket);
    setSocket(socketIo);
    setWebCamSocket(socketWebIo);

    return () => {
      socketIo.disconnect();
      socketWebIo.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
        setSocket,
        webCamSocket,
        setWebCamSocket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

SocketContextProvider.propTypes = {
  children: PropTypes.any,
};
