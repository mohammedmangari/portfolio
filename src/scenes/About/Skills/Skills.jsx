import s from './Skills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiBootstrap,
  DiAndroid,
  DiPython,
  DiDjango,
  DiMysql,
  DiCss3,
  DiHtml5,
  DiDotnet,
} from 'react-icons/di';
import {
  SiSocketdotio,
  SiAmazonaws,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiPython />
      </li>
      <li className={s.techIcon}>
        <DiDjango />
      </li>
      <li className={s.techIcon}>
        <DiMysql/>
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiAndroid />
      </li>
       <li className={s.techIcon}>
        <DiHtml5 />
      </li>
       <li className={s.techIcon}>
        <DiJava />
      </li>
       <li className={s.techIcon}>
        <DiDotnet/>
      </li>
    </ul>
  );
};

export default TechSkills;
