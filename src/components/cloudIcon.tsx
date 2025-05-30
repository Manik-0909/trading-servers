"use client";
import { Cloud, ICloud } from "react-icon-cloud";
export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};
export default function IconCloud() {
  return (
    <Cloud {...cloudProps}>
      <a>
        <img src="../static/img/icons/TS-Logo-Mark.svg" alt="" />
      </a>
      <a>
        <img src="../static/img/icons/C-icon.svg" alt="" />
      </a>
      <a>
        <img src="../static/img/icons/Rithmic_edited.png.svg" alt="" />
      </a>
      <a>
        <img src="../static/img/icons/Binance_Logo.svg.svg" alt="" />
      </a>
      <a>
        <img src="../static/img/icons/Bitcoin.svg" alt="" />
      </a>
      <a>
        <img src="../static/img/icons/CQG-Logo.svg" alt="" />
      </a>
      <a>
        <img src="../static/img/icons/Group-Icon.svg" alt="" />
      </a>
      <a>
        <img src="../static/img/icons/Hand-mark-Icon.svg" alt="" />
      </a>
      <a>
        <img src="../static/img/icons/Icon-file.svg" alt="" />
      </a>
      <a>
        <img src="../static/img/icons/multicharts_logo.svg" alt="" />
      </a>
      <a>
        <img src="../static/img/icons/Schwab-Thinkorswim.svg" alt="" />
      </a>
      <a>
        <img src="../static/img/icons/Kinetick_RMDS.svg" alt="" />
      </a>
    </Cloud>
  );
}
