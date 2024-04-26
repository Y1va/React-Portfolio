import React from 'react';
import styles from './Experience.module.css';
import skills from '../../data/skills.json';

export const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div>
        <div>{
          skills.map()
          }</div>
        <ul></ul>
      </div>
    </section>
  );
};

export default Experience;
