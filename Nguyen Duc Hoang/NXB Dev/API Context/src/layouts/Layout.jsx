import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'
import { LoadingContext } from '../contexts/LoadingContext'

const Layout = () => {
  const { isLoading } = useContext(LoadingContext)

  return (
    <div>
      <ScaleLoader
        loading={isLoading}
        cssOverride={{
          position: 'absolute',
          top: '0',
          left: '0',
          textAlign: 'center',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgb(0 0 0 / 30%)',
          zIndex: '9999'
        }}
        color='#36d7b7'
      />
      <Outlet />
    </div>
  )
}

export default Layout
