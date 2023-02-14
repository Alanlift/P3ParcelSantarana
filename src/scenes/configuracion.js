import Phaser from 'phaser';
import ButtonFont from "../js/buttonfont.js";
import Button from "../js/button.js";
import { FETCHED, FETCHING, READY, TODO } from '../enums/estados';
import { DE_DE, EN_US, ES_AR, PT_BR } from '../enums/lenguajes';
import { getTranslations, getPhrase } from '../services/traducciones';
// Clase Opcion, donde se cambia el idioma del juego
export class Configuracion extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Configuracion")
    }
    init({ language }){
      this.language = language;
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
        const Argentina = new ButtonFont(
          this.cameras.main.centerX * 0.7, //Argentina
          this.cameras.main.centerY,
          "🇦🇷",
          this,
          () => {
            botonmenu.play();
            getTranslations(ES_AR);
          }
        );
        Argentina.style().setStyle({backgroundColor: '', fontSize: '200px'});
        const Estadosunidos = new ButtonFont(
            this.cameras.main.centerX * 1.3, //Estados Unidos
            this.cameras.main.centerY,
            "🇺🇸",
            this,
            () => {
              botonmenu.play();
              getTranslations(EN_US);
            }
        );
        Estadosunidos.style().setStyle({backgroundColor: '', fontSize: '200px'});
      }
    }
    