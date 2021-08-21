import React from 'react';
import io from 'socket.io-client';

export default function useSocket(url) {
  const [socket, setSocket] = React.useState(null);

  React.useEffect(() => {
    const socketIo = io(url);

    setSocket(socketIo);

    return () => {
      socketIo.disconnect();
    };
  }, [url]);

  return socket;
}
