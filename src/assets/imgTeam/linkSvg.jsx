import styles from './linkSvg.module.scss';
const linkTre = () => {
  return (
    <div>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="61"
        viewBox="0 0 60 61"
        fill="none"
      >
        <ellipse cx="30" cy="30.1123" rx="30" ry="30.0752" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.7664 12.0674H32.7551V20.5686L38.3485 14.6338L41.7691 18.2633L36.7241 23.6163H45V29.3907H36.0982L41.8405 35.4418L38.4317 39.0837L30.2611 30.4738L21.7798 39.4729L18.3592 35.8435L24.4407 29.3907H15V23.6163H23.7536L18.0589 17.6153L21.4677 13.9734L27.7664 20.6108V12.0674ZM32.7551 36.2879H27.7664V48.1576H32.7551V36.2879Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default linkTre;
