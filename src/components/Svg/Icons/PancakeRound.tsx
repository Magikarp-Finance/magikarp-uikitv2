import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <circle cx="256" cy="256" r="256" fill="url(#paint0_linear_logoroundcake)" />
        <image x={6} y={6} width={500} height={500} href='/Images/Magikarp/GyaIconBig.png' />
      <defs>
        <linearGradient id="paint0_linear_logoroundcake" x1="256" y1="0" x2="256" y2="512" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ff9853" /> 
          <stop offset="0.762157" stopColor="#ff6600" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;

