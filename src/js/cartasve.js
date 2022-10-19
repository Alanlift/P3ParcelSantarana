class CartaVe {
    boton;
    constructor(x, y, img1, scene, callback1) {
            this.boton = scene.add.image(x, y, img1).setScale(0.5).setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.desactivar(callback1))
        }
        desactivar(callback1){
            callback1();
            this.boton.visible = false;
        }
    }

export default CartaVe;