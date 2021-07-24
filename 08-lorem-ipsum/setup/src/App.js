import React, { useState } from 'react';
import data from './data';
function App() {
  const [number, setNumber] = useState(0);
  const [para, setPara] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPara(data.slice(0, number));
  }

  return (
    <section className="section">
      <div className="section-center">
        <h3>TIRED OF BORING LOREM IPSUM ?</h3>
        <div>
          <form>
            <label>Paragraphs: </label>
            <input value={number} type="number" min="0" max="8" onChange={(e) => setNumber(e.target.value)}></input>
            <button type="submit" className="btn" onClick={handleSubmit}>GENERATE</button>
          </form>
        </div>
        {para.map((text, index) => {
          return (
            <p key={index}>
              {text}
            </p>
          );
        })}
      </div>
    </section>

  )
}

export default App;
