import { Scene } from "phaser"
import { LoadSprites, LoadMaps } from "../lib/ResourceLoader"

import ProgressBar from "../components/preload-progress-bar";
import { Sprites, Maps } from "../../assets"

export default class extends Scene {
  constructor() {
    super({
      key: "Preload"
    })
  }

  preload() {
    const bar = new ProgressBar(this)

    this.load.on("progress", value => {
      bar.fillBar(value)
    })

    this.load.on("complete", () => {
      bar.destroy()
    })

    LoadSprites(this, Sprites)
    LoadMaps(this, Maps)
  }

  create() {
    this.scene.start("Main")
  }

  update() {
    
  }
}