import { useDispatch } from 'react-redux';
import './App.css';
import { Counter } from './Components/Count';

function App() {
  const dispach = useDispatch();
  return (
    <div className="App">
      <button onClick={e=>dispach({type:"increment"})}>Increment</button>
      <br/>
      <Counter />
      <br/>
      <button onClick={e=>dispach({type:"decrement"})}>Decrement</button>
    </div>
  );
}

export default App;
