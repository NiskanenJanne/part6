import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addAnecdote } from './reducers/anecdoteReducer'
import { voteAnecdote } from './reducers/anecdoteReducer'
import Notification from './components/Notification'

const App = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
  /*
  const vote = (id) => {
    console.log('vote', id)
    dispatch({type: 'VOTE', id: id})
  }*/

   const vote = (id) => {
     dispatch(voteAnecdote(id))
   }

  const newAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App