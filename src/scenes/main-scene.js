import { Scene } from "phaser"

export default class extends Scene {
  constructor() {
    super({
      key: "Main"
    })
  }

  preload() {

  }

  create() {
    this.add.image(400, 400, "overworld")
  }

  update() {

  }
}