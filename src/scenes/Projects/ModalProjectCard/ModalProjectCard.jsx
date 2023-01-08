import style from './ModalProjectCard.module.scss';
import { BiLinkExternal } from 'react-icons/all';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/UI/Button/Button';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useModal } from '../../../hooks/modalHook';
import { PROJECTS } from '../../../dataProject/Myprojects';


const ModalProjectCard = () => {
  const { id } = useParams();
  const {title, links, technologies } = PROJECTS.find(
    (p) => id === p.id,
  );
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    toggleModal();
  }, []);

  return (
    <Modal show={isVisible} onClose={toggleModal}>
      <div className={style.cardWrapper}>
        <div className={style.cardBody}>
          <h3 className={style.title}>{title}</h3>
          <div className={style.technologies}>
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>

        <div className={style.cardFooter}>
          
{!!links.repo && (
            <Button
              style={{ width: '12rem' }}
              className="primary"
              href={links.repo}
              target="_blank"
            >
              <BiLinkExternal /> &nbsp; Know more
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalProjectCard;
