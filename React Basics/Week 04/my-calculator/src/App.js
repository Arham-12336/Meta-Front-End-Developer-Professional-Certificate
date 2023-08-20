import logo from './logo.svg';
import './App.css';
import {useRef,useState} from 'react';

function App() {
  const inputRef=useRef(null);
  const resultRef=useRef(null);
  const [result,setResult]=useState(0);

  const plus=(e)=>{
    e.preventDefault();
    setResult((result)=>result+Number(inputRef.current.value));
  };
  const minus=(e)=>{
    e.preventDefault();
    setResult((result)=>result - Number(inputRef.current.value));
  };
  const times=(e)=>{
    e.preventDefault();
    setResult((result)=>result * Number(inputRef.current.value));
  };
  const Divide=(e)=>{
    e.preventDefault();
    setResult((result)=>result/Number(inputRef.current.value));
  };

  const resetInput=(e)=>{
    e.preventDefault();
    inputRef.current.value=0;
  }
  const resetResult=(e)=>{
    e.preventDefault();
    setResult((prevVal)=>prevVal*0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
        pattern="[0-9]"
        ref={inputRef}
        type="number"
        placeholder="type a number" 
        />
        <button onClick={plus}>ADD</button>
        <button onClick={minus}>minus</button>
        <button onClick={times}>MULTIPLY</button>
        <button onClick={Divide}>DIVIDE</button>
      </form>

    </div>
  );
}

export default App;
