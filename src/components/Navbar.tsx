import {useState, useEffect, useRef, type FC} from "react";
import styles from "../styles/Navbar.module.css";

interface NavbarProps {
}
const Navbar: FC<NavbarProps> = () =>{

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarBrand}>
                <a href="/" className={styles.navbarBrandLink}>
                    <span className={styles.gtIcon}>&gt;_</span> Lopyad Page
                </a>
            </div>
        </nav>
    );
}

export default Navbar;