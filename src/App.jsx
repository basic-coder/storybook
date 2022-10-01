import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [bgColor, setBgColor] = useState('')
  const [textColor, setTextColor] = useState('')
  const [pdLeft, setPdLeft] = useState('')
  const [pdRight, setPdRight] = useState('')
  const [pdTop, setPdTop] = useState('')
  const [pdBottom, setPdBottom] = useState('')
  const [mgLeft, setMgLeft] = useState('')
  const [mgRight, setMgRight] = useState('')
  const [mgTop, setMgTop] = useState('')
  const [mgBottom, setMgBottom] = useState('')
  const [br, setBr] = useState('')
  const [border, setBorder] = useState('')

  console.log(br);


  return (
    <div className="App">
      <div className="main-container container">
        <div className="input-container">
          <h2 className='input-container-title'>Enter Text Here ({input1.split(' ').length + input2.split(' ').length + input3.split(' ').length - 3}) ({input1.length + input2.length + input3.length}) </h2>
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
            <div className="input-boxes">
              <div className="input-box tiny">
                <label className='input-box-label'>Padding Right</label>
                <input className='input-box-text' value={pdRight} onChange={((e) => setPdRight(e.target.value))} id="" />
              </div>
              <div className="input-box tiny">
                <label className='input-box-label'>Padding Left</label>
                <input className='input-box-text' value={pdLeft} onChange={((e) => setPdLeft(e.target.value))} />
              </div>
              <div className="input-box tiny">
                <label className='input-box-label'>Padding Top</label>
                <input className='input-box-text' value={pdTop} onChange={((e) => setPdTop(e.target.value))} id="" />
              </div>
              <div className="input-box tiny">
                <label className='input-box-label'>Padding Bottom</label>
                <input className='input-box-text' value={pdBottom} onChange={((e) => setPdBottom(e.target.value))} />
              </div>
            </div>
            <div className="input-boxes">
              <div className="input-box tiny">
                <label className='input-box-label'>Margin Right</label>
                <input className='input-box-text' value={mgRight} onChange={((e) => setMgRight(e.target.value))} id="" />
              </div>
              <div className="input-box tiny">
                <label className='input-box-label'>Margin Left</label>
                <input className='input-box-text' value={mgLeft} onChange={((e) => setMgLeft(e.target.value))} />
              </div>
              <div className="input-box tiny">
                <label className='input-box-label'>Margin Top</label>
                <input className='input-box-text' value={mgTop} onChange={((e) => setMgTop(e.target.value))} id="" />
              </div>
              <div className="input-box tiny">
                <label className='input-box-label'>Margin Bottom</label>
                <input className='input-box-text' value={mgBottom} onChange={((e) => setMgBottom(e.target.value))} />
              </div>
            </div>
            <div className="input-boxes">
              <div className="input-box small">
                <label className='input-box-label'>Border Raduis</label>
                <input className='input-box-text' value={br} onChange={((e) => setBr(e.target.value))} id="" />
              </div>
              <div className="input-box small">
                <label className='input-box-label'>Border</label>
                <input className='input-box-text' value={border} onChange={((e) => setBorder(e.target.value))} />
              </div>
            </div>
          </div>
        </div>
        <div className="output-container">
          <h2 className="output-title">
            Output Screen
          </h2>
          <div className="output-screen">
            <button style={{ backgroundColor: `${bgColor == '' ? "#fff" : bgColor}` ,
             color: `${textColor == '' ? "#000" : textColor}`,
             paddingRight: `${pdRight == '' ? "0" : pdRight}`,
             paddingLeft: `${pdLeft == '' ? "0" : pdLeft}`,
             paddingTop: `${pdTop == '' ? "0" : pdTop}`,
             paddingBottom: `${pdBottom == '' ? "0" : pdBottom}`,
             marginRight: `${mgRight == '' ? "0" : mgRight}`,
             marginLeft: `${mgLeft == '' ? "0" : mgLeft}`,
             marginTop: `${mgTop == '' ? "0" : mgTop}`,
             marginBottom: `${ mgBottom == '' ? "0" : mgBottom}`,
             border: `${ border == '' ? "" : border}`,
             borderRadius: `${ br == '' ? "" : br}` }}>
              {input1}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
