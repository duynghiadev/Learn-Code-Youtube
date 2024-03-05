import { useState } from "react"
import { FetchResultType } from "types"

type FetchType = () => Promise<any>
type UseFetchType = [FetchType, FetchResultType]

export function useFetch(endpoint:string): UseFetchType {
  const [fetchResult, setFetchResult] = useState<FetchResultType>({
    loading: false,
  })

  const fetchData = async () => {
    try {
      setFetchResult({ loading: true })
      const response = await fetch(endpoint)
      const data = await response.json()
      setFetchResult({ loading: false })

      return data

    } catch (err) {
      setFetchResult({
        loading: false,
        error: err.message,
      })
    }

    
  }

  return [ fetchData, {
    loading: fetchResult.loading,
    error: fetchResult.error 
  }]
}