import { Scene } from "phaser"
import GenerateMap from "../lib/GenerateMap"

export default class extends Scene {
  constructor() {
    super({
      key: "Main"
    })
  }

  preload() {
    GenerateMap(this, "overworld")
  }

  create() {

  }

  update() {

  }
}
