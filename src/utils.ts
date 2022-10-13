import { BPCAcontrast, sRGBtoY, bridgeRatio } from "bridge-pca";
import { colorParsley, colorToHex } from "colorparsley";

export const parseColor = (color: string) => {
  return colorParsley(color);
};

export const getHexColor = (color: string) => {
  const result = color.startsWith("#") ? color : "#" + colorToHex(parseColor(color), false);
  return result;
};

export const getContrast = (textColor: string, bgColor: string) => {
  const TextColor = colorParsley(textColor);
  const BGColor = colorParsley(bgColor);
  const contrastLC = BPCAcontrast(sRGBtoY(TextColor), sRGBtoY(BGColor));
  const wcag2Ratio = bridgeRatio(contrastLC, sRGBtoY(TextColor), sRGBtoY(BGColor)).split("to").join(":");
  return { contrastLC, wcag2Ratio };
};

export const getAALevel = (ratio: number) => {
  const absoluteRatio = Math.abs(ratio);
  let quality = "";
  if (absoluteRatio != undefined) {
    if (absoluteRatio < 15) {
      quality = "INVISIBLE! 😢";
    } else if (absoluteRatio >= 15 && absoluteRatio < 30) {
      quality = "NOTICEABLE 😌";
    } else if (absoluteRatio >= 30 && absoluteRatio < 45) {
      quality = "GETTING BETTER 🙂";
    } else if (absoluteRatio >= 45 && absoluteRatio < 60) {
      quality = "NICE JOB 😀";
    } else if (absoluteRatio >= 60 && absoluteRatio < 75) {
      quality = "GREAT! 😄";
    } else if (absoluteRatio >= 75 && absoluteRatio < 90) {
      quality = "BEST 😊";
    } else if (absoluteRatio >= 90) {
      quality = "ACCESSIBILITY MASTER!!! 🤩";
    }
  } else {
    quality = "?";
  }
  return quality;
};

export const getFromQueryParams = () => {
  if (window && window.location && URLSearchParams) {
    let result = { txtColorFromUrl: {}, bgColorFromUrl: {} };
    const currentLocation = window.location;
    const queryParams = new URLSearchParams(currentLocation.search);
    const txtStringFromUrl = queryParams.get("txtColor");
    const bgStringFromUrl = queryParams.get("bgColor");
    if ((txtStringFromUrl && txtStringFromUrl.length > 0) || (bgStringFromUrl && bgStringFromUrl.length > 0)) {
      const parsedTxtString = parseColor(txtStringFromUrl ?? "");
      const parsedBgString = parseColor(bgStringFromUrl ?? "");
      if (parsedTxtString[4] === false) {
        result.txtColorFromUrl = -1;
      } else {
        result.txtColorFromUrl = colorToHex(parsedTxtString, false);
      }
      if (parsedBgString[4] === false) {
        result.bgColorFromUrl = -1;
      } else {
        result.bgColorFromUrl = colorToHex(parsedBgString, false);
      }
    } else {
      result = { txtColorFromUrl: -2, bgColorFromUrl: -2 };
    }
    return result;
  } else {
    return { txtColorFromUrl: -2, bgColorFromUrl: -2 };
  }
};

type MixpanelProps = {
  source: string;
  txtColor?: string;
  bgColor?: string;
};

export const mixpanelTrack = (type: "Viewed" | "Click", props: MixpanelProps) => {
  if (process.env.NODE_ENV === "development") {
    console.log("TRACK CALL: ", { type, ...props });
  } else {
    if (mixpanel) {
      mixpanel?.track(type, {
        ...props,
      });
    }
  }
};
