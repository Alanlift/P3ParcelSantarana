import Phaser from 'phaser';
import Button from "../js/button.js";
import CartaVe from "../js/cartasve.js";
import CartaRo from "../js/cartasro.js";
import CartaAm from "../js/cartasam.js";
//Variables de la escena
var JTurno; //Para que funcione el movimiento
var CTurno; //Para que funcione el score
var proxcas;
var proxcasjg1;
var proxcasjg2;
var proxcasjg3;
var CasRojas;
var CasVerdes;
var CasAmar;
//Scores
var scorejg1;
var scorejg2;
var scorejg3;
var scoretext;
var scoreac;
var XD;
var sonid4; //Sonido dado d4
var saltotesonido; //Sonido saltote
var sonidorana;
var gameOver;
let coco = 4800;
let player;
// Clase Play, donde se crean todos los sprites, el escenario del juego y se inicializa y actualiza toda la logica del juego.
export class Play extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("Play");
  }

  
  preload() {
      this.load.tilemapTiledJSON("tablero", "assets/tilemaps/tablero.json");
      this.load.image("tilesBelow", "assets/images/tablero_bg.png");
      //this.load.image("tilesPlatform", "public/assets/images/platformas.png");
  }

  create() {
    this.parallax = this.add.image(coco, 100, 'nubes_bg');
    let animaciones = [["desfrog", "sfrog"],["tpfrog2","destpfrog2"],["tpfrog3","destpfrog2"]];
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

    // The player1 and its settings
    let spawnPoint = this.tablero.findObject("Players", (obj) => obj.name === "sapo0");
    let player1 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "sapo0").setScale(0.1);
    spawnPoint = this.tablero.findObject("Players", (obj) => obj.name === "sapo1");
    let player2 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "sapo1").setScale(0.1);
    spawnPoint = this.tablero.findObject("Players", (obj) => obj.name === "sapo2");
    let player3 = this.physics.add.sprite(spawnPoint.x, spawnPoint.y, "sapo2").setScale(0.1);
    player1.setCollideWorldBounds(true);
    player2.setCollideWorldBounds(true);
    player3.setCollideWorldBounds(true);
    let Players = [player1, player2, player3];
    //console.log(Players);
    
    //Parte físicas de casillas
    CasRojas = this.physics.add.group();
    objectsLayer.objects.forEach((objData) => {
      const { x = 0, y = 0, name, type } = objData;
      switch (name) {
        case "CasRojas": {
          let Rojas = CasRojas.create(x, y, "vacio");
          Rojas.setBounceY(0);
          Rojas.set
          break;
        }
      }
    });

    CasVerdes = this.physics.add.group();
    objectsLayer.objects.forEach((objData) => {
      const { x = 0, y = 0, name, type } = objData;
      switch (name) {
        case "CasVerdes": {
          let Verde = CasVerdes.create(x, y, "vacio");
          Verde.setBounceY(0);
          break;
        }
      }
    });

    CasAmar = this.physics.add.group();
    objectsLayer.objects.forEach((objData) => {
      const { x = 0, y = 0, name, type } = objData;
      switch (name) {
        case "CasAmar": {
          let Amar = CasAmar.create(x, y, "vacio");
          Amar.setBounceY(0);
          break;
        }
      }
    });
    CasRojas.name = "CasRojas";
    CasVerdes.name = "CasVerdes";
    CasAmar.name = "CasAmar";
    let Casillas = [CasRojas, CasVerdes, CasAmar];
    //Agregamos collider con el tablero
    this.physics.add.collider(Players, worldLayer);
    this.physics.add.collider(Casillas, worldLayer);

    //Agregamos overlap las casillas
    //this.physics.add.overlap(Players, Casillas, this.Casilla(proxcas), null, this);
    //this.physics.add.overlap(Players, CasRojas, this.roja, null, this);
    //this.physics.add.overlap(Players, CasVerdes, this.verde, null, this);
    //this.physics.add.overlap(Players, CasAmar, this.amarilla, null, this);
    

    JTurno = 0;
    CTurno = 'Jugador 1';
    proxcas = 0;
    proxcasjg1 = 0;
    proxcasjg2 = 0;
    proxcasjg3 = 0;
    this.JugadorTurno("Jugador 1");

    spawnPoint = this.tablero.findObject("Botones", (obj) => obj.name == ('Dado'));
    let BotonDado = new Button( //Lanzar Dado
      spawnPoint.x,
      spawnPoint.y,
      "dadoicon",
      this,
      () => {
          sonid4.play();
          sonidorana.play();
          let randomNumber = Math.floor(Math.random()*4) + 1;
          this.Dado(randomNumber);
          if (JTurno == '0') {
            proxcasjg1 += randomNumber;
            proxcas = proxcasjg1;
          } else if (JTurno == '1') {
            proxcasjg2 += randomNumber;
            proxcas = proxcasjg2;
          } else {
            proxcasjg3 += randomNumber;
            proxcas = proxcasjg3;
          }
          
          if (proxcas>=41) {
            let casPoint = this.tablero.findObject("Objetos", (obj) => obj.type === "41");
            setTimeout(() => {
              Players[JTurno].setPosition(casPoint.x+1, casPoint.y+1);
            }, 2000);
            setTimeout(() => {
              this.sound.stopAll(),
              this.scene.start("Victoria", { JTurno: JTurno });
            }, 3000);
            
            
            gameOver = true;
          } else {
            XD = 1;
            let casPoint = this.tablero.findObject("Objetos", (obj) => obj.type == (proxcas));
            Players[JTurno].play(animaciones[JTurno][0]);
            setTimeout(() => {
              Players[JTurno].setPosition(casPoint.x+1, casPoint.y+1);
              Players[JTurno].play(animaciones[JTurno][1]);
            }, 1000);
            //this.Carta(proxcas);
            setTimeout(() => {
              Players[JTurno].stop();
              this.Casilla(proxcas, Players[JTurno]);
              Players[JTurno].setTexture('sapo'+ JTurno);
            }, 2000);
          }
      });
      BotonDado.achicar(0.2);
      
      spawnPoint = this.tablero.findObject("Botones", (obj) => obj.name == ('Saltote'));
      this.BotonSalto = new Button( //Lanzar saltote
      spawnPoint.x,
      spawnPoint.y,
      'saltote',
      this,
      () => {
        if (JTurno == '0') {
          proxcas = proxcasjg1;
        } else if (JTurno == '1') {
          proxcas = proxcasjg2;
        } else {
          proxcas = proxcasjg3;
        }
          if (scoreac>=20 && proxcas+8<40)
          {
            saltotesonido.play();
              if (JTurno == '0') {
              proxcasjg1 += 8;
              proxcas = proxcasjg1;
              scorejg1-=20;
            } else if (JTurno == '1') {
              proxcasjg2 += 8;
              proxcas = proxcasjg2;
              scorejg2-=20;
            } else {
              proxcasjg3 += 8;
              proxcas = proxcasjg3;
              scorejg3-=20;
            }
            XD = 1;
            var casPoint = this.tablero.findObject("Objetos", (obj) => obj.type == (proxcas));
            setTimeout(() => {
              Players[JTurno].setPosition(casPoint.x+1, casPoint.y+1)
              this.Casilla(proxcas);
            }, 3000);
        }
        });
        this.BotonSalto.achicar(0.12);

      scorejg1 = 300;
      scorejg2 = 300;
      scorejg3 = 300;
      scoreac = 30;

      spawnPoint = this.tablero.findObject("Botones", (obj) => obj.name == ('Score'));
      this.add.sprite(spawnPoint.x, spawnPoint.y, 'ContMoscas').setScale(0.2);
      scoretext = this.add.text(spawnPoint.x*1.05, spawnPoint.y*0.60, "", { //Texto Score
        fontSize: "36px",
        // @ts-ignore
        fill: "#000000",
        fontFamily: 'Arial'
      });

    new Button( //Opciones
        this.cameras.main.centerX/8,
        this.cameras.main.centerY - this.cameras.main.centerY/1.2,
      "tuerca",
      this,
      () => {
        this.scene.switch("Opcion");
      });
     
    spawnPoint = this.tablero.findObject("Botones", (obj) => obj.name == ('Ayuda'));
    new Button( //Ayuda
    spawnPoint.x, spawnPoint.y,
       "ayuda",
      this,
      () => {
        this.scene.switch("Ayuda");
      });

      sonid4 = this.sound.add('dado');
      saltotesonido = this.sound.add('saltotesonido');
      sonidorana = this.sound.add('sonidorana');
      let musica = this.sound.add('tematab',{loop: true})
      musica.play();
      gameOver = false;
  }

  update() {
    coco -=1;
    this.parallax.setPosition(coco,100);
    if (coco<-3000){
      coco = 4800;
    }
    if (scoreac>=20)
    {
      this.BotonSalto.cambiar('saltote2');
      } else {
        this.BotonSalto.cambiar('saltote');
      }
  }
    //Funciones

    Casilla(proxcas, pos){
        if (proxcas == 3 || proxcas == 6 || proxcas == 9 || proxcas == 12 || proxcas == 15 || proxcas == 18  || proxcas == 21 || proxcas == 24 || proxcas == 27 || proxcas == 30 || proxcas == 33 || proxcas == 36 || proxcas == 39){
          this.CartaRoja(proxcas);
        } else if (proxcas == 1 || proxcas == 4 || proxcas == 7 || proxcas == 10 || proxcas == 13 || proxcas == 16 || proxcas == 19 || proxcas == 22 || proxcas == 25 || proxcas == 28 || proxcas == 31 || proxcas == 34 || proxcas == 37 || proxcas == 40){
          this.CartaVerde(proxcas);
        } else {
          this.CartaAmarilla(proxcas, pos);
        }
      }

    roja(){
      if (XD == 1) {
        if (CTurno == 'Jugador 1') {
          scorejg1 += 10;
          scoreac = scorejg2;
          XD +=1;
        } else if (CTurno == 'Jugador 2') {
          scorejg2 += 10;
          scoreac = scorejg3;
          XD +=1;
        } else if (CTurno == 'Jugador 3'){
          scorejg3 += 10;
          scoreac = scorejg1;
          XD +=1;
        }
        this.turno();
        scoretext.setText(scoreac);
      }
    }

    verde(){
      if (XD == 1) {
        if (CTurno == 'Jugador 1') {
          scorejg1 += 5;
          scoreac = scorejg2;
          XD +=1;
        } else if (CTurno == 'Jugador 2') {
          scorejg2 += 5;
          scoreac = scorejg3;
          XD +=1;
        } else if (CTurno == 'Jugador 3'){
          scorejg3 += 5;
          scoreac = scorejg1;
          XD +=1;
        }
        this.turno();
        scoretext.setText(scoreac);
      }
    }

    amarilla(proxcas, pos){
      if (this.d20() >= 8) {
        if (CTurno == 'Jugador 1') {
          const numcas = parseInt(proxcas) + 2;
          let casPoint = this.tablero.findObject("Objetos", (obj) => obj.type == (numcas.toString()));
          pos.setPosition(casPoint.x+1, casPoint.y+1);
        } else if (CTurno == 'Jugador 2') {
          const numcas = parseInt(proxcas) + 2;
          let casPoint = this.tablero.findObject("Objetos", (obj) => obj.type == (numcas.toString()));
          pos.setPosition(casPoint.x+1, casPoint.y+1);
        } else if (CTurno == 'Jugador 3'){
          const numcas = parseInt(proxcas) + 2;
          let casPoint = this.tablero.findObject("Objetos", (obj) => obj.type == (numcas.toString()));
          pos.setPosition(casPoint.x+1, casPoint.y+1);
          scoreac = scorejg1;
        }
      } else {
        const numcas = parseInt(proxcas) - 2;
        let casPoint = this.tablero.findObject("Objetos", (obj) => obj.type == (numcas.toString()));
        pos.setPosition(casPoint.x+1, casPoint.y+1);
      }
      this.turno();
      scoretext.setText(scoreac);
    }

    turno(){
      if (JTurno == '0') {
        JTurno = '1';
        CTurno = 'Jugador 2';
        this.JugadorTurno(CTurno);
      } else if (JTurno == '1') {
        JTurno = '2';
        CTurno = 'Jugador 3';
        this.JugadorTurno(CTurno);
      } else if (JTurno == '2'){
        JTurno = '0';
        CTurno = 'Jugador 1';
        this.JugadorTurno(CTurno);
      }
    }

    //Textos
    JugadorTurno(Turno){
      this.add.image(this.cameras.main.centerX, this.cameras.main.centerY-this.cameras.main.centerY/1.15, Turno).setScale(0.18);
      if (Turno == 'Jugador 1') {
        this.add.image(this.cameras.main.centerX*1.11, this.cameras.main.centerY-this.cameras.main.centerY/1.08, "sapo0").setScale(0.06);
      } else if (Turno == 'Jugador 2') {
        this.add.image(this.cameras.main.centerX*1.11, this.cameras.main.centerY-this.cameras.main.centerY/1.08, "sapo1").setScale(0.06);
      } else if (Turno == 'Jugador 3'){
        this.add.image(this.cameras.main.centerX*1.11, this.cameras.main.centerY-this.cameras.main.centerY/1.08, "sapo2").setScale(0.06);
      }
      
    }

    Dado(DNum){
      this.add.text(this.cameras.main.centerX*1.55, this.cameras.main.centerY*1.8, DNum)
      .setStyle({ 
          backgroundColor: '#71af45', fontSize: '50px', 
          fill: '#000000', 
          fontFamily: 'Arial'
      });
    }
    CartaRoja(NCarta){
      new CartaRo( //carta?
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      '3',
      this,
      () => {this.roja()})
    }
    CartaAmarilla(NCarta, pos){
      new CartaAm( //carta?
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      '2',
      this,
      () => {this.amarilla(NCarta, pos)},() => { this.turno();
      scoretext.setText(scoreac)})
    }
    CartaVerde(NCarta){
      new CartaVe( //carta?
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      '1',
      this,
      () => {this.verde()})
    }
    d20(){
      return Math.floor(Math.random()*20) + 1;
    }
}

