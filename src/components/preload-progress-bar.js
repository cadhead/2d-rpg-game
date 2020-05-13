export default class {
  constructor(scene, size = {}) {
    this.scene = scene
    this.size = {
      width: size.width || 400,
      height: size.height || 40
    }

    this.bar = this.scene.add.graphics()
    this.box = this.scene.add.graphics()

    this.createBox()
  }

  createBox() {
    let x = this.scene.cameras.main.width / 2 - this.size.width / 2
    let y = this.scene.cameras.main.height / 2 - this.size.height / 2

    this.box.fillStyle(0x222222, 0.8);
    this.box.fillRect(x, y, this.size.width, this.size.height);
  }

  fillBar(value) {
    let x = this.scene.cameras.main.width / 2 - this.barSize.width / 2
    let y = this.scene.cameras.main.height / 2 - this.barSize.height / 2

    this.bar.clear();
    this.bar.fillStyle(0xffffff, 1)
    this.bar.fillRect(x, y, this.barSize.width * value, this.barSize.height)
  }

  destroy() {
    this.bar.destroy()
    this.box.destroy()
  }

  get barSize() {
    return {
      width: this.size.width - 10,
      height: this.size.height - 10
    }
  }
}