import styles from './Video.module.scss'; // Стилі для компонента

const VideoPlayer = ({ videoId }) => {
  return (
    <div className={styles.video}>
      <iframe
        className={styles.frame}
        width="1065"
        height="550"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Завтра не пожалієш"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder={0}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
