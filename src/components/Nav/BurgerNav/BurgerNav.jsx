import style from './BurgerNav.module.scss';

const BurgerNav = ({ onClick }) => {
  return (
    <button onClick={onClick} className={style.burger}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default BurgerNav;
