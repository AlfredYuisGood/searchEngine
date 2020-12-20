import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search Engine - Alfred</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            <a href="https://www.buymeacoffee.com/yu888">
                <img style={{ marginTop: '10px' }} src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=yu888&button_colour=5F7FFF&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" />
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
