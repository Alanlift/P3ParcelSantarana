// Clase Boton, para no repetir tanto codigo
class Dice {
    boton;
    constructor(x, y, img, scene, callback) {
            this.boton = scene.add.sprite(x, y, img)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.desactivar(callback))
        }
        desactivar(callback){
            callback();
            this.boton.disableInteractive();
            setTimeout(() => {
                //this.boton.alpha = 1
                this.boton.setInteractive({ useHandCursor: true })
              }, 3000);
              //this.boton.alpha = 0.5
        }
        achicar(valor){
            this.boton.setScale(valor);
        }
        detener(){
            this.boton.disableInteractive();
        }
        cambiar(img2){
            this.boton.setTexture(img2);
        }
        conseguir(){
            return this.boton;
        }
    }

export default Dice;