import styles from './styles.module.css'
import {ArrowRightBig} from "../icons/arrows-icon.tsx";

export function SectionHeader({title}: { title: string }) {
  return (
    <div className={styles.wrapper}>
      <span>{title}</span>
      
      <button>VIEW MORE <ArrowRightBig/></button>
    </div>
  );
};
