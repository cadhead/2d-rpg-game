class GameState {
  maps = []
  objects = []
  units = []
  camera = null

  addMap(data) {
    if (!data) return null

    this.maps.push(data)

    return data
  }
}

export default GameState
