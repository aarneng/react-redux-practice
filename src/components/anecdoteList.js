import React from 'react'
import { connect } from 'react-redux'
import { likeAnecdote } from '../reducers/anecdoteReducer'
import Notification from './Notification'
import Filter from './filter'

const Anecdote = ({anecdote, handleClick}) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}


const AnecdoteList = (props) => {

  // const vote = (anecdote) => {
  //   dispatch(likeAnecdote(anecdote))
  // }

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      {props.anecdotes.map(anecdote =>
        <Anecdote anecdote={anecdote} handleClick={() => props.likeAnecdote(anecdote)} key={anecdote.id}/>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  if (state.filter === "ALL") return {
    anecdotes: state.anecdotes
  }
  return {
    anecdotes: state.anecdotes.filter(i => i.content.toLowerCase().includes(state.filter.toLowerCase()))
  }
}

const mapDispatchToProps = {
  likeAnecdote
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdotes
