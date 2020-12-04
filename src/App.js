import { useState } from 'react';
import TranslationPair from './TranslationPair';

function App() {
  const [countPairs, setCountPairs] = useState(1);
  const translationPairs = Array(countPairs).fill(<TranslationPair />);

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          Hello Rosetta!
        </h1>
        <p className="subtitle">
          Translate simultaneously between {}
        </p>
      </div>
      {translationPairs}
      <button className="button is-medium is-fullwidth" onClick={() => setCountPairs(countPairs + 1)}>+</button>
    </section>
  );
}

export default App;
