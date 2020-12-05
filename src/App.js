import { Component } from 'react';
import TranslationComponent from './TranslationComponent';

export default class App extends Component {

  initialPairCount = 1;
  state = {
    TranslationComponents: Array(this.initialPairCount)
      .fill(null)
      .map((v, index) => <TranslationComponent
        key={index}
        pairId={index}
        handleDeletePair={(x) => this.handleDeletePair(x)}
      />),
  }

  // Set deleted 
  handleDeletePair = (index) => this.setState({
    TranslationComponents: [...this.state.TranslationComponents.slice(0, index), null, ...this.state.TranslationComponents.slice(index + 1)]
  });

  handleAddPair = () => this.setState({
    TranslationComponents: [...this.state.TranslationComponents, <TranslationComponent
        key={this.state.TranslationComponents.length}
        pairId={this.state.TranslationComponents.length}
        handleDeletePair={(x) => this.handleDeletePair(x)}
    />],
  });

  render() {
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
        {this.state.TranslationComponents}
        <button className="button is-medium is-fullwidth is-info" onClick={this.handleAddPair}>+</button>
      </section>
    );
  }
}
