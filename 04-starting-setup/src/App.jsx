import React from 'react';
import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([
    { name: 'json', age: 22, id: 'useroUno' },
  ]);

  const addUserHandler = (newUser) => {
    setUsers((prevState) => [...prevState, newUser]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList usersArray={users} />
    </>
  );
}

export default App;
