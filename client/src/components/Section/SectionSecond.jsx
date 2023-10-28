import style from "./SectionSecond.module.scss";

const SectionSecond = ({ children }) => {
  return <section className={style.section}>{children}</section>;
};

export default SectionSecond;
