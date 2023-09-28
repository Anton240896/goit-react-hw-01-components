import styles from './statistics.module.css';

export const Statistics = ({ title, stats }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  return (
    <section className={styles.stats}>
      {title.toUpperCase() && <h2 className={styles.title}>{title}</h2>}
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
