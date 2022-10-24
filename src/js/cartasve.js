class CartaVe {
    boton;
    constructor(x, y, img1, scene, callback) {
            this.boton = scene.add.image(x, y, img1).setScale(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.desactivar(callback))
        }
        desactivar(callback){
            callback();
            this.boton.visible = false;
        }
    }

export default CartaVe;