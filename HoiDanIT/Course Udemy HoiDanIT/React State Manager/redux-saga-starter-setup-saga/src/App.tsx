import Header from './components/header';
import TabsContent from './components/tabs.content';
import { decrement, increment } from './redux/counter/counter.slide';
import { useAppDispatch, useAppSelector } from './redux/hooks';

function App() {

  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <Header />
      <TabsContent />
      <div>
        <div style={{ textAlign: "center" }}>
          <h3>Count = {count}</h3>
          <div>
            <button className="btn btn-success mx-3" onClick={() => dispatch(increment())}>Increase +1</button>
            <button className="btn btn-warning" onClick={() => dispatch(decrement())}>Decrease -1</button>
          </div>
          <div className='mt-5'>
            <button className="btn btn-secondary mx-3" >Increase Saga +1</button>
            <button className="btn btn-dark" >Decrease Saga -1</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
