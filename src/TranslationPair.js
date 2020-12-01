import { Component } from 'react';
import LanguageDropdown from "./LanguageDropdown";

export default class TranslationPair extends Component {
  maxTextLength = 1000;

  state = {
    languageList: {
      primary: [
        'English',
        'French',
        'Spanish',
        'German',
        'Italian'
      ],
      secondary: [
        'Swahili',
        'Swedish'
      ]
    },
  };

  render() {
    return (
      <div className="tile is-ancestor box my-4">
        <div className="tile is-parent">
          <div className="tile is-child field">

            <LanguageDropdown languageList={this.state.languageList} />

            <div className="field">
              <div className="control">
                <textarea className="textarea is-medium has-fixed-size" placeholder="" maxLength={this.maxTextLength}></  textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-child field">

            <LanguageDropdown languageList={this.state.languageList} />

            <div className="field">
              <div className="control">
                <textarea className="textarea is-medium has-fixed-size" placeholder="" maxLength={this.maxTextLength}></  textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}