import Button from "../js/buttonfont.js";
import { getPhrase } from "../services/traducciones.js";
import compartirInstancia from './EventCenter.js';
// Clase Opcion, donde se cambia el idioma del juego
export class Opcion extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Opcion")
    }

    create() {
        const musica = this.sound.add('temamen',{loop: true})
        const botonmenu = this.sound.add('botonmenuson');
        this.add.image(this.cameras.main.centerX,
            this.cameras.main.centerY,
               'creditos_bg');
        this.add.text(this.cameras.main.centerX,this.cameras.main.centerY/1.3, getPhrase('¿Desea salir?'))
        .setOrigin(0.5)
        .setStyle({ 
            fontSize: '200px', fill: '#571d05',
            fontFamily: 'Century Gothic', align: "center"});
        const botonsi = new Button(this.cameras.main.centerX*1.3, //Salir
             this.cameras.main.centerY + this.cameras.main.centerY/2.2,
              getPhrase('Si'), this, () => {
            // Instrucción volver a la escena Menu
            this.sound.stopAll();
            compartirInstancia.removeAllListeners();
            this.scene.stop('Interfaz');
            this.scene.stop('Play');
            this.scene.start("MainMenu");
            botonmenu.play();
            musica.play();
        });
        botonsi.style().setStyle({fontSize: '150px'});
        const botonno = new Button(this.cameras.main.centerX/1.5, //Volver
             this.cameras.main.centerY + this.cameras.main.centerY/2.2,
              'No', this, () => {
            // Instrucción volver a la escena Play
            botonmenu.play();
            this.scene.wake('Interfaz');
            this.scene.switch("Play");
        }); 
        botonno.style().setStyle({fontSize: '150px'});
    }
}