import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailIcon.png')} alt="Email Icon" />
          <a href="mailto:ponzeadrian@gmail.com">ponzeadrian@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/adrian-ponze-367047246/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubIcon.png')} alt="GitHub Icon" />
          <a href="https://github.com/Y1va">GitHub</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
