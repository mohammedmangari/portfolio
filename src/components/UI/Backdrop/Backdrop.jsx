import style from './Backdrop.module.scss';

const Backdrop = ({ onClick }) => {
  return <div className={style.backdrop} onClick={onClick} />;
};

export default Backdrop;
