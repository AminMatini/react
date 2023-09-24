import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Counter from './component/Counter';

const App = () => {
  const [count , setCount] = useState(0);

  const increaseCount = () =>{
    setCount(count + 1);
  }

  const decreaseCount = () =>{
    setCount(count - 1);
  }

  const resetCount = () =>{
    setCount(0);
  }

  return (
    <>
      <Counter inc={increaseCount} dec={decreaseCount} res={resetCount} count={count}/>
    </>
  );
}

export default App;
