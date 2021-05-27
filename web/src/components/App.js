import React from 'react';
import Register from './Register';
import PriceList from './PriceList';

class App extends React.Component {
  onFormSubmit(state) {
    // Send this information to SQL server
    // 'state' contains all register information
  }

  render() {
    return (
      <div className="outline">
        <h3>Crypto Sim</h3>
        <Register onClickSubmit={this.onFormSubmit} />
        <PriceList />
      </div>
    );
  }
}

export default App;