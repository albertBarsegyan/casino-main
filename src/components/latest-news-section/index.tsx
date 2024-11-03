import styles from './styles.module.css'
import {GeneralIcon} from "../icons/general-icon.tsx";
import {CustomCheckbox} from "../common/checkbox";

export function LatestNewsSection() {
  return (
    <div className={styles.footer}>
      <div className={styles.sectionLayout}>
        <div className={styles.content}>

          <div className={styles.leftSection}>
            <GeneralIcon/>
          </div>

          <div className={styles.newsletter}>
            <h3 className={styles.heading}>Get the latest news</h3>
            <form className={styles.form}>
              <input
                type="email"
                placeholder="Enter email address"
                className={styles.input}
                required
              />
              <button type="submit" className={styles.button}>
                Sign Up
              </button>
            </form>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <CustomCheckbox/>
                I agree to the <a href="#" className={styles.link}>Privacy Policy</a> and <a href="#"
                                                                                             className={styles.link}>Terms
                and Conditions</a>
              </label>
              <label className={styles.checkboxLabel}>
                <CustomCheckbox/>
                I agree to receive promotional materials from Gala. I understand that I can withdraw my consent at any
                time.
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
