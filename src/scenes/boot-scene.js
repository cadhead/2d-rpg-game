import { Scene } from "phaser"

export default class extends Scene {
  constructor() {
    super({
      key: "Boot"
    })
  }

  preload() {

  }

  create() {
    this.scene.start("Preload")
  }

  update() {

  }
}