import { Component } from 'react';

export default class LanguageDropdown extends Component {

  state = {
    language: '',
  };
  
  formatItems = (languages) => Object.entries(languages).map(([tag, lang]) => {
    return (
        // eslint-disable-next-line
        <a
          key={tag}
          className="dropdown-item"
          onClick={() => this.handleLanguageChange(tag)}
        >{lang}</a>);
  });

  handleLanguageChange = (tag) => {
    this.setState({
      language: Object.assign({}, this.props.languageList.primary, this.props.languageList.secondary)[tag]
    });
    this.props.handleLanguageChange(tag);
  };

  render() {
    return (
      <div className="field has-addons">
        <div className="control">
          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
              <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Select language</span>
                <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>

            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">

                <input className="input" type="text" placeholder="Search language..." />
                <hr className="dropdown-divider" />
                {this.formatItems(
                  this.props.languageList.primary
                )}
                <hr className="dropdown-divider" />
                {this.formatItems(
                  this.props.languageList.secondary
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="control is-expanded has-icons-left has-icons-right">
          <input className="input is-static" type="text" defaultValue={this.state.language} />
          <span className="icon is-left">
            <i className="fas fa-language"></i>
          </span>
        </div>
      </div>
    );
  }
}