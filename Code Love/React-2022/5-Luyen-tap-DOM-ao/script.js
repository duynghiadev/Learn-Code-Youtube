const reactElement = React.createElement(
  'div',
  {
    className: 'feature'
  },
  React.createElement(
    'div',
    {
      className: 'feature-product-list'
    },
    React.createElement(
      'div',
      {
        className: 'card'
      },
      React.createElement('img', {
        src: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXMlMjBuaWtlfGVufDB8fDB8fHww',
        alt: 'Shoes Nike',
        style: {
          width: '20%'
        }
      }),
      React.createElement('h1', null, 'Shoes Nike'),
      React.createElement(
        'p',
        {
          className: 'price'
        },
        '$19.99'
      ),
      React.createElement('p', null, 'Some text about the nike...'),
      React.createElement('p', null, React.createElement('button', null, 'Add To Cart'))
    )
  ),

  React.createElement(
    'div',
    {
      className: 'feature-product-list'
    },
    React.createElement(
      'div',
      {
        className: 'card'
      },
      React.createElement('img', {
        src: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXMlMjBuaWtlfGVufDB8fDB8fHww',
        alt: 'Shoes Nike',
        style: {
          width: '20%'
        }
      }),
      React.createElement('h1', null, 'Shoes Nike'),
      React.createElement(
        'p',
        {
          className: 'price'
        },
        '$19.99'
      ),
      React.createElement('p', null, 'Some text about the nike...'),
      React.createElement('p', null, React.createElement('button', null, 'Add To Cart'))
    )
  ),

  React.createElement('div', {
    className: 'feature-product-hot'
  })
)

ReactDOM.render(reactElement, document.getElementById('content'))
