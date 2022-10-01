import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')



  return (
    <div className="App">
      <textarea name="" value={input1} onChange={((e)=>setInput1(e.target.value))} id="" cols="30" rows="10"></textarea>
      <textarea name="" value={input2} id="" onChange={((e)=>setInput2(e.target.value))} cols="30" rows="10"></textarea>
      <textarea name="" value={input3} id="" onChange={((e)=>setInput3(e.target.value))} cols="30" rows="10"></textarea>

      <h2>Note : words are counted once space are created</h2>

      <p>Input 1 total words = {input1.split(' ').length - 1} and {input1.length} characters</p>
      <p>Input 1 total words = {input2.split(' ').length - 1} and {input2.length} characters</p>
      <p>Input 1 total words = {input3.split(' ').length - 1} and {input3.length} characters</p>

      <h2>Total words are {input1.split(' ').length + input2.split(' ').length + input3.split(' ').length - 3}</h2>
      <h3>Total characters are {input1.length + input2.length + input3.length}</h3>
    </div>
  );
}

export default App;
