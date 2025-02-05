import { IAppCard } from "./components/AppCard/interfaces";

import cubePreview from "./assets/cube-preview.avif";
import miamiPreview from "./assets/miami-preview.avif";
import namuPreview from "./assets/namu-preview.avif";
import tablePreview from "./assets/table-preview.avif";
import binancePreview from "./assets/binance-preview.avif";
import extensionPreview from "./assets/extension-preview.avif";
import puzzlePreview from "./assets/puzzle-preview.avif";

export const appCards: IAppCard[] = [
  {
    image: cubePreview,
    title: "Cube Game",
    linkToDemo: "https://den-bulaev-cube-game.netlify.app/",
    linkToCode: "https://github.com/den-bulaev/game-remastered",
    stack: "react, react-context, ts, html, scss, vite, netlify",
  },
  {
    image: tablePreview,
    title: "Custom Table Generator",
    linkToDemo: "https://den-bulaev.github.io/table-generator/",
    linkToCode: "https://github.com/den-bulaev/table-generator",
    stack: "react, ts, html, css, vite",
  },
  {
    image: extensionPreview,
    title: "Published Chrome Extension",
    linkToDemo:
      "https://chromewebstore.google.com/detail/autonext-jutsu/apkoedahaboalmgcabppieekaiackdkk?hl=en-US&utm_source=ext_sidebar",
    linkToCode: "https://github.com/den-bulaev/jut-su-browser-extension",
    stack: "js, css, chrome API",
  },
  {
    image: binancePreview,
    title: "Binance API Integration",
    linkToDemo: "https://den-bulaev.github.io/smart-business-test-task/",
    linkToCode: "https://github.com/den-bulaev/smart-business-test-task",
    stack: "react, redux toolkit, ts, tanstack table, html, css",
  },
  {
    image: miamiPreview,
    title: "Miami Landing",
    linkToDemo: "https://den-bulaev.github.io/Miami/",
    linkToCode: "https://github.com/den-bulaev/Miami",
    stack: "html, scss",
  },
  {
    image: puzzlePreview,
    title: "Tile Puzzle extension (coming soon)",
    linkToDemo: "",
    linkToCode: "",
    stack: "react, vite, ts, html, css, canvas, chrome api",
  },
  {
    image: namuPreview,
    title: "NAMU Landing",
    linkToDemo: "https://den-bulaev.github.io/Museum/",
    linkToCode: "https://github.com/den-bulaev/Museum",
    stack: "html, scss",
  },
];
