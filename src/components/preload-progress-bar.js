export default class {
  constructor(scene, size = {}) {
    this.scene = scene

    Object.defineProperty(this, {
      width: 400,
      height: 40
    }, size)

    this.bar = this.scene.add.graphics()
    this.box = this.scene.add.graphics()

    this.createBox()
  }

  createBox() {
    let x = this.scene.cameras.main.width / 2 - this.size.width / 2
    let y = this.scene.cameras.main.height / 2 - this.size.height / 2

    this.percentText = this.scene.make.text({
      x: x + this.size.width / 2,
      y: y + this.size.height / 2,
      text: "0%",
      style: {
        font: "16px consolas",
        fill: "#ffffff"
      }
    })

    this.percentText.setOrigin(.5, .5)

    this.box.fillStyle(0x222222, 0.8);
    this.box.fillRect(x, y, this.size.width, this.size.height);
  }

  fillBar(value) {
    let x = this.scene.cameras.main.width / 2 - this.barSize.width / 2
    let y = this.scene.cameras.main.height / 2 - this.barSize.height / 2

    this.percentText.setText(parseInt(value * 100) + "%");
    this.bar.clear();
    this.bar.fillStyle(0xffffff, 1)
    this.bar.fillRect(x, y, this.barSize.width * value, this.barSize.height)
  }

  destroy() {
    this.percentText.destroy()
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
