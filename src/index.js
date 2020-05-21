import { Game } from "phaser"
import Config from "/config"
import GameState from "/GameState"

const GAME = new Game(Config)

GAME.config.params = {
  map: {
    tileSize: 32
  }
}

GAME.state = new GameState()

