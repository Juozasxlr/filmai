import useFetch from './useFetch'
import {useParams, Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function FilmDetails() {
    const {id} = useParams()
    const {data: filmas, loading, error} = useFetch(`http://localhost:8000/filmai/${id}`)
    const history = useHistory();
    const deleteHandler = () => {
      fetch('http://localhost:8000/filmai/' + filmas.id, {
        method: 'DELETE'
      }).then(() => {
        history.push('/');
      })
    }
    

  return (
    <div className="film-details">
        <h2>Filmo numeris - {id} </h2>
        { loading && <div>Loading...</div>}
        { error && <div>{error}</div>}
        { filmas && (
            <article>
                <h2>{filmas.title}</h2>
                <p>Autorius {filmas.author}</p>
                <div className="film-buttons">{filmas.body}
                <button onClick={deleteHandler}>Ištrinti</button>
                <Link to={`edit/${filmas.id}`}>Koreguoti filmą</Link>
                </div>
            </article>
        )}
    </div>
  )
}

export default FilmDetails