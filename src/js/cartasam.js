class CartaAm {
    boton;
    boton2;
    boton3;
    constructor(x, y, img1, scene, callback1, callback2) {
            this.boton = scene.add.image(x, y, img1).setScale(0.5),
            this.boton2 = scene.add.image(x*1, y*1.46, 'botonam1').setScale(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.desactivar(callback1)),
            this.boton3 = scene.add.image(x*1, y*1.66, 'botonam2').setScale(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.desactivar(callback2))
        }
        desactivar(callback1){
            callback1();
            this.boton.visible = false;
            this.boton2.visible = false;
            this.boton3.visible = false;
        }
    }

export default CartaAm;