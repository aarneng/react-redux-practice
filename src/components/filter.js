import React from 'react'
import { setFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'


const Filter = (props) => {

  const handleChange = (event) => {
    event.preventDefault()
    props.setFilter(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} name="filter" />
    </div>
  )
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = {
  setFilter
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)

export default ConnectedFilter
