import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {

  const [usersList, setUsersList] = useState([
    {'name': 'Aïcha', 'age': 29, 'id': 'g1'},
    {'name': 'Elisha', 'age': 31, 'id': 'g2'}
  ])

  const addUserHanlder = (uName, uAge) => {
    setUsersList((prevUsersListState) => {
      return [...prevUsersListState, { name: uName, age: uAge, id: Math.random().toString() }]
    });
  }

  const deleteUser = (id) => {
    setUsersList((prevUserListState) => {
      return prevUserListState.filter(userID => userID.id !== id)
    })
  }

  return (
    <div>
      <AddUser ondAddUser={addUserHanlder} />
      <UsersList users={usersList} onDelete={deleteUser} />
    </div>
  );
}

export default App;
