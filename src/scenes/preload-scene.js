import { Scene } from "phaser"
import ProgressBar from "../components/preload-progress-bar";
import Assets from "../assets/*/*.png"

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

    console.log(Assets)

    this.load.image("spriteSheet", Assets.Spritesheet.roguelikeSheet_transparent)

    for (let i = 0; i < 500; i++) {
      this.load.image("spriteSheet" + i, "../assets/Spritesheet/roguelikeSheet_transparent.png");
    }
  }

  create() {
    this.add.image(400, 400, "spriteSheet")
  }

  update() {
  }
}