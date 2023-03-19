import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#e1d4c7", textDecoration: "none" }}>
        <img src="https://res.cloudinary.com/dahcjcgqj/image/upload/v1677026679/pngegg_h44gap.png" alt="Logo" className={styles.navbarLogo} />
        </Link>

        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            Todas
          </Link>
          <Link to="/category/pc-armadas" className={styles.navbarItem}>
            Pc Armadas
          </Link>
          <Link to="/category/notebooks" className={styles.navbarItem}>
            Notebooks
          </Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
