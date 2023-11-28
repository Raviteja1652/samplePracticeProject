import React, { useState } from 'react';
import InputForm from './Components/Users/InputForm';
import UserList from './Components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([])

  const addUsersHandler = (usersData) => {
    setUsersList((prevUsers) => {
      return [...prevUsers, {name: usersData.name, age: usersData.age, id: Math.random().toString()}]
    })
  }
  
  return (
    <div>
      <InputForm onSubmittingForm={addUsersHandler}/>
      <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;
