import { Scene } from "phaser"
import { SpritesLoader } from "../lib/ResourceLoader"

import ProgressBar from "../components/preload-progress-bar";
import { Sprites } from "../assets"

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

    SpritesLoader(this, Sprites)

    /* test */
    // for (let i = 0; i < 100; i++) {
    //   this.load.image("image" + i, "some.png")
    // }
  }

  create() {
    this.scene.start("Main")
  }

  update() {
    
  }
}