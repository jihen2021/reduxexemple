
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment,reset } from './actions';

function App() {
  const counter = useSelector(state => state.counter)
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()



  return (
    <div className="App">

  <h1>couter {counter} </h1>
  <h1>    {login?<h1>salut</h1> :<h1> hello</h1>}   </h1>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
   
  );
}

export default App;
