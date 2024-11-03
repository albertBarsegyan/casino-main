import styles from './styles.module.css'
import {ArrowRightBig} from "../icons/arrows-icon.tsx";
import {navigateTo} from "../../utils/navigation.ts";
import {useNavigate} from "react-router-dom";

export function SectionHeader({title}: Readonly<{ title: string }>) {
  const navigate = useNavigate()
  return (
    <div>
      <div className={styles.wrapper}>
        <span className={styles.title}>{title}</span>

        <button className={styles.viewMore} onClick={navigateTo(navigate)}>VIEW MORE <ArrowRightBig/></button>
      </div>
      <hr className={styles.divider}/>
    </div>
  );
};
