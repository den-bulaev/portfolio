import { IAppCard } from "./components/AppCard/interfaces";

import cubePreview from "./assets/cube-preview.avif";
import miamiPreview from "./assets/miami-preview.avif";
import namuPreview from "./assets/namu-preview.avif";
import tablePreview from "./assets/table-preview.avif";
import binancePreview from "./assets/binance-preview.avif";
import extensionPreview from "./assets/extension-preview.avif";
import puzzlePreview from "./assets/puzzle-preview.avif";
import phaserGame from "./assets/game-preview.avif";
import searchPreview from "./assets/search-preview.avif";

export const appCards: IAppCard[] = [
  {
    image: searchPreview,
    title: "Extended Google Search",
    linkToDemo: "https://chromewebstore.google.com/detail/extended-google-search/gfkienbdjifbdhablmidgmmgkmdmfbjd",
    linkToCode: "https://github.com/den-bulaev/extended-google-search",
    stack: "react, ts, vite, chrome API",
  },
  {
    image: cubePreview,
    title: "Cube Game",
    linkToDemo: "https://den-bulaev-cube-game.netlify.app/",
    linkToCode: "https://github.com/den-bulaev/game-remastered",
    stack: "react, react-context, ts, html, scss, vite, netlify",
  },
  {
    image: puzzlePreview,
    title: "Tile Puzzle Published Chrome Extension",
    linkToDemo:
      "https://chromewebstore.google.com/detail/tile-puzzle/daonpfbaalkmmieafnfpbopadndgbinc",
    linkToCode: "https://github.com/den-bulaev/tile-puzzle-chrome-extension",
    stack: "react, vite, ts, html, css, canvas, chrome api",
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
    image: phaserGame,
    title: "The Blendon",
    linkToDemo:
      "https://pixel-of-eternity.itch.io/the-blendon",
    linkToCode: "https://github.com/den-bulaev/phaser_game",
    stack: "js, css, phaser3",
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
    image: namuPreview,
    title: "NAMU Landing",
    linkToDemo: "https://den-bulaev.github.io/Museum/",
    linkToCode: "https://github.com/den-bulaev/Museum",
    stack: "html, scss",
  },
];
