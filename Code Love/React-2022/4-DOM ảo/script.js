// use reactjs build render (Virtual DOM)
const reactElement = React.createElement(
  'div',
  {
    className: 'nav'
  },

  React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'ReactJS', React.createElement('span', null, ' add to react')),
    React.createElement('li', null, 'NodeJS'),
    React.createElement('li', null, 'VueJS')
  )
)

ReactDOM.render(reactElement, document.getElementById('content'))
