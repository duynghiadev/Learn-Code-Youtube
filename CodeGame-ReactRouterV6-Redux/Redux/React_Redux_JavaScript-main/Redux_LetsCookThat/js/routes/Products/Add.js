import React, { Component } from 'react';
import { addProductAction } from './products.redux';
import { connect } from 'react-redux';

class AddProduct extends Component {
  state = {
    name: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addProductAction(this.state));
  };

  render() {
    return (
      <>
        <h1 className="title">Dodaj produkt</h1>
        <div className="box">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Nazwa produktu</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nazwa produktu"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Dodaj produkt</button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addProductAction
  };
}

export default connect(null, mapDispatchToProps)(AddProduct);
