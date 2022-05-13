import Image from "next/image";
import styles from '../../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}></div>
      <div className={styles.links}>
        <ul className={styles.navlinks}>
          <li>Platform</li>
          <li>Pricing</li>
          <li>Acceleration</li>
          <li>Resources</li>
          <li>CustomerStories</li>
        </ul>
      </div>
        <div className={styles.btns}>
          <div className={styles.login}>
            <p>Log in</p>
          </div>
          <div className={styles.primary_btn_cont}>
            <div className={styles.schedule}>TRY FOR FREE</div>
          </div>
          <div className={styles.sec_btn_cont}>
            <div className={styles.try}>SCHEDULE DEMO</div>
          </div>
        </div>
    </div>
  );
};

export default Navbar;

