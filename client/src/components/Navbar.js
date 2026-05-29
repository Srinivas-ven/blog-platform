import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          Blog Platform
        </Link>

        <div>

          <Link
            className="btn btn-light me-2"
            to="/login"
          >
            Login
          </Link>

          <Link
            className="btn btn-warning me-2"
            to="/register"
          >
            Register
          </Link>

          <Link
            className="btn btn-success"
            to="/create-post"
          >
            Create Post
          </Link>

        </div>

      </div>

    </nav>

  );

}

export default Navbar;