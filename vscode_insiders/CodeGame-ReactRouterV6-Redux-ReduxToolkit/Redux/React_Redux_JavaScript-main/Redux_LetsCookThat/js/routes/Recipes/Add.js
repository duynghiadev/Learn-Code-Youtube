import React, {Component} from "react";
import SingleProduct from "./SingleProduct";


class AddRecipe extends Component {
  state = {
    name: "",
    products: [{key: 0}],
    lastKey: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleAddProduct = () => {
    this.setState(({lastKey, products}) => ({
      products: [...products, {key: lastKey + 1}],
      lastKey: lastKey + 1
    }));
  };

  handleProductChoose = (index, id) => {
    console.log(index, id);
    this.setState(({products}) => ({
      products: products.map(el => {
        return el.key === index ? {...el, id} : el;
      })
    }));
  };

  handleProductDelete = (index) => {
    this.setState(({products}) => ({
      products: products.filter((el, i) => index !== i)
    }));
  };

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <h1 className="title">Dodaj przepis</h1>
        <div className="box">
          <div className="field">
            <label className="label">Nazwa przepisu</label>
            <div className="control">
              <input className="input"
                     type="text"
                     name="name"
                     id="name"
                     placeholder="Nazwa przepisu"
                     onChange={this.handleChange}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Opis</label>
            <div className="control">
              <input className="input"
                     type="text"
                     name="desc"
                     id="desc"
                     placeholder="Opis przepisu"
                     onChange={this.handleChange}/>
            </div>
          </div>
        </div>


        <h2 className="subtitle is-4">Lista produktów</h2>
        <div className="box">
          {this.state.products.map((product, i) => (
            <SingleProduct
              key={product.key}
              id={product.id ? product.id : ""}
              index={product.key}
              number={i}
              onChange={this.handleProductChoose}
              onClose={this.handleProductDelete}/>
          ))}

          <div className="field">
            <div className="control">
              <a className="button is-primary" onClick={this.handleAddProduct}>
                Dodaj produkt do przepisu
              </a>
            </div>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Dodaj przepis</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddRecipe;