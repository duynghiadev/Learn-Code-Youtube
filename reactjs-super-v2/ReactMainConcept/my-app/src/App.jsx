import { useState } from 'react'
import './App.css'
import BareButton from './BareButton'
import BareInput from './BareInput'
import Calculator from './Calculator/Calculator'
import Clock from './Clock'
import Composition from './CompositionvsInheritance/Composition'
import Inheritance from './CompositionvsInheritance/Inheritance'
import CorrectlyState from './CorrectlyState'
import { Form } from './Form/Form'
import { UncontrolledComponent } from './Form/UncontrolledComponent'
import Layout from './Layout'
import LoginControl from './LoginControl'
import { ProductList } from './ProductList/ProductList'

function App() {
  const [name, setName] = useState('Casio')
  const [visible, setVisible] = useState(true)

  return (
    <div className='App'>
      <button onClick={() => setName('Apple')}>Change name</button>
      <button onClick={() => setVisible(false)}>Hide Clock component</button>
      {visible && <Clock className='Clock' name={name} />}

      <Layout className='Layout'>
        <h1>Hello</h1>
        <BareInput
          type='text'
          value='100'
          autoFocus
          className='input-control'
          onChange={() => {}}
        />

        <BareButton className='BareButton' />
      </Layout>

      <LoginControl className='LoginControl' isLoggedIn={true} hidden={false} />

      <CorrectlyState className='CorrectlyState' />

      <ProductList className='ProductList' />

      <Form className='Form' />

      <UncontrolledComponent className='UncontrolledComponent' />

      <Calculator className='Calculator' />

      <Inheritance className='Inheritance' />
      <Composition className='Composition' />
    </div>
  )
}

export default App
