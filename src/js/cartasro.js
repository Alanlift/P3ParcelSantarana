import { getPhrase } from "../services/traducciones";

class CartaRo {
  fondocarta;
  boton2;
  daduli;
  constructor(x, y, img1, texto, scene, callback1) {
    (this.fondocarta = scene.add.image(x, y, img1).setScale(0.5)),
    (this.texto = scene.add
      .text(x * 1, y * 1.3, getPhrase(texto))
      .setStyle({ 
        backgroundColor: '#571d05', 
        fontSize: '30px', 
        fill: '#000000', 
        align: "center",
        fontFamily: 'Century Gothic',
    }));
      (this.boton2 = scene.add
        .sprite(x * 1, y * 1.65, "botonro1")
        .setScale(0.5)),
      (this.daduli = scene.add
        .sprite(x * 1, y * 1.65, "dado20icon")
        .setScale(0.18)
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => this.desactivar(callback1)));
        this.texto.setOrigin(0.5);
  }
  desactivar(callback1) {
    callback1();
    this.daduli.disableInteractive();
  }
  desaparecer() {
    this.fondocarta.visible = false;
    this.boton2.visible = false;
    this.daduli.visible = false;
    this.texto.visible = false;
  }
  conseguir() {
    return this.daduli;
  }
}
export default CartaRo;
