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
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </React.Fragment>
  )
}

export default App
