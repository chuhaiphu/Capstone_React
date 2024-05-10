import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className="header-section">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link to={""}>
              <img src="./images/logo/logo.png" alt="logo" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to={""} className="active">Home</Link>
              <ul className="submenu">
                <li>
                  <a href="#0" className="active">Home One</a>
                </li>
                <li>
                  <a href="index-2.html">Home Two</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#0">movies</a>
              <ul className="submenu">
                <li>
                  <a href="movie-grid.html">Movie Grid</a>
                </li>
                <li>
                  <a href="movie-list.html">Movie List</a>
                </li>
                <li>
                  <a href="movie-details.html">Movie Details</a>
                </li>
                <li>
                  <a href="movie-details-2.html">Movie Details 2</a>
                </li>
                <li>
                  <a href="movie-ticket-plan.html">Movie Ticket Plan</a>
                </li>
                <li>
                  <a href="movie-seat-plan.html">Movie Seat Plan</a>
                </li>
                <li>
                  <a href="movie-checkout.html">Movie Checkout</a>
                </li>
                <li>
                  <a href="popcorn.html">Movie Food</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#0">About Us</a>
            </li>
            <li>
              <a href="#0">blog</a>
              <ul className="submenu">
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Single</a>
                </li>
              </ul>
            </li>
            <li className="header-button pr-0">
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <div className="header-bar d-lg-none">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>


  )
}
