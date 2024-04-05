import { Button } from '@mui/material'

const Todo = ({ name }: { name: string }) => {
  return (
    <Button style={{ justifyContent: 'left' }} fullWidth={true}>
      {name}
    </Button>
  )
}

export default Todo
