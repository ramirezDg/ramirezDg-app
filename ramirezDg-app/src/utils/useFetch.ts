import { useState, useEffect } from 'react'

interface FetchResult<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export function useFetch<T> (url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        setError(error.message || 'Error fetching data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}
