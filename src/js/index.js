import Phaser from "phaser";
import { Preloads } from "../scenes/preloads.js";
import { MainMenu } from "../scenes/mainmenu.js";
import { Creditos } from "../scenes/creditos.js";
import { Play } from "../scenes/play.js";
import { Interfaz } from "../scenes/interfaz.js";
import { Ayuda } from "../scenes/ayuda.js";
import { Ayuda2 } from "../scenes/ayuda2.js";
import { Opcion } from "../scenes/opcion.js";
import { Victoria } from "../scenes/victoria.js";
import { Configuracion } from "../scenes/configuracion.js";
const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 960,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 640,
      height: 360,
    },
    max: {
      width: 1920,
      height: 1080,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [Preloads, MainMenu, Configuracion, Creditos, Play, Interfaz, Opcion, Ayuda, Ayuda2, Victoria], // Listado de todas las escenas del juego, en orden
  // La primera escena es con la cual empieza el juego
};

export default new Phaser.Game(config);
