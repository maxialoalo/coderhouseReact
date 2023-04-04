import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";


const Navbar = ({ children }) => {
  const cate = [ 
    {
      title: "Todas",
      path: "/",
      id: 1
    },
    {
      title: "Pc Armadas",
      path: "/category/pc-armadas",
      id: 2
    },
    {
      title: "Notebooks",
      path: "/category/notebooks",
      id: 3
    }
  ]

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#e1d4c7", textDecoration: "none" }}>
          MaxiGaming
        </Link>

        <ul className={styles.containerList}>
          {cate?.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.navbarItem}
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
