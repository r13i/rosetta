import { Component } from 'react';

export default class LanguageDropdown extends Component {

  formatItems = (list) => list.map(l => {
    // eslint-disable-next-line
    return <a className="dropdown-item">{l}</a>;
  });

  render() {
    return (
      <div className="field">
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

                <input class="input" type="text" placeholder="Search language..." />
                <hr className="dropdown-divider" />
                {this.formatItems(this.props.languageList.primary)}
                <hr className="dropdown-divider" />
                {this.formatItems(this.props.languageList.secondary)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}