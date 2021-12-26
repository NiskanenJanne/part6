
import React from 'react'
import { useSelector } from 'react-redux'
import Noti from '../reducers/notificationReducer'
import Anecdotes from './AnecdoteList'

const Notification = () => {
  const notification = useSelector({ Noti, Anecdotes })
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification