import Phaser from "phaser";
import Button from "../js/button.js";
import { getPhrase } from '../services/traducciones';
// // Clase Custom, donde se personaliza a los personajes.
export class Creditos extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Creditos");
  }

  create() {
    // Boton para volver
    const botonmenu = this.sound.add("botonmenuson");
    this.add
      .image(this.cameras.main.centerX, this.cameras.main.centerY, "creditos_bg")
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

    const juan = this.sound.add("juanson");
    const botonjuan = new Button(
      this.cameras.main.centerX * 0.58, //Juan Imagen
      this.cameras.main.centerY * 0.55,
      "juanpp",
      this,
      () => {
        juan.play();
      }
    );
    this.add.text(
      this.cameras.main.centerX * 0.4, //Juan Texto
      this.cameras.main.centerY * 0.75, "Juan Pablo\n Gutierrez\n"+
       getPhrase('Diseñador de Juego-Artista')).setStyle({ 
      fontSize: '30px', 
      fontFamily: 'Century Gothic', align: "center"
  });

    const juli = this.sound.add("julison");
    const botonjuli = new Button(
      this.cameras.main.centerX * 1.4, //Juli Imagen
      this.cameras.main.centerY * 1.25,
      "julipp",
      this,
      () => {
        juli.play();
      }
    );
    this.add.text(
      this.cameras.main.centerX * 1.28, //Juli Texto
      this.cameras.main.centerY * 1.45, "Julian Cravero\n"+
       getPhrase('Artista')).setStyle({ 
      fontSize: '30px', 
      fontFamily: 'Century Gothic', align: "center"
    });

    const alan = this.sound.add("alanson");
    const botonalan = new Button(
      this.cameras.main.centerX * 1.4, //Alan Imagen
      this.cameras.main.centerY * 0.55,
      "alanpp",
      this,
      () => {
        alan.play();
      }
    );
    this.add.text(
      this.cameras.main.centerX * 1.28, //Alan Texto
      this.cameras.main.centerY * 0.75, "Alan Ezequiel\n Farias\n"+
       getPhrase('Programador')).setStyle({ 
      fontSize: '30px', 
      fontFamily: 'Century Gothic', align: "center"
  });

    const cabra = this.sound.add("cabrason");
    const botoncabra = new Button(
      this.cameras.main.centerX * 0.58, //Cabra Imagen
      this.cameras.main.centerY * 1.25,
      "cabrapp",
      this,
      () => {
        cabra.play();
      }
    );
    this.add.text(
      this.cameras.main.centerX * 0.4, //Cabra Texto
      this.cameras.main.centerY * 1.45, "Lautaro Cabrera\n"+
       getPhrase('Diseñador de Juego-Sonido')).setStyle({ 
      fontSize: '30px', 
      fontFamily: 'Century Gothic', align: "center"
  });

    const botonunraf = new Button(
      this.cameras.main.centerX, //Cabra
      this.cameras.main.centerY,
      "unrafpp",
      this,
      () => {
        window.open('https://www.unraf.edu.ar/');
      }
    );

    botonunraf.achicar(0.9);
    botonjuan.achicar(0.9);
    botonjuli.achicar(0.9);
    botonalan.achicar(0.9);
    botoncabra.achicar(0.9);
  }
}
