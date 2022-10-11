## Color Contrast (using [APCA](http://apcaw3.myndex.com/)) - Inspired from work by [Myndex](https://github.com/Myndex)

This is a tool to check for color contrast using APCA(the candidate method for WCAG 3) and which is backwards compatible
with WCAG 2.1, but is actually based on human perception.

> Accessible Perceptual Contrast Algorithm (APCA) is a contrast assessment method for predicting the perceived contrast
> between sRGB colors on a computer monitor. It has been developed as an assessment method for W3 Silver/WCAG3
> accessibility standards relating to content for computer displays and mobile devices, with a focus on readability and
> understandability.

## Check minimum contrast guidelines for WCAG 2.1 [here](https://www.w3.org/TR/WCAG21/#contrast-minimum)

## About APCA

APCA™ is the candidate contrast method for WCAG 3, and is currently in public beta. WCAG 3 is still in development and
subject to changes prior to adoption.

APCA is a part of the larger S-Luv Accessible Readability Color Appearance Model known as SARCAM (formerly SAPC). These
models are specifically related to color appearance on self-illuminated RGB computer displays & devices, and also for
modeling accessible user needs, with a focus on readability.

## Lightness Contrast (L<sup>c</sup>)

The APCA generates a contrast value based on a color pair, and this value is perceptually based: that is, regardless of
how light or dark the colors are, a contrast value of Lc 60 represents the same perceived readability contrast. This is
absolutely not the case with WCAG 2.x, which far overstates contrast for dark colors to the point that 4.5:1 can be
functionally unreadable when a color is near black. As a result, WCAG 2.x contrast cannot be used for guidance designing
"dark mode".

The APCA contrast value is perceptually uniform, and pivots near the point where the CS curve flattens due to contrast
constancy. Halving or doubling the APCA value relates to a halving or doubling of the perceived contrast. There is a
subtle weighting for higher contrasts to smaller, thinner fonts.

## Read more about it [here](https://git.apcacontrast.com/documentation/APCA_in_a_Nutshell)

## Usage notes for the tool

- Enter any hex, rgb, css color value to the corresponding input fields for text color and background color
- You can also send colors in the query params in the form of '`txtColor=<>&bgColor=<>`' to automatically load the
  contrast in the page from the url
