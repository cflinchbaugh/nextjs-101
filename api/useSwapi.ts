import useSWR from 'swr'
import fetcher from './fetcher'

const useSwapi = () => {
  const { data, error, isLoading } = useSWR('http://swapi.dev/api/planets/1/', fetcher)

  return {
    data: data,
    isError: error,
    isLoading,
  }
}

export default useSwapi