import React from "react";

const AnimatedBlob = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width={props?.width || "100%"}
      id="blobSvg"
      filter="blur(0px)"
      style={{ opacity: 1 }}
      transform="rotate(0)"
    >
      {" "}
      <defs>
        {" "}
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          {" "}
          <stop offset="0%" style={{ stopColor: "rgb(84, 11, 14)" }}></stop>{" "}
          <stop offset="100%" style={{ stopColor: "rgb(224, 159, 62)" }}></stop>{" "}
        </linearGradient>{" "}
      </defs>{" "}
      <path id="blob" fill="url(#gradient)" style={{ opacity: 1 }}>
        <animate
          attributeName="d"
          dur="10s"
          repeatCount="indefinite"
          values="M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z;M392.2525,331.53996Q379.05994,413.07992,285.7525,456.15485Q192.44505,499.22978,100.80019,432.44731Q9.15533,365.66484,30.81018,260.57493Q52.46503,155.48501,121.45005,74.10764Q190.43506,-7.26974,268.13261,60.97003Q345.83016,129.2098,375.63761,189.6049Q405.44505,250,392.2525,331.53996Z;M388.67097,319.27849Q360.55699,388.55699,291.23441,379.72688Q221.91183,370.89678,145.00645,354.28387Q68.10108,337.67097,71.32903,251.33548Q74.55699,165,142.39247,119.95591Q210.22796,74.91183,286.12043,91.61398Q362.0129,108.31613,389.39892,179.15806Q416.78495,250,388.67097,319.27849Z;M429.79847,339.54154Q392.67727,429.08308,294.97368,455.00137Q197.27008,480.91966,143.94598,403.56786Q90.62188,326.21607,83.52769,246.22992Q76.43351,166.24376,136.8518,92.77008Q197.27008,19.29641,287.1482,55Q377.02632,90.70359,421.97299,170.3518Q466.91966,250,429.79847,339.54154Z;M390.7302,319.10952Q360.37524,388.21905,284.62068,409.39959Q208.86612,430.58014,161.11156,373.20082Q113.35701,315.8215,88.46857,238.04463Q63.58014,160.26776,136.76776,117.04463Q209.95537,73.8215,303.79007,69.52027Q397.62476,65.21905,409.35497,157.60952Q421.08517,250,390.7302,319.10952Z;M400,314Q352,378,277,420Q202,462,143,396Q84,330,66.5,241.5Q49,153,125.5,97.5Q202,42,298.5,55Q395,68,421.5,159Q448,250,400,314Z"
        ></animate>
      </path>
    </svg>
  );
};

export default AnimatedBlob;
