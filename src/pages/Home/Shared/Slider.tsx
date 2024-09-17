import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Slider: React.FC = () => {
  return (
    <div>
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={1500}
    animation="cubeAnimation"
  >
        <div data-src="https://res.cloudinary.com/dfelm3bvn/image/upload/v1725218203/slider-2_dq9rtg.jpg" />
        <div data-src="https://res.cloudinary.com/dfelm3bvn/image/upload/v1725218201/slider-3_oiof0y.jpg" />
        <div data-src="https://res.cloudinary.com/dfelm3bvn/image/upload/v1725218201/RazerBlackWidow_trgjne.jpg" />
        </AutoplaySlider>
    </div>
  );
};

export default Slider;
