import React, { useEffect } from 'react'
import AnecdoteForm from './components/anecdoteForm'
import AnecdoteList from './components/anecdoteList'

import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  return (
    <div>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App
