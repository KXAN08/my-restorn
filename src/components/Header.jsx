import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { MdAppRegistration } from 'react-icons/md';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeClass = 'text-red-600 font-semibold border-b-2 border-red-600';
  const inactiveClass = 'text-gray-700 hover:text-red-600';

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 flex items-center justify-between h-14 md:h-16">
          <Link to="/" className="text-2xl font-bold text-red-600 flex items-center gap-2">
            <span role="img" aria-label="plate">
              🍽
            </span>{' '}
            Retseptlar
          </Link>

          <button
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="menu toggle"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className="hidden md:flex md:items-center md:gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              Bosh sahifa
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
              }
            >
              <FaHeart /> Yoqtirganlar
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex items-center gap-1 ${isActive ? activeClass : inactiveClass}`
              }
            >
              <FaShoppingCart /> Savat
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
              title="Ro'yxatdan o'tish"
            >
              <MdAppRegistration className="text-2xl md:text-3xl" />
            </NavLink>
            <NavLink
              to="/booking"
              className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            >
              Joy band qilish
            </NavLink>
          </nav>
        </div>
      </header>

      <nav
        className={`fixed top-14 left-0 right-0 bg-white shadow-md md:hidden transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: 49 }}
      >
        <div className="container mx-auto px-4 flex flex-col">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 border-b ${isActive ? activeClass : inactiveClass}`
            }
          >
            Bosh sahifa
          </NavLink>
          <NavLink
            to="/favorites"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-1 px-4 py-3 border-b ${isActive ? activeClass : inactiveClass}`
            }
          >
            <FaHeart /> Yoqtirganlar
          </NavLink>
          <NavLink
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-1 px-4 py-3 border-b ${isActive ? activeClass : inactiveClass}`
            }
          >
            <FaShoppingCart /> Savat
          </NavLink>
          <NavLink
            to="/register"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 border-b ${isActive ? activeClass : inactiveClass}`
            }
            title="Ro'yxatdan o'tish"
          >
            <MdAppRegistration className="text-2xl" />
          </NavLink>
          <NavLink
            to="/booking"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-3 ${isActive ? activeClass : inactiveClass}`
            }
          >
            Joy band qilish
          </NavLink>
        </div>
      </nav>

      <div className="h-14 md:h-16"></div>
    </>
  );
};

export default Header;
