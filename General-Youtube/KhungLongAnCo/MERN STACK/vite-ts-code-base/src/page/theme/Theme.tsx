import { Button } from 'components'

export const ThemePage = () => {
  return (
    <div>
      <h1 className='mb-4'>Theme page</h1>
      <hr />
      <h4>Buttons</h4>

      <Button className='mr-3'>Default</Button>
      <Button type='primary'>Primary</Button>
    </div>
  )
}
