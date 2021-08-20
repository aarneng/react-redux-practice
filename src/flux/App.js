import React from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux"

function counter(state=0, action)  {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    case "ZERO":
      return 0
    default:
      return state
  }
}

const store = createStore(counter)

store.subscribe( () => {
  console.log(store.getState())
})

function App() {
  return (
    <div>
      <div>
        hello world! the current state is: {store.getState()}
      </div>
      <button onClick={() => {
        store.dispatch({type: "INCREMENT"})
      }}>
        +1!
      </button>
      <button onClick={() => {
        store.dispatch({type: "DECREMENT"})
      }}>
        -1!
      </button>
      <button onClick={() => {
        store.dispatch({type: "ZERO"})
      }}>
        0
      </button>
      
    </div>
  );
}

function renderApp() {
  ReactDOM.render(<App/>, document.getElementById("root"))
}


store.subscribe(renderApp)

export default App;
