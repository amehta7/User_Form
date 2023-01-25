import React from 'react'
import Card from '../UI/Card'
import styles from './UsersList.module.css'

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((u) => (
          <li key={u.id}>
            {u.name} ({u.age} years old){' '}
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList
