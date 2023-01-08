import style from './IntroSection.module.scss';

import avatar from '../../../assets/avatar.png';

import { AiFillGithub } from 'react-icons/ai';

import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaLinkedin,
  FaInstagram,
  FaVoicemail
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { MdEmail } from 'react-icons/md';

const IntroSection = () => {
  return (
    <section className={style.content}>
      
      <div className={style.introSocial}>
        
        <Tilt trackOnWindow={true}>
           <LazyLoadImage alt="avatar"  effect="blur" src={avatar} />
        </Tilt> 
        <h1 className={style.purple}>FIND ME ON</h1>
            <ul className={style.socialLinks}>
          <li className={style.socialLink}>
            <a
              href="https://github.com/mohammedmangari"
              target="_blank"
              rel="noreferrer"
              className={style.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>

          <li className={style.socialLink}>
            <a
              href="https://www.linkedin.com/in/mohammed-mangari-47b67b237/"
              target="_blank"
              rel="noreferrer"
              className={style.socialIcon}
            >
              <FaLinkedin />
            </a>
          </li>
          <li className={style.socialLink}>
            <a
              href="https://www.instagram.com/med.man1/"
              target="_blank"
              rel="noreferrer"
              className={style.socialIcon}
            >
              <FaInstagram />
            </a>
          </li>
          
        </ul>
      
          
      </div>
    </section>
  );
};

export default IntroSection;
