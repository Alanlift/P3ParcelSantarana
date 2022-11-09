class CartaAm {
  fondocarta;
  boton2;
  boton3;
  daduli;
  constructor(x, y, img1, scene, callback1, callback2) {
    (this.fondocarta = scene.add.image(x, y, img1).setScale(0.5)),
      (this.boton2 = scene.add
        .sprite(x * 1, y * 1.46, "botonam1")
        .setScale(0.5)),
      (this.daduli = scene.add
        .sprite(x * 1, y * 1.46, "dado20icon")
        .setScale(0.2)
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => this.desactivar(callback1))),
      (this.boton3 = scene.add
        .image(x * 1, y * 1.66, "botonam2")
        .setScale(0.5)
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => this.desactivar(callback2)));
  }
  desactivar(callback1) {
    callback1();
    this.daduli.disableInteractive();
    this.boton3.disableInteractive();
  }
  desaparecer() {
    this.fondocarta.visible = false;
    this.daduli.visible = false;
    this.boton2.visible = false;
    this.boton3.visible = false;
  }
  conseguir() {
    return this.daduli;
  }
}

export default CartaAm;
