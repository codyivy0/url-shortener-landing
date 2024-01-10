import { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  function handleMobileNav() {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  return (
    <>
      <div className={styles.navbarContainer}>
        <img className={styles.logo} src="/logo.svg" alt="" />
        <nav className={styles.navbarDesktop}>
          <a className={styles.navLink} href="#">
            Features
          </a>
          <a className={styles.navLink} href="#">
            Pricing
          </a>
          <a className={styles.navLink} href="#">
            Resources
          </a>
          <a className={`${styles.navLink} ${styles.loginBtn}`} href="#">
            Login
          </a>
          <a className={`${styles.navLink} ${styles.signUpBtn}`} href="#">
            Sign up
          </a>
        </nav>
        <div className={styles.hamburgerMenu} onClick={handleMobileNav}></div>
      </div>
      <div className={isMobileNavOpen ? styles.mobileNav : styles.hide}>
        <a className={styles.mobileLink} href="#">
          Features
        </a>
        <a className={styles.mobileLink} href="#">
          Pricing
        </a>
        <a className={styles.mobileLink} href="#">
          Resources
        </a>
        <div className={styles.mobileDivider}></div>
        <a className={styles.mobileLink} href="#">
          Login
        </a>
        <a className={`${styles.mobileLink} ${styles.signUpBtn}`} href="#">
          Sign Up
        </a>
      </div>
    </>
  );
};

export default Navbar;
