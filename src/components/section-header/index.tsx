import styles from './styles.module.css'
import {ArrowRightBig} from "../icons/arrows-icon.tsx";

export function SectionHeader({title}: Readonly<{ title: string }>) {
  return (
    <div>
      <div className={styles.wrapper}>
        <span className={styles.title}>{title}</span>

        <button className={styles.viewMore}>VIEW MORE <ArrowRightBig/></button>
      </div>
      <hr className={styles.divider}/>
    </div>
  );
};
