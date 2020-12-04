import { Component } from 'react';
import LanguageDropdown from "./LanguageDropdown";

export default class TranslationPair extends Component {
  maxTextLength = 1000;
  placeholder = 'Tell me a story...';

  state = {
    languageA: 'en',
    languageB: 'es',
    textA: '',
    textB: '',
    languageList: {
      primary: {
        'en': 'English',
        'fr': 'French',
        'es': 'Spanish',
        'de': 'German',
        'it': 'Italian',
      },
      secondary: {
        'sw': 'Swahili',
        'sv': 'Swedish',
      }
    },
  };

  handleLanguageAChange = (lang) => { this.setState({
    languageA: lang
  }); console.log('A:', lang); };

  handleLanguageBChange = (lang) => { this.setState({
    languageB: lang
  }); console.log('B:', lang); };

  handleTextAChange = (e) => {
    this.setState({
      textA: e.target.value
    });
    console.log('A: ', e.target.value);
  };
  
  handleTextBChange = (e) => {
    this.setState({
      textB: e.target.value
    });
    console.log('B: ', e.target.value);
  };

  // handleDelete = () => {
  //   (document.querySelectorAll('.box .delete') || []).forEach($delete => {
  //     const $box = $delete.parentNode;

  //     $delete.addEventListener('click', () => {
  //       $box.parentNode.removeChild($box);
  //     });
  //   });
  // };

  // componentDidMount() {
  //   console.log("MOUNTING");
  //   document.addEventListener('DOMContentLoaded', this.handleDelete);
  // }
    
  // componentWillUnmount() {
  //   console.log("UN-MOUNTING");
  //   document.removeEventListener('DOMContentLoaded', this.handleDelete);
  // }

  render() {
    return (
      <div className="tile is-ancestor box my-4">
        <div className="tile is-parent">
          <div className="tile is-child field">

            <LanguageDropdown languageList={this.state.languageList} handleLanguageChange={this.handleLanguageAChange}/>

            <div className="field">
              <div className="control">
                <textarea
                  className="textarea is-medium has-fixed-size"
                  value={this.state.textA}
                  placeholder={this.placeholder}
                  maxLength={this.maxTextLength}
                  onChange={this.handleTextAChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child field">

            <LanguageDropdown languageList={this.state.languageList} handleLanguageChange={this.handleLanguageBChange}/>

            <div className="field">
              <div className="control">
                <textarea
                  className="textarea is-medium has-fixed-size"
                  value={this.state.textB}
                  placeholder={this.placeholder}
                  maxLength={this.maxTextLength}
                  onChange={this.handleTextBChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <button className="delete" />
      </div>
    );
  }
}