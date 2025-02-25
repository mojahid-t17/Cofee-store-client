import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut().then(() => {});
  };
  return (
    <div className="fixed  top-0 navbar w-screen shadow-sm bg-[#854442] z-50">
      <div className="navbar-start">
        <div className="text-white font-bold ml-5 flex items-center">
          <NavLink to="/">Home</NavLink>
          <Link to="/displayUsers"><button className=" ml-2 ">Users</button></Link>
        </div>
      </div>
      <div className="navbar-center  lg:flex ">
        <img className="max-h-10" src="images/icons/logo1.png" alt="" />
        <ul className="menu menu-horizontal px-1">
          <div className="flex items-center ">
            <a className="ms-2 font-bold text-xl text-white">Cofee Store</a>
          </div>
        </ul>
      </div>
      {/* handle logIn and Logout button */}
      <div className="navbar-end mr-8">
        {user ? (
    
          
          <button
            onClick={handleSignOut}
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-orange-200 border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Log Out
            </span>
          </button>
          
        ) : (
         
            <>
               
               <Link
  to="/signIn"
  className="relative inline-block px-4 py-2 text-sm font-medium whitespace-nowrap group md:px-6 md:py-3 md:text-lg"
>
  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:translate-x-0 group-hover:translate-y-0"></span>
  <span className="absolute inset-0 w-full h-full bg-orange-200 border-2 border-black group-hover:bg-black"></span>
  <span className="relative text-black group-hover:text-white">
    Log In
  </span>
</Link>



            </>
           
         
        )}
      </div>
    </div>
  );
};

export default Navbar;
