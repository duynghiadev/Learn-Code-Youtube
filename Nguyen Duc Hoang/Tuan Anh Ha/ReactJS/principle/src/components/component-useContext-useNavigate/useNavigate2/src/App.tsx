import React, { useReducer, useEffect, useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Input from './components/Input'
import Button from './components/Button'
import List from './components/List'
import ListItem from './components/ListItem'

interface Item {
  id: number
  text: string
}

interface State {
  list: Item[]
}

type Action =
  | { type: 'ADD_ITEM'; payload: Item[] }
  | { type: 'ADD_SINGLE_ITEM'; payload: Item }
  | { type: 'REMOVE_ITEM'; payload: number }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { list: action.payload }
    case 'ADD_SINGLE_ITEM':
      return { list: [...state.list, action.payload] }
    case 'REMOVE_ITEM':
      return { list: state.list.filter((item) => item.id !== action.payload) }
    default:
      return state
  }
}

const App: React.FC = () => {
  const [{ list }, dispatch] = useReducer(reducer, { list: [] })
  const [text, setText] = useState('')

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('list') || '[]')
    dispatch({ type: 'ADD_ITEM', payload: storedList })
  }, [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newItem: Item = { id: Math.random(), text: text }
    dispatch({ type: 'ADD_SINGLE_ITEM', payload: newItem })
    setText('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleItemClick = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  return (
    <div className='app'>
      <Header text='My App' />
      <form onSubmit={handleSubmit}>
        <Input value={text} onChange={handleInputChange} />
        <Button type='submit'>Add Item</Button>
      </form>
      <List>
        {list.map((item) => (
          <ListItem key={item.id} text={item.text} onClick={() => handleItemClick(item.id)} />
        ))}
      </List>
    </div>
  )
}

export default App
