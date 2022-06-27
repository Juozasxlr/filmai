import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
        <h1>Filmai</h1>
        <div className="links">
            <Link to="/">Pagrindinis</Link>
            <Link to="/create" style={{
              color: "White",
              backgroundColor: "#bebe2f",
              borderRadius: "8px"
            }}>Naujas filmas</Link>
        </div>
    </nav>
  )
}

export default Navbar
