import ComponentA from './componentA'
import ComponentB from './componentB'
import ComponentC from './componentC'
import '../../css/useContext.css'
import ContextProvider from './contextProvider'

const UseContext = () => {
  return (
    <div className='container'>
      <div>
        <h1>useContext hook</h1>
        <div className='component large'>
          <ContextProvider>
            <ComponentA>
              <ComponentB>
                <ComponentC />
              </ComponentB>
            </ComponentA>
          </ContextProvider>
        </div>
      </div>
    </div>
  )
}

export default UseContext
