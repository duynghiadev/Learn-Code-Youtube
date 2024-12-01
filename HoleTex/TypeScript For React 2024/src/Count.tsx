// type Props = {
//   count: number
//   setCount: React.Dispatch<React.SetStateAction<number>>
// }

interface IProps {
  count: number
  setCount: React.Dispatch<React.SetStateAction<number>>
  total: (a: number, b: number) => string
}

const Count = ({ count, setCount, total }: IProps) => {
  console.log('count:', total(4, 4))

  return (
    <div className='card'>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default Count
