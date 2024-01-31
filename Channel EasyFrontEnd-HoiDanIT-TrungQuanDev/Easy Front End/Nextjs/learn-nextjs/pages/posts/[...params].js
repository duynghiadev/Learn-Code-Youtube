import { useRouter } from 'next/router'

export default function ParamsPage(props) {
  const router = useRouter()

  return (
    <div>
      <h1>Params Page</h1>

      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  )
}
