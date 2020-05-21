// mb need rework using game.time.events.repeat

export default class Splash {
  items = []
  next = 0
  setupTime = Date.now()

  constructor(items) {
    items.forEach(item => {
      this.add(item)
    })
  }

  add(item) {
    if (!item || !item.name) return

    let newItem = {}

    Object.assign(newItem, {
      duration: 2000
    }, item)

    this.items.push(newItem)
  }

  applyOptions(item) {
    if (!item.options) return

    if (item.options.tint) {
      item.go.setTint(
        item.options.tint.topLeft,
        item.options.tint.topRight,
        item.options.tint.bottomLeft,
        item.options.tint.bottomRight
      )
    }
  }

  apply(scene, callback) {
    let item = this.items[this.next]

    if (Date.now() >= this.setupTime + item.duration) {
      item.go.destroy()

      this.next++
      this.setupTime = Date.now()

      if (this.items[this.items.length - 1].applyed) {
        return callback()
      }
    }

    if (item.applyed) return

    let x = scene.cameras.main.midPoint.x
    let y = scene.cameras.main.midPoint.y

    item.go = scene.add.image(x, y, item.name)
    this.applyOptions(item)

    item.applyed = true
  }
}