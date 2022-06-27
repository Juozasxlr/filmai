import React from 'react'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
        <h2>not sorry</h2>
        <p>Neranda puslapio</p>
        <Link to='/'>Atgal i pradini puslapi</Link>
    </div>
  )
}

export default NotFound