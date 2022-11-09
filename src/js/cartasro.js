class CartaRo {
    fondocarta;
    boton2;
    constructor(x, y, img1, scene, callback1) {
            this.fondocarta = scene.add.image(x, y, img1).setScale(0.5),
            this.boton2 = scene.add.sprite(x*1, y*1.65, 'botonro1').setScale(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.desactivar(callback1));
        }
        desactivar(callback1){
            callback1();
            this.boton2.disableInteractive();
        }
        desaparecer(){
            this.fondocarta.visible = false;
            this.boton2.visible = false;
        }
        conseguir(){
            return this.boton2;
        }
    }
export default CartaRo;