// src/types/react-awesome-slider-autoplay.d.ts

declare module 'react-awesome-slider/dist/autoplay' {
    import { ComponentType } from 'react';
    import { AwesomeSliderProps } from 'react-awesome-slider';
  
    interface AutoplaySliderProps extends AwesomeSliderProps {
      play?: boolean;  // Autoplay enabled
      cancelOnInteraction?: boolean;  // Cancel autoplay on interaction
      interval?: number;  // Autoplay interval
      animation?: string;  // Animation type (ensure it's valid)
    }
  
    const withAutoplay: (Component: ComponentType<AutoplaySliderProps>) => ComponentType<AutoplaySliderProps>;
  
    export default withAutoplay;
  }
  