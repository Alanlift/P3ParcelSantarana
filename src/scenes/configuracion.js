import Phaser from 'phaser';
import ButtonFont from "../js/buttonfont.js";
import Button from "../js/button.js";

// Clase Opcion, donde se cambia el idioma del juego
export class Configuracion extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Configuracion")
    }

    create() {
        const botonmenu = this.sound.add("botonmenuson");
        this.add
          .image(this.cameras.main.centerX, this.cameras.main.centerY, "tabla_bg")
          .setScale(1);
        const boton = new Button(
          this.cameras.main.centerX * 0.15,
          this.cameras.main.centerY,
          "volver",
          this,
          () => {
            botonmenu.play();
            this.scene.switch("MainMenu");
          }
        );
        let juan = this.sound.add("juanson");
        const Argentina = new ButtonFont(
          this.cameras.main.centerX * 0.7, //Argentina
          this.cameras.main.centerY,
          "🇦🇷",
          this,
          () => {
            juan.play();
          }
        );
        Argentina.style().setStyle({backgroundColor: '', fontSize: '200px'});
        let cabra = this.sound.add("cabrason");
        const Estadosunidos = new ButtonFont(
            this.cameras.main.centerX * 1.3, //Estados Unidos
            this.cameras.main.centerY,
            "🇺🇸",
            this,
            () => {
              cabra.play();
            }
        );
        Estadosunidos.style().setStyle({backgroundColor: '', fontSize: '200px'});
      }
    }
    