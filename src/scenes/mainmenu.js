import Phaser from 'phaser';
import Button from "../js/button.js";
// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class MainMenu extends Phaser.Scene {
    constructor() {
        // Se asigna una key para despues poder llamar a la escena
        super("MainMenu")
    }

    init({ language }){
        this.language = language;
    }

    create() {
        // Boton para comenzar a personalizar
        const botonmenu = this.sound.add('botonmenuson'); 
        this.add.image(this.cameras.main.centerX,
        this.cameras.main.centerY,
             'menu_bg').setScale(1);
        new Button(this.cameras.main.centerX - this.cameras.main.centerX/1.7, //Boton Config
             this.cameras.main.centerY + this.cameras.main.centerY/3, 'config', this,
              () => {
                botonmenu.play(),
                { language: this.language }
                this.scene.switch("Configuracion");
             });
        new Button(this.cameras.main.centerX, //Boton Play
             this.cameras.main.centerY + this.cameras.main.centerY/3, 'play', this, () => {
                this.sound.stopAll(),
                botonmenu.play();
                this.scene.start("Play");
        });
        new Button(this.cameras.main.centerX + this.cameras.main.centerX/1.7, //Boton Creditos
            this.cameras.main.centerY + this.cameras.main.centerY/3, 'credit', this, () => {
                botonmenu.play(),
                this.scene.start("Creditos");
        });
    }
}