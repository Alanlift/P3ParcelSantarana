import Phaser from 'phaser';
import Button from "../js/button.js";

let JTurno;

// // Clase Custom, donde se personaliza a los personajes.
export class Victoria extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Victoria")
    }

    init(data) {
        JTurno = data.JTurno;
      }
    create() {
        this.video = this.add.video(this.cameras.main.centerX, this.cameras.main.centerY,'final');
        this.video.play();
        const victoria = this.sound.add('victoria');
        victoria.play();
        if (JTurno == '0') {
            this.Ganador("GANASTE "+ "Jugador 1");
              this.JugadorTurno("Jugador 1");
            } else if (JTurno == '1'){
              this.Ganador("GANASTE "+ "Jugador 2");
              this.JugadorTurno("Jugador 2");
            } else {
              this.Ganador("GANASTE "+ "Jugador 3")
              this.JugadorTurno("Jugador 3");
            }
    }

    JugadorTurno(Turno){
        this.add.image(this.cameras.main.centerX, this.cameras.main.centerY-this.cameras.main.centerY/1.15, Turno).setScale(1.5);
        if (Turno == 'Jugador 1') {
          this.add.image(this.cameras.main.centerX*1.11, this.cameras.main.centerY-this.cameras.main.centerY/1.08, "sapo").setScale(0.6);
        } else if (Turno == 'Jugador 2') {
          this.add.image(this.cameras.main.centerX*1.11, this.cameras.main.centerY-this.cameras.main.centerY/1.08, "sapo2").setScale(0.6);
        } else if (Turno == 'Jugador 3'){
          this.add.image(this.cameras.main.centerX*1.11, this.cameras.main.centerY-this.cameras.main.centerY/1.08, "sapo3").setScale(0.6);
        }
      }

      Ganador(Jugador){
        this.add.text(this.cameras.main.centerX*0.5, this.cameras.main.centerY, Jugador.toUpperCase())
        .setStyle({ 
            backgroundColor: '#71af45', fontSize: '60px', 
            //fill: '#000000', 
            fontFamily: 'Arial'
        });
      }
}
