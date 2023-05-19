import { useContext } from "react";
import ActiveLink from "../../../utilities/ActiveLink";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user , logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut();
  }
  return (
    <div className="navbar bg-base-200 px-3 md:px-12 lg:px-16 py-5 lg:py-8">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/allToys">All Toys</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/myToys">My Toys</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/addToys">Add A Toy</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blogs">Blogs</ActiveLink>
            </li>
          <div>
          {user && <button className="ml-5 btn bg-blue-700 hover:bg-blue-800 text-white" onClick={handleLogOut}>Log out</button>}
          </div>
          </ul>
        </div>
        <img
          className="w-8 h-8 md:w-11 w-8 h-8 md:h-11"
          src="https://i.ibb.co/3F57y83/logo111.png"
          alt=""
        />
        <a className="btn btn-ghost normal-case text-2xl lg:text-5xl">
          <span className="text-blue-500 font-extrabold">Toy</span>{" "}
          <span className="text-pink-500 font-extrabold">G</span> alore
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/allToys">All Toys</ActiveLink>
          </li>
          {user && <> <li>
            <ActiveLink to="/myToys">My Toys</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/addToys">Add A Toy</ActiveLink>
          </li> </>}
          <li>
            <ActiveLink to="/blogs">Blogs</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="w-11 h-11">
          {user ? (
            <div className="flex justify-center tooltip" data-tip={user?.displayName}><img
            className="w-full h-full rounded-full bg-center bg-cover bg-no-repeat cursor-pointer"
            src={user?.photoURL}
            alt=""
          />
          
          </div>
          ) : (
            <Link to="/login" className="p-2 md:p-4 inline-block  font-semibold bg-blue-700 hover:bg-blue-800 text-white rounded-lg">Login</Link>
          )}
        </div>
        {user && <button className="ml-5 btn bg-blue-700 hover:bg-blue-800 text-white hidden md:block" onClick={handleLogOut}>Log out</button>}
      </div>
    </div>
  );
};

export default NavBar;
