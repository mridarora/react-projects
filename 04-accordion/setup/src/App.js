import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers about login</h3>
        <div className="info">
          {questions.map((d) => {
            return <SingleQuestion key={questions.id} {...d} />
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
