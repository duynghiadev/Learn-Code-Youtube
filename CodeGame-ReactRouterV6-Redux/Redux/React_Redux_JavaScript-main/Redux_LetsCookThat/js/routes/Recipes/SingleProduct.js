import React from 'react';
import PropTypes from 'prop-types';

const fakeProducts = [
  { id: 1, name: 'Pomidory' },
  { id: 2, name: 'Przyprawa curry' },
  { id: 3, name: 'Olej' },
  { id: 4, name: 'Wołowina 500g' },
  { id: 5, name: 'Ziemniaki' }
];

const SingleProduct = ({ id, index, number, onChange, onClose }) => {
  return (
    <article className="message is-dark">
      <div className="message-header">
        <p>Produkt {number + 1}</p>
        <button type="button" className="delete" onClick={() => onClose(index)} />
      </div>
      <div className="message-body">
        <div className="field">
          <p className="control has-icons-left">
            <span className="select">
              <select onChange={(e) => onChange(index, e.target.value)} value={id}>
                <option>Wybierz...</option>
                {fakeProducts.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </span>
            <span className="icon is-small is-left">
              <i className="fas fa-pizza-slice"></i>
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

SingleProduct.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

export default SingleProduct;
