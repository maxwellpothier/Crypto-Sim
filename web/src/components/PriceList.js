import React from 'react';
import coingecko from '../api/coingecko';
import '../styles/PriceList.css';

class PriceList extends React.Component {
  state = {
    names: [],
    currPrices: []
  };

  componentDidMount() {
    this.loadAPI();
  }

  loadAPI = async () => {
    const res = await coingecko.get('?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false');
    this.populateState(res);
  }

  populateState(res) {
    const coins = res.data.map((coin) => {
      return <div>{coin.name}</div>
    });

    const prices = res.data.map((price) => {
      return <div>{price.current_price}</div>
    });

    this.setState({ currPrices: prices });
    this.setState({ names: coins });
  }

  render() {
    return (
      <div>
        <h3>Price List</h3>
        <div className="row">
          <div className="column">{this.state.names}</div>
          <div className="column">{this.state.currPrices}</div>
        </div>
      </div>
    );
  }
}

export default PriceList;