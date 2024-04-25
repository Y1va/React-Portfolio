import React from 'react';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section>
      <h2>About</h2>
      <div>
        <img
          src={getImageUrl('about/aboutimage.png')}
          alt="person sitting with laptop"
        />
        <ul>
          <li>
            <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor Icon" />
            <div>
              <h3>Frontend Developer</h3>
              <p>
                On my way to becoming a front-end developer with experience in
                building responsive and optimised web applications
              </p>
            </div>
          </li>
          <li>
            <img src={getImageUrl('about/serverIcon.png')} alt="Server Icon" />
            <div>
              <h3>Backend Developer</h3>
              <p>
                I have gained experience in developing fast and robust back-end systems as well as APIs
              </p>
            </div>
          </li>
          <li>
            <img src={getImageUrl('about/uiIcon.png')} alt="UI Icon" />
            <div>
              <h3>Full-Stack Developer</h3>
              <p>
                With both Frontend and Backend capabilities I am equipped to build fully functional and operational full-stack web applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
