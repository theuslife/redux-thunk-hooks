import React from 'react';
import { useSelector } from 'react-redux'
import { getAsyncCep } from './action/thunkDispatch';

function App() {

  //useSelector hook
  const counter = useSelector(({ counter }) => counter)

  //Usando funcão async para pegar o cep e acrescentar no counter
  return (
    <div className="App">

      <h1>Counter: {counter}</h1>

      
      <button onClick={() => getAsyncCep('INCREMENT') }>Increment</button>

      <button onClick={() => getAsyncCep('DECREMENT')}>Decrement</button>

    </div>
  );

}

export default App
