import Button from "../js/button.js";
// Clase Ayuda, donde se cambia el idioma del juego
export class Ayuda2 extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Ayuda2");
  }
  preload() {
    this.load.tilemapTiledJSON(
      "tablero",
      "public/assets/tilemaps/tablero.json"
    );
  }
  create() {
    // Boton para volver a la escena de Play
    const tablero = this.make.tilemap({ key: "tablero" });
    const botonmenu = this.sound.add("botonmenuson");
    let spawnPoint = tablero.findObject(
      "Botones",
      (obj) => obj.name == "Ayuda"
    );
    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "ayuda2_bg")
      .setScale(1);
    let cam = this.cameras.main;
    let targetScene = this.scene.get("Ayuda"); // sleeping
    let targetCam = targetScene.cameras.main;
    let defaultWidth = this.cameras.default.width;
    cam.setName("Ayuda2");
    const botonvolver = new Button(
      this.cameras.main.centerX * 0.15,
      this.cameras.main.centerY,
      "volver",
      this,
      () => {
        this.scene.transition({
          target: "Ayuda",
          sleep: true,
          duration: 2000,
          onUpdate: function (progress) {
            const t = Phaser.Math.Easing.Quadratic.InOut(progress);

            cam.setViewport(
              t * defaultWidth,
              0,
              (1 - t) * defaultWidth,
              cam.height
            );
            targetCam.setViewport(0, 0, t * defaultWidth, targetCam.height);
            targetCam.setScroll((1 - t) * defaultWidth, 0);
          },
        });
      }
    );
    //const boton = new Button(spawnPoint.x, spawnPoint.y,
    //    'ayuda', this, () => {
    // Instrucción volver a la escena Play
    //this.scene.wake("Ayuda");
    //this.scene.switch("Play");
    //});
  }
}
