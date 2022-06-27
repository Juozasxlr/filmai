import {Link} from 'react-router-dom'

function FilmList({filmai, title}) {

  return (
    <div className="film-list">
        <h2>{title}</h2>
        {filmai.map(filmas => (
          <div className="film-preview" key={filmas.id}>
            <Link to={`/filmai/${filmas.id}`}>
              <h2>{filmas.title}</h2>
              <p>Autorius {filmas.author}</p>
            </Link>
          </div>
        ))}
    </div>
  )
}

export default FilmList