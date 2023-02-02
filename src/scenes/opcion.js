import Button from "../js/buttonfont.js";

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
               'tablero_blur').setScale(1);
        const botonsi = new Button(this.cameras.main.centerX*1.3, //Salir
             this.cameras.main.centerY + this.cameras.main.centerY/2.2,
              'Si', this, () => {
            // Instrucción volver a la escena Menu
            this.sound.stopAll();
            const interfaz = this.scene.get('Interfaz');
            this.scene.restart(interfaz); //Tiro restart debido a que por el run la escena se bugea y no para de tirar dados
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