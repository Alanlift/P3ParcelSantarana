import { getPhrase } from "../services/traducciones";

class CartaVe {
    boton;
    constructor(x, y, img1, texto, scene, callback) {
            this.boton = scene.add.image(x, y, img1).setScale(0.5)
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => this.desactivar(callback)),
            (this.texto = scene.add
              .text(x * 1, y * 1.3, getPhrase(texto))
              .setStyle({ 
                backgroundColor: '#571d05', 
                fontSize: '30px', 
                fill: '#000000', 
                align: "center",
                fontFamily: 'Century Gothic',
            }));
            this.texto.setOrigin(0.5);
            
        }
        desactivar(callback){
            callback();
            this.boton.visible = false;
            this.texto.visible = false;
        }
    }

export default CartaVe;