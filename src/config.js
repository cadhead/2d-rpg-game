import { WEBGL, Scale } from "phaser"
import MainScene from "./scenes/main-scene";
import BootScene from "./scenes/boot-scene";
import PreloadScene from "./scenes/preload-scene";

export default {
  type: WEBGL,
  width: window.innerWidth,
  height: window.innerHeight,
  render: { pixelArt: true, antialias: false, autoResize: false },
  roundPixels: true,
  backgroundColor: "#000000",
  scale: {
    mode: Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  banner: false,
  disableContextMenu: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: true
    }
  },
  scene: [BootScene, PreloadScene, MainScene]
};