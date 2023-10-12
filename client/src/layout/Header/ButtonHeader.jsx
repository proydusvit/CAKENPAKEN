import styles from "./ButtonHeader.module.scss";

const ButtonHeader = ({ handleClick, isClicked }) => {
  return (
    <div className={styles.nav}>
      <button
        className={`${styles.button} ${isClicked ? styles.clicked : ""}`}
        onClick={handleClick}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
    </div>
  );
};

export default ButtonHeader;
