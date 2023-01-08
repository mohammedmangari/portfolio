import style from './SDrawer.module.scss';
import { CSSTransition } from 'react-transition-group';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SDrawer = ({ children, show, onClose }) => {
  return (
    <>
      {show && <Backdrop onClick={onClose} />}

      <CSSTransition
        in={show}
        timeout={200}
        classNames="slide-in-left"
        mountOnEnter
        unmountOnExit
      >
        <aside className={style.sideDrawer} onClick={onClose}>
          {children}
        </aside>
      </CSSTransition>
    </>
  );
};

export default SDrawer;
