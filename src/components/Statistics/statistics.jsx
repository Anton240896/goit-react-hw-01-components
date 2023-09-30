import styles from './statistics.module.css';
import { getRandomHexColor } from 'Helpers/Random';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.stats}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statisticsList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles.item}
              style={{
                backgroundColor: getRandomHexColor(),
              }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
