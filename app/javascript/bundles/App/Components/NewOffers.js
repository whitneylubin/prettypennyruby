import React, { Component } from 'react'
import ReactOnRails from 'react-on-rails';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import Nav from './Nav.js';
import OfferCards from './OfferCards.js';

class NewOffers extends React.Component {
  render() {

    return (
      <div>
        <Router>
          <Nav isLoggedIn={this.props.isLoggedIn} />
        </Router>
        <div>
          <OfferCards />
        </div>
      </div>
    )
  }
}
export default NewOffers;
