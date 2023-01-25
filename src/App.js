import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

const App = () => {
  const [userList, setUserList] = useState([])

  const addUserHandler = (userData) => {
    setUserList((prevUserList) => {
      return [...prevUserList, userData]
    })
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  )
}

export default App
