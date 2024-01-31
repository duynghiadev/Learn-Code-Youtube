import './App.css'
import Counter from './components/Counter.jsx'
import { useEffect, useState } from 'react'

let i = 0

const App = () => {
  i++
  console.log(`>>> %c render start version 00 ${i} `, 'background: #222; color: #bada55')

  const id = 1
  const [post, setPost] = useState({})
  console.log(`id version 00 ${i}`, id)
  console.log('post render first:', post)

  useEffect(() => {
    console.log('function useEffect run 🚀')
    console.log(`useEffect running version 00 ${i}`)

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setPost(json)
      })
  }, [id])

  return (
    <div className='App'>
      {console.log('post render first:', post)}

      <h4>Hello World</h4>
      <div>
        <h1>{post.id}</h1>
      </div>
      <div>
        <h1>{post.title}</h1>
      </div>
      {console.log(`>>> %c render end version 00 ${i} `, 'background: red; color: white')}
      <Counter />
    </div>
  )
}

export default App

/**
 * 1. Tại sao lại bị hiện tượng call api liên tục: ✅
 *
 * - Bởi vì khi function App render lần đầu tiên thì useEffect sẽ đợi các chức năng trong body App render. Khi các chức năng trong App đã render hoàn thành xong rồi thì hook useEffect mới render sau.
 * - Mà trong hook useEffect nó lại setState (là setPost đó) lại => dẫn đến state thay đổi cho nên function App tiếp tục chạy lại.
 * - Khi hàm App re-render lại thì hook useEffect render sau function App. Khi function App render xong rồi, thì sẽ vào hook useEffect render. Mà trong hook đó thì có hàm setState (là setPost đó) và nó đã thay đổi state => dẫn đến state thay đổi => và cứ thế function App re-render lại
 * - Và tiếp tục cứ thế => function re-render vô tận => dẫn đến call api liên tục
 */

/**
 * 2. Đây là cách giải quyết để tránh bị trường hợp call api liên tục: ✅
 *
 * - Đó là thêm dấu ngoặc vuông vào tham số thứ 2 của callback (Mà dấu ngoặc vuông đó còn được gọi là dependency)
 * - Dấu ngoặc đó có chức năng sẽ chạy useEffect duy nhất một lần. Nó chỉ chạy duy nhất khi function được mount vào (tức là lần đầu tiên render)
 */
