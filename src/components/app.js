import React, { Component } from 'react';
import Payments from './../containers/payments';
import Account from './../containers/account';
import MakePayments from './../containers/make_payments';

export default class App extends Component {
  render() {
    return (
      <div>
      <div className="jumbotron">
        <h1>Asset Issuer!</h1>
        <p>Iusse new token!!</p>
      </div>
      <div className="col-md-12">
        <div className="col-md-6">
          {/* <Account /> */}
          <MakePayments />
        </div>
        <div className="col-md-6">
          {/* <Payments /> */}
        </div>
      </div>
      </div>
    );
  }
}
