import {PropsWithChildren} from "react";
import styles from './styles.module.css'
import classNames from "classnames";

interface SectionLayoutProps extends PropsWithChildren {
  className?: string;
}

export function SectionLayout({children, className}: Readonly<SectionLayoutProps>) {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </div>
  );
};
