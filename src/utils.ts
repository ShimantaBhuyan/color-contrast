import { BPCAcontrast, sRGBtoY, bridgeRatio } from "bridge-pca";
import { colorParsley } from "colorparsley";

export const parseColor = (color: string) => {
  return colorParsley(color);
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