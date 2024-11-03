import styles from './styles.module.css';
import {ArrowsIconLeft, ArrowsIconRight} from "../icons/arrows-icon.tsx";
import classNames from "classnames";
import priceImage from '/icons/icon-price.png'

export const CardCarousel = ({items}: { items: CardProps[] }) => {
  return (
    <div className={styles.carouselContainer}>
      <button className={styles.navButton}><ArrowsIconLeft/></button>
      <div className={styles.carousel}>
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      <button className={classNames(styles.navButton, styles.navButtonRight)}><ArrowsIconRight/></button>
    </div>
  );
};

interface CardProps {
  title: string;
  image: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  remaining: string;
  game: string;
}

const Card: React.FC<CardProps> = ({title, image, price, originalPrice, remaining, game, discount}) => {
  return (
    <button type='button' className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage}/>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.priceSection}>
          <div className={styles.price}>
            <img width={16} height={16} src={priceImage}
                 alt='price image'/>
            {price}
          </div>
          {originalPrice &&
              <div className={styles.originalPrice}> {originalPrice}</div>}
        </div>
        <div className={styles.remainingBadge}>{remaining} REMAINING</div>
        <div className={styles.gameName}>{game}</div>
        {discount && <div className={styles.discountBadge}>{discount}</div>}
      </div>
    </button>
  );
};

