import s from './Projects.module.scss';
import Layout from '../../layouts/Layout/Layout';
import { PROJECTS } from '../../dataProject/Myprojects';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <Layout>
      <div className={s.content}>
        <h1 className={s.title}>
          My Recent <strong className={s.purple}>Works</strong>
        </h1>
        <p className={s.subtitle}>
          Here are a few projects I've worked on recently.
        </p>

        <ul className={s.projects}>
          {PROJECTS.map((props) => (
            <ProjectCard key={props.id} {...props} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
