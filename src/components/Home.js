import FilmList from './FilmList'
import useFetch from './useFetch'

function Home() {

  const {data, loading, error} = useFetch("http://localhost:8000/filmai")

  return (
    <div className="home">
      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}
      {data && <FilmList filmai={data} title="Visi filmai"/>}
    </div>
  )
}

export default Home