import PropTypes from 'prop-types'
import React from 'react'

// class component

// class Layout extends React.Component {
//   render() {
//     console.log(this.props)
//     return <div className='layout'>{this.props.children}</div>
//   }
// }

// functional component

const Layout = (props) => {
  const { children } = props
  console.log('props of component Layout:', props)

  return <div className='layout'>{children}</div>
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}

export default Layout
