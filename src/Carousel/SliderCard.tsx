import "animate.css";
import { useState } from "react";

const SliderCard = ({ slideData }) => {
  const [animationClass, setAnimationClass] = useState(false);

  return (
    <div
      className={"slide-card "}
      style={{
        background: `url(${slideData?.img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="slider-card-info"
        onMouseOver={() => setAnimationClass(true)}
        onMouseLeave={() => setAnimationClass(false)}
      >
        <p
          className={`slider-card-info-title ${
            animationClass ? "animate__animated animate__fadeOutUp" : ""
          }`}
        >
          {slideData?.title}
        </p>
        <p
          className={`slider-card-info-desc ${
            animationClass ? "animate__animated animate__fadeOutDown" : ""
          }`}
        >
          {slideData?.desc}
        </p>
      </div>
    </div>
  );
};

export default SliderCard;
