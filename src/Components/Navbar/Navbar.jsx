import logoWhite from "../../assets/logo_white.png";
import logoBlack from "../../assets/logo_black.png";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const Navbar = ({ theme }) => {
  const [isDark, setDark] = theme;
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addProduct"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/myCart"}>My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          <img
            src={isDark ? logoWhite : logoBlack}
            className="w-36"
            alt="website-logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        <Link to={"/login"} className="btn">
          Login
        </Link>
        <button
          className="btn btn-circle text-2xl"
          onClick={() => setDark(!isDark)}
        >
          {isDark ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  theme: PropTypes.array.isRequired,
};

export default Navbar;
