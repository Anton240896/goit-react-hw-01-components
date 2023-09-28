import styles from './statistics.module.css';


export const Statistics = ({ title, stats }) => {
    return (
    <section className={styles.stats}>
      {title ?? <h2>{title}</h2>}
      <ul className={styles.statistics}>
        {Statistics.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles.item}
              key={id}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  )
    }