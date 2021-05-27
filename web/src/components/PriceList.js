import React from 'react';
import coingecko from '../api/coingecko';

class PriceList extends React.Component {
  state = { prices: [] };

  componentDidMount() {
    this.loadAPI();
  }

  loadAPI = async () => {
    const res = await coingecko.get('?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');

    this.setState({ prices: res.data });

    for (var i = 0, n = this.state.prices.length; i < n; i++) {
      console.log(this.state.prices[i].name, this.state.prices[i].current_price);
    }
  }

  render() {
    return (
      <div>
        <h3>Price List</h3>
        <span>{this.state.prices.length}</span>
      </div>
    );
  }
}

export default PriceList;