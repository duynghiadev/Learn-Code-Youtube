import './App.css'
import { Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import { createProduct, editProduct, listProducts } from './components/Products'
import { createUser, editUser, listUsers } from './components/Users'
import AdminPanel from './components/AdminPanel'

function App() {
  return (
    <div>
      <Admin dashboard={AdminPanel} dataProvider={simpleRestProvider('http://localhost:3000')}>
        <Resource name='products' list={listProducts} edit={editProduct} create={createProduct} />
        <Resource name='users' list={listUsers} edit={editUser} create={createUser} />
      </Admin>
    </div>
  )
}

export default App
