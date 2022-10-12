import Phaser from 'phaser';
import Button from "../js/button.js";

// // Clase Custom, donde se personaliza a los personajes.
export class Creditos extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("Creditos")
    }

    create() {
        // Boton para volver
        this.add.image(this.cameras.main.centerX,
            this.cameras.main.centerY,
                 'custom_bg').setScale(1.1);
        const boton = new Button(this.cameras.main.centerX*0.15,
            this.cameras.main.centerY, 'volver', this, () => {
            // Instrucción para pasar a la escena Play
            this.scene.switch("MainMenu");
        });
        let juan = this.sound.add('juan');
        new Button(this.cameras.main.centerX*0.70, //Juan
             this.cameras.main.centerY*0.50,
              'juanpp', this, () => {
            juan.play();
        });
        let juli = this.sound.add('alan');
        const imgjuli = new Button(this.cameras.main.centerX*1.43, //Juli
             this.cameras.main.centerY*1.20,
             'julipp', this, () => {
            juli.play();
        });
        imgjuli.achicar(0.6);
        let alan = this.sound.add('alan');
        new Button(this.cameras.main.centerX*1.43, //Alan
             this.cameras.main.centerY*0.50,
             'alanpp', this, () => {
            alan.play();
        }); 
        let cabra = this.sound.add('cabra')
        new Button(this.cameras.main.centerX*0.70, //Cabra
        this.cameras.main.centerY*1.20,
             'cabrapp', this, () => {
            cabra.play();
        }); 
    }
}