import React, { useState } from 'react'
import styles from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState()

  const nameHandler = (e) => {
    setName(e.target.value)
  }

  const ageHandler = (e) => {
    setAge(e.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)!!!',
      })
      return
    }

    if (+age < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0)!!!',
      })
      return
    }
    const data = {
      id: Math.random().toString(),
      name: name,
      age: age,
    }
    props.onAddUser(data)

    setName('')
    setAge('')
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor='username'>UserName:</label>
          <input
            id='username'
            type='text'
            value={name}
            onChange={nameHandler}
          />
          <label htmlFor='age'>Age (Years):</label>
          <input id='age' type='number' value={age} onChange={ageHandler} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default AddUser
