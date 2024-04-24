import React from 'react';

import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Adrian</h1>
        <p className={styles.description}>
          I'm currently studying Full-Stack development and learning a variety
          of new skills and techniques. I am looking forward to apply my skills
          in a real world environment
        </p>
        <a href="mailto:ponzeadrian@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/profilepic.png')}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
