export function LoadSprites(scene, sprites) {
  for (let folder in sprites) {
    sprites[folder].forEach(sprite => {
      if (!sprite.size) {
        scene.load.image(sprite.name, sprite.image)
      } else {
        scene.load.spritesheet(sprite.name, sprite.image, sprite.size)
      }
    });
  }
}

export const LoadMaps = (scene, maps) => {
  for (let map of maps) {
    scene.load.tilemapTiledJSON(map.name, map.tileset);
    console.log(map)
  }
}
