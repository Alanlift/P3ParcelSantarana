// Clase Boton, para no repetir tanto codigo
class Button {
    boton;
    constructor(x, y, img, scene, callback) {
            this.boton = scene.add.image(x, y, img)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.desactivar(callback))
        }
        desactivar(callback){
            callback();
            this.boton.disableInteractive();
            this.boton.alpha = 0.5
            setTimeout(() => {
                this.boton.alpha = 1
                this.boton.setInteractive({ useHandCursor: true })

              }, 3000);
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

export default Button;