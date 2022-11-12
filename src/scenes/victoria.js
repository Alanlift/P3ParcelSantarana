import Phaser from "phaser";
import Button from "../js/button.js";

let JTurno;

// // Clase Custom, donde se personaliza a los personajes.
export class Victoria extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Victoria");
  }

  init(data) {
    JTurno = data.JTurno;
  }
  create() {
    const musica = this.sound.add('temamen',{loop: true})
    const botonmenu = this.sound.add('botonmenuson');
    const victoria = this.sound.add("victoria");
    victoria.play();
    this.add.image(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "victoria_bg"
    );
    if (JTurno == "0") {
      this.Ganador("GANASTE " + "Jugador 1");
      this.JugadorTurno("Jugador 1");
    } else if (JTurno == "1") {
      this.Ganador("GANASTE " + "Jugador 2");
      this.JugadorTurno("Jugador 2");
    } else {
      this.Ganador("GANASTE " + "Jugador 3");
      this.JugadorTurno("Jugador 3");
    }
    const boton = new Button(
      this.cameras.main.centerX * 0.15,
      this.cameras.main.centerY,
      "volver",
      this,
      () => {
        botonmenu.play();
        this.scene.start("MainMenu");
        musica.play();
      }
    );
  }

  JugadorTurno(Turno) {
    let cartel = this.add
      .sprite(
        this.cameras.main.centerX,
        this.cameras.main.centerY / 1.25,
        Turno
      )
      .setScale(0.4);
    if (Turno == "Jugador 1") {
      this.add
        .image(
          this.cameras.main.centerX * 1.15,
          this.cameras.main.centerY * 1.3,
          "sapo0"
        )
        .setScale(0.2);
    } else if (Turno == "Jugador 2") {
      this.add
        .image(
          this.cameras.main.centerX * 1.15,
          this.cameras.main.centerY * 1.3,
          "sapo1"
        )
        .setScale(0.2);
    } else if (Turno == "Jugador 3") {
      this.add
        .image(
          this.cameras.main.centerX * 1.15,
          this.cameras.main.centerY * 1.3,
          "sapo2"
        )
        .setScale(0.2);
    }
    cartel.play("victoriarda");
  }

  Ganador(Jugador) {
    this.add
      .text(
        this.cameras.main.centerX * 0.5,
        this.cameras.main.centerY,
        Jugador.toUpperCase()
      )
      .setStyle({
        backgroundColor: "#71af45",
        fontSize: "60px",
        //fill: '#000000',
        fontFamily: "Arial",
      });
  }
}
