import React from 'react'

// functional component
const Welcome = (props) => {
  const { name, age } = props

  return (
    <div>
      <h1>
        Hello, {name} - {age}
      </h1>
    </div>
  )
}

// class component
// class Welcome extends React.Component {
//   render() {
//     console.log(this.props)
//     return (
//       <>
//         <h1>
//           Hello, {this.props.name} - {this.props.age}
//         </h1>
//       </>
//     )
//   }
// }

export default Welcome
