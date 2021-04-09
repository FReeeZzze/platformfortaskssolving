import React from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import urls from 'constants/urls';
export const SocketContext = React.createContext({
  socket: null,
  setSocket: () => {},
});

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = React.useState(null);

  React.useEffect(() => {
    const socketIo = io(urls.socket);

    setSocket(socketIo);

    return () => {
      socketIo.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        socket,
        setSocket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

SocketContextProvider.propTypes = {
  children: PropTypes.any,
};
