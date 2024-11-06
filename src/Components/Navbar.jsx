import { BsFillHeartFill } from "react-icons/bs";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { context } from "./Root";
import { TbBackground } from "react-icons/tb";

const Navbar = () => {
  const { sum, cartList } = useContext(context);
  const location=useLocation();

  const navStyle = () => {
    switch (location.pathname) {
      case '/statistics':
      case '/dashboard':
      case '/about':
        return {
          backgroundColor: 'white',
          color: 'purple',
          border: '2px solid purple'
        };
      default:
        return {
          backgroundColor: '#9538E2',
          color: 'white' 
        };
    }
  };
  

  return (
    <div className="mx-auto px-10" >
      <div className="bg-[#9538E2] navbar rounded-xl mt-5" style={navStyle()}>
        {/* Navbar start */}
        <div className="navbar-start" >
          <a className="btn btn-ghost text-xl text-white" style={{ color: navStyle().color }}>Gadget Heaven</a>
        </div>

        {/* Navbar center with links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li style={{ color: navStyle().color }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ color: navStyle().color }}>
              <Link to="about">About</Link>
            </li>
            <li style={{ color: navStyle().color }}>
              <Link to="statistics">Statistics</Link>
            </li>
            <li style={{ color: navStyle().color }}>
              <Link to="dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>

        {/* Navbar end with cart dropdown */}
        <div className="flex-none navbar-end">
          {/* Cart dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{cartList.length}</span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{cartList.length} Items</span>
                <span className="text-info">Subtotal: ${sum}</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View Cart</button>
                </div>
              </div>
            </div>
          </div>

       
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <button className="btn btn-circle">
                  <h2 className="text-center">
                    <BsFillHeartFill />
                  </h2>
                </button>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
