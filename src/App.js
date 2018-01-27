import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonContent: 'words',
      open: false,
      selected: 0
    }
    this.handleDropdown = this.handleDropdown.bind(this);
    this.drop = this.drop.bind(this);
  }
  handleDropdown() {
    this.setState({
      open: !this.state.open
    })}
    drop(e) {
      this.setState({
        selected: e.currentTarget.dataset.id
      })
      console.log(this.state.selected)
    }
  
  
  render() {
    return (
      <div>
        <button onClick={this.handleDropdown}>
          {this.state.buttonContent}
        </button>
        <div className="buttonIcon">
        { this.state.open ? '\u25B2' :  '\u25BC'}
        </div>
          
          { this.state.open &&
          <div>
            <button onClick={this.drop} data-id="1">twin</button>
            <button onClick={this.drop} data-id="2">full</button>
            <button onClick={this.drop} data-id="3">Queen</button>
          </div>
          }

          <div>
          {(function() {
            switch(this.state.selected) {
              case 1:
                return <h1>This is a twin price</h1>;
              case 2:
                return <h1>This is the Full price</h1>;
              case 3:
                return <h1>this the queen price</h1>
              default:
                return null;
          }
          })()}
          </div>

      </div>

      


    );
  }
}

export default App;
