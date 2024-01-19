import { Suspense, lazy } from 'react'
import Spinner from './Spinner'

const LoadedComponent = () => {
  return (
    <div>
      <p>This is the loaded content</p>
    </div>
  )
}

const sleep = (ms) => {
  return new Promise((res) => setTimeout(res, ms))
}

const LoadableComponent = lazy(async () => {
  await sleep(2500)

  return {
    default: LoadedComponent
  }
})

const SuspenseComponent = () => {
  return (
    <div>
      <h3>This is a SuspenseComponent</h3>
      <Suspense fallback={<Spinner />}>
        <LoadableComponent />
      </Suspense>
    </div>
  )
}

export default SuspenseComponent
