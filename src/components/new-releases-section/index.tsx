import {SectionLayout} from "../section-layout";
import styles from './styles.module.css'
import {Carousel} from "./new-releases-carousel.tsx";

export function NewReleasesSection() {
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
          <button className={styles.moreButton}>
            BROWSE ALL GAMES
          </button>
        </div>
      </div>
    </SectionLayout>
  );
};
