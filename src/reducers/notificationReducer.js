const notificationReducer = (state=null, action) => {
  // console.log('ACTION: ', action)
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.data
    // case "NEW_ANECDOTE":
    //   return "new anecdote created: " + action.data.content
    // case "SET_NOTIFICATION_TIMEOUT_ID":
    //   return {
    //     message: state.message,
    //     timeoutID: action.data
    //   }
    case "RESET_NOTIFICATION":
      return null
    default: return state
  }
}

let timeoutID = null
function setTimeoutID(id) { timeoutID = id }
function getTimeoutID() { return timeoutID }

export function setNotification(notification, timeout=5000) {
  return async dispatch => {
    const id = getTimeoutID()
    if (id) clearTimeout(id)
    dispatch({
      type: "SET_NOTIFICATION",
      data: notification
    })
    
    if (timeout) {
      const timeoutID = setTimeout(() => dispatch({
        type: "RESET_NOTIFICATION"
      }), timeout)
      setTimeoutID(timeoutID)
    }
  }
}


export default notificationReducer
