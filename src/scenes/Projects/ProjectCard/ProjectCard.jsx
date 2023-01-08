import s from './ProjectCard.module.scss';
import { Link, useLocation } from 'react-router-dom';

const PCard = ({ id, title, description }) => {
  const location = useLocation();

  return (
    <li className={s.card}>
      <div className={s.cardWrapper}>
        <Link
          to={`/project/${id}`}
          state={{ background: location }}
        >
        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>
           <hr/>
          <p className={s.description}>{description}</p>
        </div>
        </Link>
      </div>
    </li>
  );
};
export default PCard;
