import style from './About.module.scss';
import Layout from '../../layouts/Layout/Layout';
//import aboutPromoImg from '../../assets/photo.png';
import AboutTextCard from './About/About';
import TechSkills from './Skills/Skills';


const About = () => {
  return (
    <Layout>
      <div className={style.content}>
        <div className={style.about}>
          <div className={style.aboutDescription}>
            <h1 className={style.title}>
              Know Who <b className={style.purple}>I'M</b>
            </h1>
      
            <AboutTextCard />
          </div>

  
        </div>

        <h2 className={style.skills}>
          My Professional <b className={style.purple}>Skills</b>
         <hr/>
        </h2>
        <TechSkills />
      </div>
    </Layout>
  );
};

export default About;
