// NavigationBar.jsx
import { useState } from "react";
import logo from "../assets/logo.png";
import "./navigationBar.css";
import { NavLink } from "react-router";

export default function NavigationBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  function handdleDropdown() {
    setDropDown((prev) => !prev);
  }

  return (
    <>
      <nav>
        <img src={logo} alt="Logo" />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive && !dropDown ? "selected nav-link" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="my-work"
          className={({ isActive }) =>
            isActive && !dropDown ? "selected nav-link" : "nav-link"
          }
        >
          My Work
        </NavLink>
        <NavLink
          to="contact-me"
          className={({ isActive }) =>
            isActive && !dropDown ? "selected nav-link" : "nav-link"
          }
        >
          Contact Me
        </NavLink>
        <NavLink
          to="blog"
          className={({ isActive }) =>
            isActive && !dropDown ? "selected nav-link" : "nav-link"
          }
        >
          Blog
        </NavLink>
        <div className="dropDownContainer">
          <button
            onClick={handdleDropdown}
            className={
              dropDown
                ? "selected button nav-link navButton"
                : "navButton button nav-link"
            }
          >
            More
            <i
              className={
                dropDown
                  ? "fa-solid fa-chevron-right selectedRotate"
                  : "fa-solid fa-chevron-right"
              }
            ></i>
          </button>

          {dropDown && (
            <div>
              <a onClick={()=>setDropDown(false)} href="https://github.com/THEMEGATRON76" target="_blank" className="dropdownAnchor">
                <div>
                  <i class="fa-brands fa-github"></i>
                </div>
                <div>
                  <p className="firstPara">My Github Profile</p>
                  <p> Explore my projects and contributions.</p>
                </div>
              </a>
              <NavLink onClick={()=>setDropDown(false)} to="contact-me" className="dropdownAnchor">
                <div>
                  <i class="fa-solid fa-address-card"></i>
                </div>
                <div>
                  <p className="firstPara">Contact Me</p>
                  <p> Have an Question? Feel free to reach me..</p>
                </div>
              </NavLink>
            </div>
          )}
        </div>
        <button className="navButton settings button " onClick={toggleSidebar}>
          <i class="fa-solid fa-bars"></i>
        </button>
        {/* <button className="navButton settings button" onClick={toggleSidebar}>
          <i class="fa-solid fa-gear"></i>
        </button> */}
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <img src={logo} alt="Logo" className="sidebar-logo" />
          <button className="close-btn" onClick={closeSidebar}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="sidebar-content">
          <NavLink to="/" onClick={closeSidebar}>
            <i className="fa-solid fa-home"></i>
            Home
          </NavLink>
          <NavLink to="my-work" onClick={closeSidebar}>
            <i className="fa-solid fa-briefcase"></i>
            My Work
          </NavLink>
          <NavLink to="contact-me" onClick={closeSidebar}>
            <i className="fa-solid fa-envelope"></i>
            Contact Me
          </NavLink>
          <NavLink to="blog" onClick={closeSidebar}>
            <i className="fa-solid fa-ellipsis"></i>
            Blog
          </NavLink>
        </div>
        <div className="sidebar-footer">
          <p>Made with ❤️ by Geetansh</p>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "open" : ""}`}
        onClick={closeSidebar}
      ></div>
    </>
  );
}
