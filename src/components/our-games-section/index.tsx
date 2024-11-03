import {SectionLayout} from "../section-layout";
import styles from './styles.module.css'
import {Carousel} from "./new-releases-carousel.tsx";
import {navigateTo} from "../../utils/navigation.ts";
import {useNavigate} from "react-router-dom";

export function OurGamesSection() {
  const navigate = useNavigate()


  return (
    <SectionLayout className={styles.sectionLayout}>
      <div className={styles.wrapper}>
        <div className={styles.headerContent}>
          <hr/>
          <span className={styles.headerTitle}>OUR GAMES</span>
          <hr/>
        </div>

        <Carousel/>

        <div className={styles.moreButtonWrapper}>
          <button className={styles.moreButton} onClick={navigateTo(navigate)}>
            BROWSE ALL GAMES
          </button>
        </div>
      </div>
    </SectionLayout>
  );
};
