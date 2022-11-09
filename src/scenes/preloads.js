// Clase Preloads, para separar los peloads y tener mejor orden
import Phaser from 'phaser';
export class Preloads extends Phaser.Scene {
  // Se extiende de Phaser.Scene porque es una escena
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Preloads");
  }

  preload() {
    //Sonidos
    this.load.audio('dado','assets/sounds/Dado.mp3');
    this.load.audio('saltotesonido','assets/sounds/saltotesonido.mp3');
    this.load.audio('sonidorana','assets/sounds/sonidorana.mp3');
    this.load.audio('tematab','assets/sounds/CancionTablero.mp3');
    this.load.audio('temamen','assets/sounds/CancionMenu.mp3');
    this.load.audio('victoria','assets/sounds/victoria.wav');
    this.load.audio('alan','assets/sounds/alansonido.mp3');
    this.load.audio('cabra','assets/sounds/cabrasonido.mp3');
    this.load.audio('juan','assets/sounds/juansonido.mp3');
    this.load.audio('botonmenuson','assets/sounds/boton_de_menu.wav');
    this.load.audio('tp1son','assets/sounds/TP_1.wav');
    this.load.audio('tp2son','assets/sounds/TP_2.wav');
    this.load.audio('tp3son','assets/sounds/TP_3.wav');
    //Fotos
    this.load.image('alanpp','assets/images/alanpp.png');
    this.load.image('juanpp','assets/images/juanpp.png');
    this.load.image('cabrapp','assets/images/cabrapp.png');
    this.load.image('julipp','assets/images/julipp.png');
    //Backgrounds
    this.load.image('carga_bg','assets/images/carga_bg.png');
    this.load.image('menu_bg','assets/images/menu_bg.png');
    this.load.image('custom_bg','assets/images/custom_bg.png');
    this.load.image('tablero_bg','assets/images/tablero_bg.png');
    this.load.image('tablero_blur','assets/images/tablero_blur.png');
    this.load.image('ayuda_bg','assets/images/ayuda_bg.png');
    this.load.image('ayuda2_bg','assets/images/ayuda2_bg.png');
    this.load.image('nubes_bg','assets/images/nubes.png');
    this.load.image('victoria_bg','assets/images/victoria_bg.png');
    //Casilla y pjs
    this.load.image('sapo0','assets/images/sapojg1.png');
    this.load.image('sapo1','assets/images/sapojg2.png');
    this.load.image('sapo2','assets/images/sapojg3.png');
    this.load.spritesheet("despawn", "assets/images/sapodespawn.png", {
      frameWidth: 1125,
      frameHeight: 834,
    });
    this.load.spritesheet("spawn", "assets/images/sapospawn.png", {
      frameWidth: 1125,
      frameHeight: 834,
    });
    this.load.spritesheet("destp", "assets/images/sapo2destp.png", {
      frameWidth: 1125,
      frameHeight: 834,
    });
    this.load.spritesheet("tp", "assets/images/sapo2tp.png", {
      frameWidth: 1125,
      frameHeight: 834,
    });
    this.load.spritesheet("tp3", "assets/images/sapo3tp.png", {
      frameWidth: 1125,
      frameHeight: 834,
    });
    this.load.spritesheet("victoriafinal", "assets/images/victoriafinal.png", {
      frameWidth: 1000,
      frameHeight: 1000,
    });
    this.load.spritesheet("dado4animazao", "assets/images/dado4animazao.png", {
      frameWidth: 1000,
      frameHeight: 1000,
    });
    this.load.spritesheet("dado20animazao", "assets/images/dado20animazao.png", {
      frameWidth: 1000,
      frameHeight: 1000,
    });
    this.load.spritesheet('saltoteanimazao','assets/images/saltote2.png',{
    frameWidth: 1600,
    frameHeight: 800,
    });
    this.load.spritesheet('elsaltote1','assets/images/sapo1saltote.png',{
      frameWidth: 1069,
      frameHeight: 2427,
    });
    this.load.spritesheet('elsaltote2','assets/images/sapo2saltote.png',{
      frameWidth: 1069,
      frameHeight: 2427,
    });
    this.load.spritesheet('elsaltote3','assets/images/sapo3saltote.png',{
      frameWidth: 1069,
      frameHeight: 2427,
    });
    this.load.spritesheet("humoanimazao", "assets/images/humoanimazao.png", {
      frameWidth: 701,
      frameHeight: 397,
    });

    this.load.image('vacio','assets/images/casillerovacio.png') //Vacio tuki
    //Botones
    this.load.image('ayuda','assets/images/ayuda.png');
    this.load.image('play','assets/images/play.png');
    this.load.image('volver','assets/images/volver.png');
    this.load.image('config','assets/images/configuracion.png');
    this.load.image('credit','assets/images/creditos.png');
    this.load.image('saltote','assets/images/saltote.png');
    this.load.image('dadoicon','assets/images/dado1.png');
    this.load.image('dado20icon','assets/images/dado20.png');
    this.load.image('dadoclick','assets/images/dado2.png');
    this.load.image('tuerca','assets/images/tuerca.png');
    //HUD
    this.load.image('Jugador 1','assets/images/turno1.png');
    this.load.image('Jugador 2','assets/images/turno2.png');
    this.load.image('Jugador 3','assets/images/turno3.png');
    this.load.image('ContMoscas','assets/images/moscas.png');
    this.load.image('flechuli','assets/images/flecha.png');
    //Cartas
    this.load.image('1','assets/images/cartas/Verde1.png');
    this.load.image('2','assets/images/cartas/Amarilla1.png');
    this.load.image('3','assets/images/cartas/Roja1.png');
    this.load.image('4','assets/images/cartas/Verde2.png');
    this.load.image('5','assets/images/cartas/Amarilla2.png');
    this.load.image('6','assets/images/cartas/Roja2.png');
    this.load.image('7','assets/images/cartas/Verde3.png');
    this.load.image('8','assets/images/cartas/Amarilla3.png');
    this.load.image('9','assets/images/cartas/Roja3.png');
    this.load.image('10','assets/images/cartas/Verde4.png');
    this.load.image('11','assets/images/cartas/Amarilla4.png');
    this.load.image('12','assets/images/cartas/Roja4.png');
    this.load.image('13','assets/images/cartas/Verde5.png');
    this.load.image('15','assets/images/cartas/Roja5.png');
    this.load.image('16','assets/images/cartas/Verde5.png');
    //BotonesCartas
    this.load.image('botonam1','assets/images/cartas/Boton1Amarilla.png');
    this.load.image('botonam2','assets/images/cartas/Boton2Amarilla.png');
    this.load.image('botonro1','assets/images/cartas/Boton1Rojo.png');
  }

  create() {
    // Se agrega img de fondo
    let musica = this.sound.add('temamen',{loop: true})
    this.add.image(this.cameras.main.centerX,
    this.cameras.main.centerY,
       'carga_bg').setScale(0.5);
    this.add.text(this.cameras.main.centerX,
      this.cameras.main.centerY + this.cameras.main.centerY/1.5, 'Cargando...')
       .setOrigin(0.5)
       .setPadding(10)
       .setStyle({ 
           backgroundColor: '#0000', 
           fontSize: '60px', 
           fill: '#6c4600', 
           fontFamily: 'Arial'
       })
      //this.player = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'despawn'); sale animazao
      this.anims.create({key:"desfrog", frames: this.anims.generateFrameNumbers("despawn", {start:0, end:6}), duration: 1000, repeat:0})
      this.anims.create({key:"sfrog", frames: this.anims.generateFrameNumbers("spawn", {start:0, end:6}), duration: 1000, repeat:0})
      this.anims.create({key:"saltote1", frames: this.anims.generateFrameNumbers("elsaltote1", {start:9, end:0}), duration: 500, repeat:0})
      this.anims.create({key:"dessaltote1", frames: this.anims.generateFrameNumbers("elsaltote1", {start:0, end:9}), duration: 500, repeat:0})
      this.anims.create({key:"saltote2", frames: this.anims.generateFrameNumbers("elsaltote2", {start:9, end:0}), duration: 500, repeat:0})
      this.anims.create({key:"dessaltote2", frames: this.anims.generateFrameNumbers("elsaltote2", {start:0, end:9}), duration: 500, repeat:0})
      this.anims.create({key:"saltote3", frames: this.anims.generateFrameNumbers("elsaltote3", {start:9, end:0}), duration: 500, repeat:0})
      this.anims.create({key:"dessaltote3", frames: this.anims.generateFrameNumbers("elsaltote3", {start:0, end:9}), duration: 500, repeat:0})
      this.anims.create({key:"tpfrog2", frames: this.anims.generateFrameNumbers("tp", {start:0, end:10}), duration: 1000, repeat:0})
      this.anims.create({key:"destpfrog2", frames: this.anims.generateFrameNumbers("destp", {start:0, end:10}), duration: 1000, repeat:0})
      this.anims.create({key:"tpfrog3", frames: this.anims.generateFrameNumbers("tp3", {start:0, end:10}), duration: 1000, repeat:0})
      this.anims.create({key:"destpfrog3", frames: this.anims.generateFrameNumbers("tp3", {start:10, end:0}), duration: 1000, repeat:0})
      this.anims.create({key:"victoriarda", frames: this.anims.generateFrameNumbers("victoriafinal", {start:0, end:10}), duration: 2000, repeat:-1})
      this.anims.create({key:"dadoanim", frames: this.anims.generateFrameNumbers("dado4animazao", {start:0, end:4}), duration: 500, repeat:0})
      this.anims.create({key:"dado20anim", frames: this.anims.generateFrameNumbers("dado20animazao", {start:0, end:4}), duration: 500, repeat:0})
      this.anims.create({key:"saltoteanim", frames: this.anims.generateFrameNumbers("saltoteanimazao", {start:0, end:1}), duration: 2000, repeat:-1})
      this.anims.create({key:"humoanim", frames: this.anims.generateFrameNumbers("humoanimazao", {start:0, end:1}), duration: 1000, repeat:-1})
      // Se agrega un timer y luego a la escena del menú principal
    setTimeout(() => {
      this.scene.start("MainMenu");
      musica.play();
    }, 3000);
  }
  update(){
  }
}
