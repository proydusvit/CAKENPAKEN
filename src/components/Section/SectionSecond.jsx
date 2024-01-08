import style from './SectionSecond.module.scss';

const SectionSecond = ({ children }) => {
  return <div className={style.section}>{children}</div>;
};

export default SectionSecond;
