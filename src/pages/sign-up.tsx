import React from 'react';
import styles from './styles.module.css';
import {CustomCheckbox} from "../components/common/checkbox";


export const SignUp: React.FC = () => {

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.logo}>
          {/* Replace with the logo if available */}
          <img src="/icons/form-logo.png" alt="Logo"/>
        </div>
        <h2 className={styles.title}>Welcome</h2>
        <p className={styles.subtitle}>Register to continue to Gala Games.</p>
        <div className={styles.divider}>OR</div>

        <form className={styles.emailForm}>
          <input type="email" placeholder="Email address" className={styles.input} required/>
          <input type="password" placeholder="Password" className={styles.input} required/>
          <div className={styles.captcha}>
            <CustomCheckbox/>
            <label htmlFor="captcha">Verify you are human</label>
          </div>
          <p className={styles.terms}>
            By continuing, you agree to the <a href="/terms">Terms & Conditions</a> and <a href="/privacy">Privacy
            Policy</a>
          </p>
          <button type="submit" className={styles.continueButton}>Continue</button>
        </form>

        <p className={styles.login}>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
};
