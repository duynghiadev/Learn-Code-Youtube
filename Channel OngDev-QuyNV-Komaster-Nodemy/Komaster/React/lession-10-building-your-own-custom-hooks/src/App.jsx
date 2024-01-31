import List from '../components/List'
import CustomHookDemo from '../components/CustomHookDemo'
import SearchUsername from '../components/SearchUsername'
import DeactivateAccountModal from '../components/DeactivateAccountModal'
function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'red' }}>
        ========List========
      </h1>
      <List />
      <h1 style={{ textAlign: 'center', color: 'red' }}>
        ========CustomHookDemo========
      </h1>
      <CustomHookDemo />
      <h1 style={{ textAlign: 'center', color: 'red' }}>
        ========SearchUsername========
      </h1>
      <SearchUsername />
      <h1 style={{ textAlign: 'center', color: 'red' }}>
        ========DeactivateAccountModal========
      </h1>
      <DeactivateAccountModal />
    </>
  )
}

export default App
