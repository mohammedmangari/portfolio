import s from './MainSection.module.scss';
import Typewriter from '../../../components/UI/Typewriter/Typewriter';


const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          Hi There! <span className={s.wave}>🖐</span>
        </h2>

        <h1 className={s.mainTitle}>
          I'M
          <strong className={s.mainName}> MANGARI MOHAMMED</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'Full Stack Devlopper',
              'React',
              'Java Spring Boot',
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>
      <iframe src="https://giphy.com/embed/X74GovIqGMZYxXblCL" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/work-computer-hump-day-X74GovIqGMZYxXblCL"></a></p>
    </section>
  );
};

export default MainSection;
