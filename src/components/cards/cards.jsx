import styles from "./cards.module.css";

const Cards = () => {
  return (
    <section className={styles.cardsContainer}>
      <h1>Advanced Statistics</h1>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <img
              className={styles.icon}
              src="/icon-brand-recognition.svg"
              alt=""
            />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links dont
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <img
              className={styles.icon}
              src="/icon-detailed-records.svg"
              alt=""
            />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <img
              className={styles.icon}
              src="/icon-fully-customizable.svg"
              alt=""
            />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cards;
