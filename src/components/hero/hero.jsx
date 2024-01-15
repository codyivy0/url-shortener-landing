import styles from './Hero.module.css'  

const Hero = () => {
  return ( 
    <div className={styles.heroContainer}>
        <div className={styles.heroImgContainer}>
             <img
        src="/illustration-working.svg"
        className={styles.heroImg}
        alt="person at desk illustration"
      />
        </div>
     
     <div className={styles.divider}></div>
    
      <div className={styles.heroContent}>
        <h1 className={styles.contentHeader}>More than just shorter links</h1>
        <p >
          Build your brands recognition and get detailed insights on how your
          links are performing
        </p>
        <button className={styles.getStartedBtn}>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;