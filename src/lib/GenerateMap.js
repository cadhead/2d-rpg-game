export default function GenerateMap(scene, key) {
  let map = scene.add.tilemap(key)
  let tilesetImage = map.addTilesetImage(key, `${key}-image`)
  let bg = map.createStaticLayer("background", tilesetImage)
  let scenery = map.createStaticLayer("scenery", tilesetImage)
  let sceneryfg = map.createStaticLayer("scenery-foreground", tilesetImage)
  let collisions = map.createStaticLayer("collision", tilesetImage)

  collisions.visible = false

  return scene.game.state.addMap({
    key, map, tilesetImage,
    layers: {
      background: bg,
      scenery: scenery,
      sceneryForeground: sceneryfg,
      collisions: collisions
    }
  })
}