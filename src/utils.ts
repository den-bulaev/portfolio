import { IAppCard } from "./components/AppCard/interfaces";

import cubePreview from "./assets/cube-preview.avif";
import miamiPreview from "./assets/miami-preview.avif";
import namuPreview from "./assets/namu-preview.avif";
import tablePreview from "./assets/table-preview.avif";
import binancePreview from "./assets/binance-preview.avif";

export const appCards: IAppCard[] = [
  {
    image: cubePreview,
    title: "Cube Game",
    linkToDemo: "https://den-bulaev-cube-game.netlify.app/",
    linkToCode: "https://github.com/den-bulaev/game-remastered",
    stack: "react, react-context, ts, html, scss, vite",
  },
  {
    image: tablePreview,
    title: "Custom Table Generator",
    linkToDemo: "https://den-bulaev.github.io/table-generator/",
    linkToCode: "https://github.com/den-bulaev/table-generator",
    stack: "react, ts, html, css, vite",
  },
  {
    image: binancePreview,
    title: "Binance API Integration",
    linkToDemo: "https://den-bulaev.github.io/smart-business-test-task/",
    linkToCode: "https://github.com/den-bulaev/smart-business-test-task",
    stack: "react, redux toolkit, tanstack table, html, css",
  },
  {
    image: miamiPreview,
    title: "Miami Landing",
    linkToDemo: "https://den-bulaev.github.io/Miami/",
    linkToCode: "https://github.com/den-bulaev/Miami",
    stack: "html, scss",
  },
  {
    image: namuPreview,
    title: "NAMU Landing",
    linkToDemo: "https://den-bulaev.github.io/Museum/",
    linkToCode: "https://github.com/den-bulaev/Museum",
    stack: "html, scss",
  },
];
