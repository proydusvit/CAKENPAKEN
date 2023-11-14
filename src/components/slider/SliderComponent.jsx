import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import sliderSettings from "./Settings";
import styles from "./Slider.module.scss";

const SliderComponent = ({ list }) => {
  return (
    <div className={styles.sliderbox}>
      <Slider {...sliderSettings}>
        {list.map(({ img, id, alt, width, height }) => (
          <div key={id}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={img} alt={alt} width={width} height={height} />
            </div>
          </div>
        ))}
      </Slider>{" "}
    </div>
  );
};

export default SliderComponent;
