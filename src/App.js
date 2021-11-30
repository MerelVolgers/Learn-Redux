import {useSelector, useDispatch} from "react-redux"
import {increment, decrement} from "./actions"

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1> Counter: {counter} </h1>

      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(increment(5))}> + </button>

      {isLogged ? <h3> Valuable information you shouldnt see if logged out</h3> : ""}
    
    </div>
  );
}

export default App;
