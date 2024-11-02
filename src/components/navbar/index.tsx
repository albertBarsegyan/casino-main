import styles from './styles.module.css';
import {GeneralIcon} from "../icons/general-icon.tsx";
import {GalaIcon} from "../icons/gala-icon.tsx";
import classNames from "classnames";
import {Telegram} from "../icons/telegram.tsx";
import {Discord} from "../icons/discord.tsx";
import {Search} from "../icons/search.tsx";
import {DropdownIcon} from "../icons/dropdown-icon.tsx";


export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navbarParts}>
        <button className={classNames(styles.iconButton, styles.buttonSpace)} type='button'>
          <GeneralIcon/>
        </button>

        <button className={classNames(styles.iconButton, styles.buttonSpace)} type='button'>
          <GalaIcon/>
        </button>

        <div className={styles.searchBar}>
          <Search/>
          <input
            type="text"
            placeholder="Search items and games"
            className={styles.searchInput}
          />
          <div className={styles.dropdownIcon}>
            <DropdownIcon/>
          </div>
        </div>
      </div>

      <div className={classNames(styles.navbarParts, styles.navbarRightPart)}>
        <div className={styles.menu}>
          <button className={styles.menuItem}>Store</button>
          <button className={styles.menuItem}>Games</button>
          <button className={styles.menuItem}>News</button>

          <button className={classNames(styles.iconButton, styles.linkButton)} type='button'>
            <Telegram/>
          </button>

          <button className={classNames(styles.iconButton, styles.linkButton)} type='button'>
            <Discord/>
          </button>
        </div>

        <div className={styles.authButtons}>
          <button className={styles.buttonOutlined}>Sign Up</button>
          <button className={classNames(styles.buttonOutlined, styles.loginButton)}>Login</button>
        </div>
      </div>
    </nav>
  );
};


