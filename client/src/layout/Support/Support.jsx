import styles from "./Support.module.scss"

const Support = () => {
  return (
    <div>
          <div className={styles.support}>
        <a className={styles.support__btn}>Donate</a>
        <p className={styles.support__text}>Support Ukraine</p>
      </div>
    </div>
  )
}

export default Support;
