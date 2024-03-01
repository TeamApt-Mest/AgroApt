import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/AgroApt Logo.jpg";
import icon from "../../assets/cart-icon.jpg.jpg";
// import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <nav>
      <section className="firstSection">
        <div>
          <img className="appLogo" src={logo} alt="logo of app" />
        </div>
        <form className="d-flex formInput" role="search">
          <input
            className="form-control me-1 input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success but" type="submit">
            Search
          </button>
        </form>
        <div>
          <img className="cartIcon" src={icon} alt="cart" />
        </div>
      </section>
      <section className="secondSection">
        <div className="navlinks">
          {" "}
          <Link class="active" to="/home" className="link">
            Home
          </Link>
          <Link class="active" to="/aboutUs"className="link">About Us
          </Link>
          <Link class="active" to="/buyNow"className="link">Buy Now
          </Link>
          <Link class="active" to="/sellNow"className="link">Sell Now
          </Link>
        </div>
        <div className="buttons"></div>
        <div className="buttonSection">
          <button className="loginButton">Login</button>
          <button className="signupButton">Sign Up</button>
        </div>
      </section>
    </nav>
    // <div className="container">
    //   <img className="logo" src={logo} alt="" />

    //   <div>
    //     <input type="text" placeholder="Search.." />
    //     <input type="submit" />
    //   </div>
    //   <div className="navList">
    //     <Link class="active" to="/home">
    //       Home
    //     </Link>

    //     <Link class="active" to="/aboutUs">
    //       About Us
    //     </Link>

    //     <Link class="active" to="/buyNow">
    //       Buy Now
    //     </Link>

    //     <Link class="active" to="/sellNow">
    //       Sell Now
    //     </Link>

    //     <Link class="active" to="/login">
    //       Login
    //     </Link>
    //   </div>
    //   <img className="cartIcon" src={icon} alt="" />
    // </div>
  );
};

export default NavBar;
