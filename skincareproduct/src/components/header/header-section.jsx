import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import styles from "./header.module.css";

const Header = ({ setActive, handleActive }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className={styles.navbar}>
      <div className={styles.main_nav_bar}>
        {/* Logo */}
        <Link to={"/"} className={styles.left}>
          <img
            src="https://images.mamaearth.in/wysiwyg/mamaearth-logo.png?format=auto&fit=scale"
            alt="brand logo"
          />
        </Link>

        {/* Search Bar */}
        <div className={styles.search_bar}>
          <span className="material-symbols-outlined">search</span>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search for Product"
            className={styles.searchInput}
          />
        </div>

        {/* Cart & Login */}
        <div className={styles.right}>
          <Link to="/cart" className={styles.icon}>
            <FontAwesomeIcon icon={faShoppingBag} />
            <span>Cart</span>
          </Link>
          <Link to={"/login"} className={styles.icon}>
            <FontAwesomeIcon icon={faUser} />
            <span>Login</span>
          </Link>
        </div>
      </div>
      <nav className={styles.sub_bar}>
        <div className={styles.navList}>
          <ul>
            <li
              onClick={() => {
                handleActive("skin");
              }}
            >
              SKIN
            </li>
            <li
              onClick={() => {
                handleActive("Hair");
              }}
            >
              HAIR
            </li>
            <li>BABY</li>
            <li>COMBO</li>
            <li>NEW LAUNCHES</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
