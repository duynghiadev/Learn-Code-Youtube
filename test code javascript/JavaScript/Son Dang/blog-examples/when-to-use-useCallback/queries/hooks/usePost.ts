import { useState } from "react"
import { FetchResultType } from "types"

type PostType = (input: any) => Promise<any>
type UsePostType = [PostType, FetchResultType]

export function usePost(endpoint: string): UsePostType {
  const [{ loading, error }, setFetchResult] = useState<FetchResultType>({
    loading: false,
  })
  const [data, setData] = useState<any>()

  const postData: PostType = async (input) => {
    try {
      setFetchResult({ loading: true })

      const post = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      })

      const response = await post.json()
      setData(response)
    } catch (err) {
      setFetchResult({
        loading: false,
        error: err.message,
      })
    }
    setFetchResult({ loading: false })
  }

  return [postData, { data, loading, error }]
}
