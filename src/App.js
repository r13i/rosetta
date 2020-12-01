import TranslationPair from './TranslationPair';

function App() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">
          Hello Rosetta!
        </h1>
        <p className="subtitle">
          First interface of Rosetta using <strong>Bulma.io</strong>
        </p>
      </div>
      <TranslationPair />
      <div className="container">
        <p>Some random annoying text</p>
      </div>
    </section>
  );
}

export default App;
