import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdBakeryDining } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {RiAccountCircleLine} from "react-icons/ri"
import { NavLink } from "react-router-dom";
import {HiOutlineShoppingBag} from 'react-icons/hi'
import LOGO from '../../assets/logo.png'
import './nav.css'

const Nav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
             <MdBakeryDining className="navbar-icon" /> 
            {/* <img src={LOGO} alt="logo" width={70}/> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenu}
              >
                <HiOutlineShoppingBag/>
              </NavLink>
            </li>
            <div className="login">
            <li>
              <NavLink
              to="/signup"
              className={({ isActive }) =>
              "nav-links" + (isActive ? " activated" : "")
            }
            onClick={closeMobileMenu}
              >
                <RiAccountCircleLine/>
              </NavLink>
            </li>
            </div>
            <div>
              <li></li>
            </div>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  </>
  )
}

export default Nav