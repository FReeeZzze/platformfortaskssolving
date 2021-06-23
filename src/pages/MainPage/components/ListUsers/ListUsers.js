import React from 'react';
import { Container } from './ListUsers.styled';
import SelectBox from 'components/SelectBox';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, setWorker } from 'store/thunks/usersThunks';
import { SocketContext } from 'context/SocketContext';

const ListUsers = () => {
  const { users, worker, me } = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const { socket } = React.useContext(SocketContext);

  const onDoubleClick = (e) => {
    const value = e.target.value;
    if (me.id === worker.id) {
      const user = users.find((user) => user.name === value);
      socket.emit('change_worker', user);
    }
  };

  React.useEffect(() => {
    if (socket) {
      socket.on('users', (payload) => {
        console.log('listUsers: ', payload);
        const { users, worker } = payload;
        const normalizeUsers = users.map((user) => user[0]);
        if (users) {
          dispatch(setUsers(normalizeUsers));
        }
        if (!worker) {
          dispatch(setWorker(me));
        } else {
          const workingUser = normalizeUsers.find((user) => user.id === worker);
          dispatch(setWorker(workingUser));
        }
      });
    }
  }, [me, dispatch, socket]);

  return (
    <Container data-guid="users">
      <h3>
        Твое имя на платформе: <span>{me.name}</span>
      </h3>
      <SelectBox multiple>
        {users.length &&
          users.map((user) => (
            <option
              key={`index - ${user.id}`}
              className={worker && user.id === worker.id ? 'worker' : ''}
              onDoubleClick={onDoubleClick}
            >
              {worker && user.id === worker.id
                ? `${user.name} - сейчас управляет!`
                : user.name}
            </option>
          ))}
      </SelectBox>
    </Container>
  );
};

export default ListUsers;
