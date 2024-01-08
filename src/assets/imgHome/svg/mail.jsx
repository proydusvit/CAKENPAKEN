import style from './svg.module.scss';
const Mail = () => {
  return (
    <div>
      <svg
        className={style.svg}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="black" />
        <path
          d="M29.8837 14.1682C29.8837 13.099 28.9837 12.2242 27.8837 12.2242H11.8837C10.7837 12.2242 9.88367 13.099 9.88367 14.1682V25.8318C9.88367 26.901 10.7837 27.7757 11.8837 27.7757H27.8837C28.9837 27.7757 29.8837 26.901 29.8837 25.8318V14.1682ZM27.8837 14.1682L19.8837 19.028L11.8837 14.1682H27.8837ZM27.8837 25.8318H11.8837V16.1121L19.8837 20.972L27.8837 16.1121V25.8318Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Mail;
