import { useRouter } from 'next/router'

export default function PostDetailPage(props) {
  const router = useRouter()

  return (
    <div>
      <h1>Post Detail Page</h1>

      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  )
}
