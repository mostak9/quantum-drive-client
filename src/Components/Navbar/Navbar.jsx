import logoWhite from "../../assets/logo_white.png";
import logoBlack from "../../assets/logo_black.png";
import avatar from '../../assets/avatar.jfif'
import { Link, NavLink } from "react-router-dom";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { BiSolidLogInCircle } from "react-icons/bi";
import { useContext } from "react";
import { ThemeContext } from "../../MainLayout/MainLayout";
import { AuthContext } from "../AuthProvder/AuthProvider";

const Navbar = () => {
  // const [isDark, setDark] = theme;
  const {user, logOut} = useContext(AuthContext);
  const {isDark, setDark}  = useContext(ThemeContext);


  const handleLogOut = () => {
    logOut()
    .then()
    .catch(err => console.log(err))
  }
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
    <div className="sticky top-0 z-10 shadow-lg">
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
              className="w-24 md:w-36"
              alt="website-logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          <div className="flex flex-col items-center gap-3">
            
          {user ? <div>
            <div className="flex items-center gap-1 flex-col">
              <img src={user.photoURL || avatar} className="w-14 h-14 rounded-full" alt="" />
              <p className="text-xs">{user.displayName}</p>
            </div>
            <button onClick={handleLogOut} className="btn btn-sm">
            <BiSolidLogInCircle className="text-xl"/> Logout
          </button>
          </div> : <Link to={"/login"} className="btn btn-sm">
            <BiSolidLogInCircle className="text-xl"/> Login
          </Link>}
          </div>
          <button
            className="btn btn-sm btn-circle text-2xl"
            onClick={() => setDark(!isDark)}
          >
            {isDark ? <MdOutlineLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </div>
    </div>
  );
};


export default Navbar;
