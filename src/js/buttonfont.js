// Clase Boton, para no repetir tanto codigo
class ButtonFont {
    constructor(x, y, label, scene, callback) {
        this.button = scene.add.text(x, y, label)
            .setOrigin(0.5)
            .setPadding(10)
            .setStyle({ 
                backgroundColor: '#571d05', 
                fontSize: '50px', 
                fill: '#000000', 
                fontFamily: 'Century Gothic'
            })
            .setInteractive({ useHandCursor: true })
            .on('pointerdown', () => callback())
            .on('pointerover', () => this.button.setStyle({ fill: '#667a00' }))
            .on('pointerout', () => this.button.setStyle({ fill: '#000000' }));
    }
        style(){
            return this.button
        }
}

export default ButtonFont;