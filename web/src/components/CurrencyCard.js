import React from 'react';
import '../styles/PriceList.css'

class CurrencyCard extends React.Component {
  render() {
    return (
      <div className="container">
        <img className="icon" src={this.props.icon} alt={this.props.alt} />
        <div className="name">{this.props.name}</div>
        <div className="price">{this.props.price}</div>
        <div className="cap">{this.props.cap}</div>
      </div>
    );
  }
}

export default CurrencyCard;