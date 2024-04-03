import { UserProfile } from './One/UserProfile'
import { JobList } from './Two/JobList'

function App() {
  return (
    <h1 className='flex h-screen w-full items-center justify-center bg-[#E6EFFA]'>
      {/* Giao diện 1: User Card */}
      {/* <UserProfile /> */}

      {/* Giao diện 2: Search */}
      <JobList />
    </h1>
  )
}

export default App
