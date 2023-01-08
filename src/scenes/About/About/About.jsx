import style from './About.module.scss';

const About = () => {
  return (
    <div className={style.card}>
      <p style={{ textAlign: 'justify' }}>
        Hello Everyone, I am{' '} 
        <span className={style.purple}>Mohammed Mangari, </span>
        from <span className={style.purple}>  Morocco. </span>
        <br />
       a software engineering student at the National School of Applied Science in Oujda.
        <br /> I love exploring, learning new things, and taking on new challenges.
        <br />
      </p>
    </div>
  );
};

export default About;
