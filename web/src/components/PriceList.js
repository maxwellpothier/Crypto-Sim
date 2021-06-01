import React from 'react';
import CurrencyCard from './CurrencyCard';
import coingecko from '../api/coingecko';

class PriceList extends React.Component {
  state = { cards: [] };

  componentDidMount() {
    this.loadAPI();
  }

  loadAPI = async () => {
    const res = await coingecko.get('?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
    this.populateState(res);

    console.log(res.data);
  }

  populateState(res) {
    const cards = res.data.map((card) => {
      return (
        <CurrencyCard
          key={card.symbol}
          name={card.name}
          price={card.current_price}
          icon={card.image}
          alt={card.id}
          cap={card.market_cap}
        />
      );
    });
    this.setState({ cards: cards });
  }

  render() {
    return (
      <div>
        <h3>Price List</h3>
        <div>{this.state.cards}</div>
      </div>
    );
  }
}

export default PriceList;