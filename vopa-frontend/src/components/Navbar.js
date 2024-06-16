import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navRef = useRef();
  const [level, setLevel] = useState("");
  const navigate = useNavigate();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleStartAssessment = () => {
    navigate('/mainpage', { state: { additionalData: 'value' } });
  };

  return (
    <header>
      <div className="left-section">
        <h3>VOPA</h3>
      </div>
      <nav ref={navRef} className="right-section">
        <div className="container">
          <form>
            <input type="text" placeholder="Enter Student Roll Number" />
            <label htmlFor="class">Select your Grade:</label>
            <select onChange={(e) => setLevel(e.target.value)} required id="class" name="class">
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
              <option value="class4">Class 4</option>
            </select>

            <label htmlFor="level">Select your Level:</label>
            <select value={level} onChange={(e) => setLevel(e.target.value)} required id="level" name="level">
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
              <option value="class4">Class 4</option>
            </select>

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </form>
        </div>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>

      <button
        className="start-assessment-btn"
        onClick={handleStartAssessment}
      >
        Start Assessment
      </button>
    </header>
  );
}

export default Navbar;
