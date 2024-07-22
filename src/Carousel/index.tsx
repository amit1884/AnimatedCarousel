import { useEffect, useState } from "react";
import SliderCard from "./SliderCard";
import "animate.css";
import "./carousel.css";

type slideListObj = {
  id: number;
  title: string;
  img: string;
  desc: string;
};
type CarouselProps = {
  slidesList: slideListObj[];
};
const Carousel: React.FC<CarouselProps> = ({ slidesList }) => {
  const [slides, setSlides] = useState(slidesList);

  const [animatedTitleClass, setAnimatedTitleClass] = useState("");
  const [animatedDescClass, setAnimatedDescClass] = useState("");
  const [animatedContainerClass, setAnimatedContainerClass] = useState("");
  const [slideClass, setSlideClass] = useState("");
  const nextHandler = () => {
    const tempSlide = [...slides];
    const first = tempSlide.shift();
    tempSlide.push(first);
    setSlides(tempSlide);

    setAnimatedDescClass("");
    setAnimatedTitleClass("");
    setAnimatedContainerClass("");
    setSlideClass("");
  };
  useEffect(() => {
    setAnimatedTitleClass("animate__animated animate__fadeInLeft");
    setAnimatedDescClass("animate__animated animate__fadeInLeft");
    setAnimatedContainerClass("animate__animated animate__fadeIn");
    setSlideClass("slide-animation");
  }, [slides]);
  return (
    <div className="carousel-container">
      <div className={`active-slide-container ${animatedContainerClass}`}>
        <img className="active-image" src={`${slides[0].img}`} alt="" />
        <div className="slide-info">
          <p className={animatedTitleClass}>{slides[0].title}</p>
          <p className={animatedDescClass}>{slides[0].desc}</p>
        </div>
        <div className="overlay"></div>
      </div>
      <div className="slide-list-container">
        <div className={`slides ${slideClass}`}>
          {slides?.map((slide: slideListObj) => {
            return <SliderCard slideData={slide} key={slide?.id} />;
          })}
        </div>
        <div className="slide-action-btn">
          <button className="btn btn-next" onClick={() => nextHandler()}>
            &larr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
