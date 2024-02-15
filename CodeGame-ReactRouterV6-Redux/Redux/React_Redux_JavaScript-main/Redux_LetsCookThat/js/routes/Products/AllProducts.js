import React, { Component } from 'react';
import { Panel } from '../../components/Panel';
import { connect } from 'react-redux';

class AllProducts extends Component {
  render() {
    return (
      <>
        <h1 className="title">Wszystkie produkty</h1>
        <Panel
          iconName="folder"
          path="products"
          listElements={this.props.products}
          heading={false}
          footer={false}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state:', state);

  return {
    products: state.products.productsList
  };
};

export const AllProductsContainer = connect(mapStateToProps)(AllProducts);
