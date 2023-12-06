const Products = () => {
  return (
    <div className='row'>
      <h3>Products</h3>
      <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
        <div className='card'>
          <img src='/images/product1.jpg' className='card-img-top' alt='Product Image' />
          <div className='card-body'>
            <h5 className='card-title'>Product 1</h5>
            <p className='card-text'>$19.19</p>
            <a href='#' className='btn btn-primary'>
              Add to Cart
            </a>
          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
        <div className='card'>
          <img src='/images/product2.jpg' className='card-img-top' alt='Product Image' />
          <div className='card-body'>
            <h5 className='card-title'>Product 1</h5>
            <p className='card-text'>$19.19</p>
            <a href='#' className='btn btn-primary'>
              Add to Cart
            </a>
          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
        <div className='card'>
          <img src='/images/product3.jpg' className='card-img-top' alt='Product Image' />
          <div className='card-body'>
            <h5 className='card-title'>Product 1</h5>
            <p className='card-text'>$19.19</p>
            <a href='#' className='btn btn-primary'>
              Add to Cart
            </a>
          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-4 col-sm-6 mb-4'>
        <div className='card'>
          <img src='/images/product4.jpg' className='card-img-top' alt='Product Image' />
          <div className='card-body'>
            <h5 className='card-title'>Product 1</h5>
            <p className='card-text'>$19.19</p>
            <a href='#' className='btn btn-primary'>
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
