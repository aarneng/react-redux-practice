import React from "react"
import { connect } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteForm = (props) => {
  // const dispatch = useDispatch()

  const newAnec = (event) => {
    // console.log("TESTING")
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    props.newAnecdote(content)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newAnec}>
        <div><input type="text" name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {
  newAnecdote
}

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm
