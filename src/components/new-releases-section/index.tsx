import {SectionLayout} from "../section-layout";
import styles from './styles.module.css'

export function NewReleasesSection() {
  return (
    <SectionLayout className={styles.sectionLayout}>
      <div className={styles.wrapper}>
        <div className={styles.headerContent}>
          <hr/>
          <span className={styles.headerTitle}>OUR GAMES</span>
          <hr/>
        </div>

      </div>
    </SectionLayout>
  );
};
