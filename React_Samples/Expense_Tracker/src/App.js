import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUserHander = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString()}]; //add user object to userlist array
    });
  };


  return (
    <React.Fragment>
      <AddUser onAddUser={onAddUserHander} />
      <UsersList items={usersList} />
    </React.Fragment>
  );
}

export default App;
