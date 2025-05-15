import { useContext, useEffect, useState } from "react";
import { assets } from "../greencart_assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { Appcontext } from "../context/Appcontext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    showlogin,
    setShowuserlogin,
    user,
    Setuser,
    SetsearchQuery,
    searchQuery,
    getCartCount,
  } = useContext(Appcontext);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, [searchQuery]);

  const logout = async () => {
    Setuser(null);
    navigate("/");
  };
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img src={assets.logo} alt="" />
      </NavLink>

      <div className="hidden sm:flex items-center gap-8">
        <div>
         <NavLink to="/seller">
         <li className="list-none px-4 py-2 border border-gray-300 rounded-full text-xs">seller dashboard</li>

         </NavLink>
        </div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">All products</NavLink>
        <a href="#">Contact</a>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => SetsearchQuery(e.target.value)}
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="" />
          <div className="flex items-center gap-6 "></div>
        </div>
        <div className="flex items-center gap-6 ">
          <div
            className=" relative flex cursor-pointer "
            onClick={() => navigate("/cart")}
          >
            <img src={assets.nav_cart_icon} alt="w-6 opacity-80" />
            <button className="absolute -top-2 -right-3 text-xs text-white bg-[#44ae7c] w-[18px] h-[18px] rounded-full">
              {getCartCount()}
            </button>
          </div>
          <button
            onClick={() => (open ? setOpen(false) : setOpen(true))}
            aria-label="Menu"
            className="sm:hidden"
          >
            <img src={assets.menu_icon} alt="" />
          </button>
        </div>
        {!user ? (
          <button
            onClick={() => setShowuserlogin(true)}
            className="cursor-pointer px-8 py-2 bg-[#4fbf8b] transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} className="w-10" alt="" />

            <ul className="absolute top-10 right-0  bg-white shadow-lg py-2.5 min-w-30 rounded-md text-sm z-40 hidden group-hover:block">
              <li onClick={() => navigate("/my-orders")}>My orders</li>
              <li onClick={logout}>Logout</li>
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6 ">
        <div
          className=" relative flex cursor-pointer sm:hidden "
          onClick={() => navigate("/cart")}
        >
          <img src={assets.nav_cart_icon} alt="w-6 opacity-80" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-green-500 w-[18px] h-[18px] rounded-full">
            {getCartCount()}
          </button>
        </div>
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          <img src={assets.menu_icon} alt="" />
        </button>
      </div>

      {open && (
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-2xl z-100  py-4 flex-col items-start gap-2 px-10 text-sm md:hidden`}
        >
          <NavLink to="/" onClick={() => setOpen(false)} className="block">
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setOpen(false)}
            className="block"
          >
            All products
          </NavLink>
          {user && (
            <NavLink
              to="/Orders"
              onClick={() => setOpen(false)}
              className="block"
            >
              My Orders
            </NavLink>
          )}

          <NavLink
            to="/Contact"
            onClick={() => setOpen(false)}
            className="block"
          >
            Contact
          </NavLink>
          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowuserlogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 bg-[#4fbf8b] transition text-white rounded-full text-sm"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 bg-[#4fbf8b] transition text-white rounded-full text-sm"
            >
              Signup
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
