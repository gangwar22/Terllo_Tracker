import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="title">
        <img src="https://cdn-icons-png.freepik.com/512/5404/5404936.png" alt="" />
        <h1>Sprint Plans</h1>

      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav ${isOpen ? 'open' : ''}`}>
        <NavLink exact to="/" activeClassName="active">Overview</NavLink>
        <NavLink to="/List" activeClassName="active">List</NavLink>
        <NavLink to="/Tracker" activeClassName="active">Board</NavLink>
        <NavLink to="/Timeline" activeClassName="active">Timeline</NavLink>
        <NavLink to="/Calendar" activeClassName="active">Calendar</NavLink>
        <NavLink to="/DashBoard" activeClassName="active">Dashboard</NavLink>
        <NavLink to="/AppContainer" activeClassName="active">Messages</NavLink>
        <NavLink to="/Login" activeClassName="active" className="signup">SignUp</NavLink>
        <div className="profile">
          <input type="search" placeholder="Search" />
          <button className="add">+</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
