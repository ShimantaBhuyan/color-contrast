import React from "react";

const Blob = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      style={{ pointerEvents: "none" }}
    >
      <path
        fill={props.fill}
        stroke={"#000"}
        strokeWidth={5}
        d="M49.4,-18.8C56,4.3,47.8,29.3,30.3,42.1C12.8,54.9,-13.9,55.4,-35.9,41.3C-57.9,27.2,-75.3,-1.4,-68.5,-24.7C-61.7,-48,-30.9,-65.9,-4.7,-64.4C21.4,-62.8,42.8,-41.8,49.4,-18.8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};

export default Blob;
