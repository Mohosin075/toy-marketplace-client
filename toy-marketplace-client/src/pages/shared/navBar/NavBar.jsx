import ActiveLink from "../../../utilities/ActiveLink";

const NavBar = () => {
  return (
    <div className="navbar bg-base-300 px-3 md:px-12 lg:px-16 py-5 lg:py-8">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
            <li>
              <ActiveLink to="/login">login</ActiveLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case tex-xl md:text-3xl lg:text-5xl"><span className="text-blue-500 font-extrabold">Toy</span> <span className="text-pink-500 font-extrabold">G</span> alore</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
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
          <li>
            <ActiveLink to="/login">login</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="w-11 h-11">
          <img
            className="w-full h-full rounded-full bg-center bg-cover bg-no-repeat cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYRsKe7YCdWieiiyJ9TIizMuRRJU1JjPBzvUe6iRGWTQ&s"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
