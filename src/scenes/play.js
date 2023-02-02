import Phaser from 'phaser';
import Button from "../js/button.js";
import Dice from "../js/dice.js";
import compartirInstancia from './EventCenter.js';
import CartaVe from "../js/cartasve.js";
import CartaRo from "../js/cartasro.js";
import CartaAm from "../js/cartasam.js";
//Variables de la escena
let JTurno; //Para que funcione el movimiento
let proxcas;
let casillasTiled;
//Scores
let scoretext;
let puntajeAc;
let sonid4; //Sonido dado d4
let saltotesonido; //Sonido saltote
let sonidorana;
let coco = 4800;
export class Play extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Play");
  }
  preload() {
      this.load.tilemapTiledJSON("tablero", "assets/tilemaps/tablero.json");
      this.load.image("tilesBelow", "assets/images/tablero_bg.png");
      //this.load.image("tilesPlatform", "public/assets/images/platformas.png");
      this.events.emit('averga', this.papu);
      const gameplay = this.scene.get('Interfaz');

  }

  create() {
    this.papu = 0;

    this.parallax = this.add.image(coco, 100, 'nubes_bg');
    const animaciones = [["desfrog", "sfrog","saltote1","dessaltote1"],
    ["tpfrog2", "destpfrog2", "saltote2", "dessaltote2"],
    ["tpfrog3", "destpfrog3", "saltote3", "dessaltote3"]];
    const tp1son= this.sound.add('tp1son');
    const tp2son= this.sound.add('tp2son');
    const tp3son= this.sound.add('tp3son');
    const sonidoanimaciones = [tp1son, tp2son, tp3son];
    this.tablero = this.make.tilemap({ key: "tablero"});
    const tilesetBelow = this.tablero.addTilesetImage(
      "tablero_bg",
      "tilesBelow"
    );
    //const tilesetPlatform = tablero.addTilesetImage(
      //"plataformas",
      //"tilesPlatform"
    //);

    const worldLayer = this.tablero.createLayer("Fondo", tilesetBelow, 0, 0);
    //const worldLayer = tablero.createLayer("CasillaRoja", tilesetPlatform, 0, 0);
    const objectsLayer = this.tablero.getObjectLayer("Objetos");

    //worldLayer.setCollisionByProperty({ collides: true });

    // The players and its settings
    let spawnPoint = this.tablero.findObject("Players", (obj) => obj.name === "sapo2");
    let player3 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "sapo2").setScale(0.1);
    spawnPoint = this.tablero.findObject("Players", (obj) => obj.name === "sapo1");
    let player2 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "sapo1").setScale(0.1);
    spawnPoint = this.tablero.findObject("Players", (obj) => obj.name === "sapo0");
    let player1 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "sapo0").setScale(0.1);
    player1.setCollideWorldBounds(true);
    player2.setCollideWorldBounds(true);
    player3.setCollideWorldBounds(true);
    let Players = [player1, player2, player3];
    //console.log(Players);
    
    //Parte físicas de casillas

    casillasTiled = this.physics.add.group();
    objectsLayer.objects.forEach((objData) => {
      const { x = 0, y = 0, name, type } = objData;
      switch (name) {
        case "CasAmar": {
          let Amar = casillasTiled.create(x, y, "vacio");
          Amar.setBounceY(0);
          break;
        }
        case "CasVerdes": {
          let Verde = casillasTiled.create(x, y, "vacio");
          Verde.setBounceY(0);
          break;
        }
        case "CasRojas": {
          let Rojas = casillasTiled.create(x, y, "vacio");
          Rojas.setBounceY(0);
          Rojas.set
          break;
        }
      }
    });
    //let Casillas = [CasRojas, CasVerdes, CasAmar];

    //Agregamos collider con el tablero
    this.physics.add.collider(Players, worldLayer);
    this.physics.add.collider(casillasTiled, worldLayer); //Ojo acá CASILLAS

    //Agregamos overlap las casillas
    //this.physics.add.overlap(Players, Casillas, this.Casilla(proxcas), null, this);
    //this.physics.add.overlap(Players, CasRojas, this.roja, null, this);
    //this.physics.add.overlap(Players, CasVerdes, this.verde, null, this);
    //this.physics.add.overlap(Players, CasAmar, this.amarilla, null, this);
    

    JTurno = 0;
    proxcas = 0;
    this.Proxcasjg = [0, 0, 0];
    puntajeAc = 0;
    this.Turnos = [['0','Jugador 1'],['1','Jugador 2'],['2','Jugador 3']]
    compartirInstancia.on('actualizarPuntaje', (Puntajes)=>{puntajeAc = Puntajes, console.log(puntajeAc)})
    compartirInstancia.on('actualizarTurno', (Turno)=>{JTurno = this.Turnos[Turno][0]})
    this.Siguiente = [1, 2, 0];

    spawnPoint = this.tablero.findObject("Botones", (obj) => obj.name == ('Dado'));
    this.BotonDado = new Dice( //Lanzar Dado
      spawnPoint.x,
      spawnPoint.y,
      "dadoicon",
      this,
      () => {
          this.BotonSalto.detener()
          this.BotonDado.conseguir().play('dadoanim');
          sonid4.play();
          sonidorana.play();
          if (this.Proxcasjg[JTurno] == 0){
            console.log(this.Proxcasjg[JTurno]);
            this.Posac = this.tablero.findObject("Players", (obj) => obj.type == ('sapo'+[JTurno]));
          } else {
            console.log(this.Proxcasjg[JTurno]);
            this.Posac = this.tablero.findObject("Objetos", (obj) => obj.type == (this.Proxcasjg[JTurno]).toString());
          }
          let randomNumber = Math.floor(Math.random()*4) + 1;
          compartirInstancia.emit("imprimirD4", randomNumber);
          //this.imprimirD4(randomNumber);
          this.Proxcasjg[JTurno] += randomNumber;
          proxcas = this.Proxcasjg[JTurno];
          console.log(proxcas);

          if (proxcas>=41) {
            let casPoint = this.tablero.findObject("Objetos", (obj) => obj.type === "41");
            setTimeout(() => {
              Players[JTurno].setPosition(casPoint.x+1, casPoint.y+1);
            }, 2000);
            setTimeout(() => {
              this.sound.stopAll(),
              this.scene.start("Victoria", { JTurno: JTurno });
            }, 3000);
            
          } else {
            let flechuli = this.add.image(this.Posac.x,this.Posac.y,'flechuli').setScale(0.1);
            let casPoint = this.tablero.findObject("Objetos", (obj) => obj.type == (proxcas));
            setTimeout(() => {
              flechuli.setPosition(casPoint.x,casPoint.y);
            }, 500);
            
            setTimeout(() => {
              Players[JTurno].play(animaciones[JTurno][0]);
              sonidoanimaciones[JTurno].play();
            }, 500);
            setTimeout(() => {
              flechuli.visible = false;
              Players[JTurno].setPosition(casPoint.x+1, casPoint.y+1);
              Players[JTurno].play(animaciones[JTurno][1]);
            }, 1000);
            setTimeout(() => {
              Players[JTurno].stop();
              this.Casilla(proxcas, Players[JTurno]);
              Players[JTurno].setTexture('sapo'+ JTurno);
              this.BotonDado.conseguir().stop();
              this.BotonDado.cambiar('dadoicon');
            }, 1500);
          }
      });
      this.BotonDado.achicar(0.2);
      spawnPoint = this.tablero.findObject("Botones", (obj) => obj.name == ('Saltote'));
      this.BotonSalto = new Dice( //Lanzar saltote
      spawnPoint.x,
      spawnPoint.y,
      'saltote',
      this,
      () => {
          if (puntajeAc>=20 && proxcas+8<=40)
          {
            saltotesonido.play();
            let posac = this.tablero.findObject("Objetos", (obj) => obj.type == (this.Proxcasjg[JTurno]).toString());
            this.Proxcasjg[JTurno] += 8;
            proxcas = this.Proxcasjg[JTurno];
            compartirInstancia.emit('cambiarPuntaje', 20, JTurno);
            //this.Puntajes[JTurno]-=20;
            let casPoint = this.tablero.findObject("Objetos", (obj) => obj.type == (proxcas));
            setTimeout(() => {
              Players[JTurno].setPosition(posac.x+1, posac.y*0.9);
              Players[JTurno].play(animaciones[JTurno][2]);
              sonidoanimaciones[JTurno].play();
            }, 1000);
            setTimeout(() => {
              Players[JTurno].setPosition(casPoint.x+1, casPoint.y*0.9);
              Players[JTurno].play(animaciones[JTurno][3]);
            }, 2000);
            setTimeout(() => {
              Players[JTurno].setPosition(casPoint.x+1, casPoint.y+1);
              Players[JTurno].stop();
              this.Casilla(proxcas, Players[JTurno]);
              Players[JTurno].setTexture('sapo'+ JTurno);
            }, 3000);
          }
        });
        this.BotonSalto.achicar(0.12);

      spawnPoint = this.tablero.findObject("Botones", (obj) => obj.name == ('Score'));
      this.add.sprite(spawnPoint.x, spawnPoint.y, 'ContMoscas').setScale(0.2);
      // scoretext = this.add.text(spawnPoint.x*1.05, spawnPoint.y*0.60, "0", { //Texto Score
      //   fontSize: "36px",
      //   // @ts-ignore
      //   fill: "#000000",
      //   fontFamily: 'Century Gothic'   
      // });

    new Button( //Opciones
        this.cameras.main.centerX/8,
        this.cameras.main.centerY - this.cameras.main.centerY/1.2,
      "tuerca",
      this,
      () => {
        this.scene.sleep('Interfaz');
        this.scene.switch("Opcion");
      });
     
    spawnPoint = this.tablero.findObject("Botones", (obj) => obj.name == ('Ayuda'));
    new Button( //Ayuda
    spawnPoint.x, spawnPoint.y,
       "ayuda",
      this,
      () => {
          this.scene.sleep('Interfaz');
          this.scene.switch('Ayuda');
      });
    
    spawnPoint = this.tablero.findObject("Botones", (obj) => obj.name == ('Humo'));
    const humo = this.add.sprite(spawnPoint.x, spawnPoint.y,'vacio').setScale(0.5);
    humo.play('humoanim');

    //Sonidos
      sonid4 = this.sound.add('dado');
      saltotesonido = this.sound.add('saltotesonido');
      sonidorana = this.sound.add('sonidorana');
      let musica = this.sound.add('tematab',{loop: true})
      musica.play();
      this.scene.run('Interfaz');

      compartirInstancia.on('retrocesoAmarilla', ()=>{
        const numcas = parseInt(proxcas) - 2;
        let casPoint = this.tablero.findObject("Objetos", (obj) => obj.type == (numcas.toString()));
        Players[JTurno].setPosition(casPoint.x+1, casPoint.y+1);
        this.Proxcasjg[JTurno] -=2;})

      compartirInstancia.on('avanceAmarilla', ()=>{
        const numcas = parseInt(proxcas) + 2;
        let casPoint = this.tablero.findObject("Objetos", (obj) => obj.type == (numcas.toString()));
        Players[JTurno].setPosition(casPoint.x+1, casPoint.y+1);
        this.Proxcasjg[JTurno] +=2;})

        compartirInstancia.on('activarBotones', ()=>{
          this.BotonDado.activar()
		      this.BotonSalto.activar()
        })
  }

  update() {
    coco -=1;
    this.parallax.setPosition(coco,100);
    if (coco<-3000){
      coco = 4800;
    }
    if (puntajeAc>=20 && proxcas+8<=40) 
      {
        this.BotonSalto.conseguir().play('saltoteanim');
      } else {
        this.BotonSalto.conseguir().stop();
        this.BotonSalto.cambiar('saltote');
      }
  }
    //Funciones

    Casilla(proxcas, pos){
        if (proxcas == 3 || proxcas == 6 || proxcas == 9 || proxcas == 12 || proxcas == 15 || proxcas == 18  || proxcas == 21 || proxcas == 24 || proxcas == 27 || proxcas == 30 || proxcas == 33 || proxcas == 36 || proxcas == 39){
          compartirInstancia.emit('casillaRoja', proxcas, JTurno)
          //this.CartaRoja(proxcas);
        } else if (proxcas == 1 || proxcas == 4 || proxcas == 7 || proxcas == 10 || proxcas == 13 || proxcas == 16 || proxcas == 19 || proxcas == 22 || proxcas == 25 || proxcas == 28 || proxcas == 31 || proxcas == 34 || proxcas == 37 || proxcas == 40){
          compartirInstancia.emit('casillaVerde', proxcas, JTurno)
          //this.CartaVerde(proxcas);
        } else {
          compartirInstancia.emit('casillaAmarilla', proxcas, pos, JTurno)
          //this.CartaAmarilla(proxcas, pos);
        }
      }
  
    //Dados a imprimir
    imprimirD4(DNum){
      setTimeout(() => {
      this.d4texto = this.add.text(this.cameras.main.centerX*1.45, this.cameras.main.centerY*1.72, DNum)
      .setStyle({ 
          backgroundColor: '#a879ff', fontSize: '50px', 
          fontFamily: 'Century Gothic'
      })}, 500);
    }
    imprimirD20(DNum, dimensionY){
      setTimeout(() => {
      this.d20texto = this.add.text(this.cameras.main.centerX*0.984, this.cameras.main.centerY*dimensionY, DNum)
      .setStyle({ 
          backgroundColor: '#a879ff', fontSize: '50px', 
          fontFamily: 'Century Gothic'
      })}, 500);
    }

    //Calculo del dado
    d20(){
      return Math.floor(Math.random()*20) + 1;
    }
}
