import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [bgColor, setBgColor] = useState('')
  const [textColor, setTextColor] = useState('')

  return (
    <div className="App">
      <div className="main-container container">
        <div className="input-container">
          <h2 className='input-container-title'>Enter Text Here</h2>
          <div className="input-box-container">
            <div className="input-boxes">
              <div className="input-box small">
                <label className='input-box-label'>Title ({input1.split(' ').length - 1}) ({input1.length})</label>
                <input className='input-box-text' name="" value={input1} onChange={((e) => setInput1(e.target.value))} id="" />
              </div>
              <div className="input-box small">
                <label className='input-box-label'>Tags ({input2.split(' ').length - 1}) ({input2.length})</label>
                <input className='input-box-text' name="" value={input2} id="" onChange={((e) => setInput2(e.target.value))} />
              </div>
            </div>
            <div className="input-box ">
              <label className='input-box-label'>Description ({input3.split(' ').length - 1}) ({input3.length})</label>
              <textarea className='input-box-text' name="" value={input3} id="" onChange={((e) => setInput3(e.target.value))} cols="30" rows="10"></textarea>
            </div>
            <div className="input-boxes">
              <div className="input-box small">
                <label className='input-box-label'>Background</label>
                <input className='input-box-text' value={bgColor} onChange={((e) => setBgColor(e.target.value))} id="" />
              </div>
              <div className="input-box small">
                <label className='input-box-label'>Color</label>
                <input className='input-box-text' value={textColor} onChange={((e) => setTextColor(e.target.value))} />
              </div>
            </div>
          </div>
          <h2 className='input-box-total'>Total words are {input1.split(' ').length + input2.split(' ').length + input3.split(' ').length - 3} and Total characters are {input1.length + input2.length + input3.length}</h2>

        </div>
        <div className="output-container">
          <h2 className="output-title">
            Output Screen
          </h2>
          <div className="output-screen">
            <button style={{ backgroundColor: `${bgColor == '' ? "#fff" : bgColor}` , color: `${textColor == '' ? "#fff" : textColor}` }}>
              {input1}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
