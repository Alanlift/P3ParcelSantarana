import { getPhrase } from "../services/traducciones";

class CartaAm {
  fondocarta;
  boton2;
  boton3;
  daduli;
  constructor(x, y, img1, texto, scene, callback1, callback2) {
    (this.fondocarta = scene.add.image(x, y, img1).setScale(0.5)),
    (this.texto = scene.add
      .text(x * 1, y * 1.22, getPhrase(texto))
      .setStyle({ 
        fontSize: '26px', 
        fill: '#000000', 
        align: "center",
        fontFamily: 'Century Gothic',
    }));
      (this.boton2 = scene.add
        .sprite(x * 1, y * 1.46, getPhrase("botonam1"))
        .setScale(0.5)),
      (this.daduli = scene.add
        .sprite(x * 0.99, y * 1.46, "dado20icon")
        .setScale(0.18)
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => this.desactivar(callback1))),
      (this.boton3 = scene.add
        .image(x * 1, y * 1.66, "botonam2")
        .setScale(0.5)
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => this.desactivar(callback2))),
      this.texto.setOrigin(0.5);
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
    this.texto.visible = false;
  }
  conseguir() {
    return this.daduli;
  }
}

export default CartaAm;
