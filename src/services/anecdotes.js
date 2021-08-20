import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes/'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const post = async (anecdote) => {
  const response = await axios.post(baseUrl, anecdote)
  return response.data
}

const like = async (anecdote) => {
  console.log(anecdote)
  const response = await axios.put(baseUrl + anecdote.id, anecdote)
  return response
}

const all = {
  getAll,
  post,
  like
}

export default all

