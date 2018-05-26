import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makePayment } from './../actions/payments';
import { changeTrust } from './../actions/payments';


class MakePayments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assetCode: '',
      amount: 0,
      receivingAddress: '',
      issuer: '',

      issuerPublicAddress: '',
      issuerPrivateAddress: '',
      distPublicAddress: '',
      distPrivateAddress: ''
    };
  }
  changeTrust() {
    this.props.changeTrust({     
      distPublicAddress: this.state.distPublicAddress,
      distPrivateAddress: this.state.distPrivateAddress,
      issuerPublicAddress: this.state.issuerPublicAddress,
      assetCode: this.state.assetCode,
      amount: this.state.amount
    });
  }
  makePayment() {
    this.props.makePayment({
      issuerPublicAddress: this.state.issuerPublicAddress,
      issuerPrivateAddress: this.state.issuerPrivateAddress,
      distPublicAddress: this.state.distPublicAddress,
      assetCode: this.state.assetCode,
      amount: this.state.amount
    });
  }
  render() {
    return (
      <div className="account">

        <div className="list-group-item">
            <p>Create Asset Token</p>
            <p className="small"> Input the distributor: </p>
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.distPublicAddress}
                  onChange={(e) => this.setState({ distPublicAddress: e.target.value })}
              />
              <span className="input-group-addon">distPublicAddress</span>
            </div>
            <br />
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.distPrivateAddress}
                  onChange={(e) => this.setState({ distPrivateAddress: e.target.value })}
              />
              <span className="input-group-addon">distPrivateAddress</span>
            </div>
            <br />
            <p className="small"> Input the issuer: </p>
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.issuerPublicAddress}
                  onChange={(e) => this.setState({ issuerPublicAddress: e.target.value })}
              />
              <span className="input-group-addon">issuerPublicAddress</span>
            </div>
            <br />
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.issuerPrivateAddress}
                  onChange={(e) => this.setState({ issuerPrivateAddress: e.target.value })}
              />
              <span className="input-group-addon">issuerPrivateAddress</span>
            </div>
            <br />
            <div className="input-group">
              <input
                  type="text"
                  className="form-control"
                  aria-label=""
                  value={this.state.assetCode}
                  onChange={(e) => this.setState({ assetCode: e.target.value })}
              />
              <span className="input-group-addon">assetCode</span>
            </div>
            <br />
            <div className="input-group">
              <input
                  type="number"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.amount}
                  onChange={(e) => this.setState({ amount: e.target.value })}
              />
              <span className="input-group-addon">Amount</span>
            </div>
            <br />
            <div className="list-group-item">
                <button className="btn btn-primary" onClick={() => this.changeTrust()}>
                  Change Trust
                </button>
                <button className="btn btn-primary" onClick={() => this.makePayment()}>
                  Issue
                </button>
            </div>
        </div>
      </div>
    );
  }
}


export default connect(state => state, { makePayment, changeTrust })(MakePayments);
