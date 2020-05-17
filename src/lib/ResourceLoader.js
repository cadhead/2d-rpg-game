export const SpritesLoader = (scene, sprites) => {
  for (let f in sprites) {
    if (Object.keys(sprites[f]).length !== 0) {
      let folder = sprites[f]

      for (let item in folder) {
        let sprite = folder[item]
        
        if (!sprite.size) {
          scene.load.image(sprite.name, sprite.image)
        } else {
          scene.load.spritesheet(sprite.name, sprite.image, sprite.size)
        }
      }
    }
  }
}