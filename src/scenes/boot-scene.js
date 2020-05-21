import { Scene, Scale } from "phaser"
import { Logo } from "../../assets"
import Splash from "../lib/Splash"

export default class extends Scene {
  constructor() {
    super({
      key: "Boot"
    })
  }

  preload() {
    for (let logo of Logo) {
      this.load.image(logo.name, logo.image)
    }
  }

  create() {
    this.splash = new Splash(Logo)
  }

  update() {
    this.splash.apply(this, () => {
      this.scene.start("Preload")
    })
  }
}
