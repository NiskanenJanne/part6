import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'

/*ei toimi*/
const NewAnecdote = () => {
    const dispatch = useDispatch

    const newAnecdote = (event) => {
        console.log('1')
        event.preventDefault()
        const content = event.target.name
        event.target.anecdote.value = ''
        dispatch(addAnecdote(content))
    }
    return(
        <form onSubmit={newAnecdote}>
            <div><input name='anecdote'/></div>
            <button type='submit'>create</button>
        </form>
    )
}

export default NewAnecdote