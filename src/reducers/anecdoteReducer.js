import anecdoteService from "../services/anecdotes"
import { setNotification } from "./notificationReducer"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteReducer = (state=[], action) => {
  // console.log(state, action)
  switch (action.type) {
    case "LIKE_ANECDOTE":
      const anecdote = action.data
      const id = action.data.id

      const likedAnecdote = {...anecdote, votes: anecdote.votes + 1}
      anecdoteService.like(likedAnecdote)

      const allAnecdotes = state.map(i => i.id !== id ? i : likedAnecdote)
      // let minIndex = 0
      // for (let anec in state) {
      //   if (state[anec].votes > votes) minIndex++;
      //   else break
      // }
      // allNewAnecdotes.splice(index, 1)
      // allNewAnecdotes.splice(minIndex, 0, likedAnecdote)
      // console.log(allNewAnecdotes)
      return allAnecdotes.sort((a,b) => -a.votes + b.votes)
    case "NEW_ANECDOTE":
      anecdoteService.post(action.data)
      return [...state, action.data]
    case "INIT_ANECDOTES":
      return action.data.sort((a,b) => -a.votes + b.votes)
    default: return state
  }
}


export function likeAnecdote(anecdote) {
  return async dispatch => {
    dispatch(setNotification(`you liked the anecdote "${anecdote.content}"`))
    dispatch({
      type: "LIKE_ANECDOTE",
      data: anecdote
    })
  }
}


export function newAnecdote(content) {
  return async dispatch => {
    dispatch(setNotification("new anecdote created: " + content))
    dispatch({
      type: "NEW_ANECDOTE",
      data: asObject(content)
    })
  }
}


export function initializeAnecdotes() {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes
    })
  }
}


export default anecdoteReducer
