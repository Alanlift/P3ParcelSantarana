import Phaser from 'phaser';
import Button from "../js/button.js";
import Dice from "../js/dice.js";
import CartaVe from "../js/cartasve.js";
import CartaRo from "../js/cartasro.js";
import CartaAm from "../js/cartasam.js";
//Variables de la escena
let JTurno; //Para que funcione el movimiento
let CTurno; //Para que funcione el score
let proxcas;
let proxcasjg1;
let proxcasjg2;
let proxcasjg3;
let CasRojas;
let CasVerdes;
let CasAmar;
//Scores
let scorejg1;
let scorejg2;
let scorejg3;
let scoretext;
let scoreac;
let sonid4; //Sonido dado d4
let saltotesonido; //Sonido saltote
let sonidorana;
let gameOver = true;
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
    this.physics.add.collider(Casillas, worldLayer); //Ojo acá CASILLAS

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
    this.Casillas = [proxcasjg1, proxcasjg2, proxcasjg3];
    scoreac = 0;
    scorejg1 = 10;
    scorejg2 = 20;
    scorejg3 = 10;
    this.Puntajes = [scorejg1, scorejg2, scorejg3];
    this.Siguiente = [1, 2, 0];
    this.Cartulis = ["1","1","2","3","4","5","6","7","8","9","10","11","12","13","11","15","16",
    "2","3","4","5","6","7","8","9","10","11","12","13","11","15","16","2","3","4","5","6","7","8","9"];
    this.JugadorTurno("Jugador 1");

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
          if (this.Casillas[JTurno] == 0){
            this.posac = this.tablero.findObject("Players", (obj) => obj.type == ('sapo'+[JTurno]));
          } else {
            this.posac = this.tablero.findObject("Objetos", (obj) => obj.type == (this.Casillas[JTurno]).toString());
          }
          let randomNumber = Math.floor(Math.random()*4) + 1;
          this.imprimirD4(randomNumber);
          this.Casillas[JTurno] += randomNumber;
          proxcas = this.Casillas[JTurno];
          
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
            let flechuli = this.add.image(this.posac.x,this.posac.y,'flechuli').setScale(0.1);
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
          if (scoreac>=20 && proxcas+8<=40)
          {
            saltotesonido.play();
            let posac = this.tablero.findObject("Objetos", (obj) => obj.type == (this.Casillas[JTurno]).toString());
            this.Casillas[JTurno] += 8;
            proxcas = this.Casillas[JTurno];
            this.Puntajes[JTurno]-=20;
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
      scoretext = this.add.text(spawnPoint.x*1.05, spawnPoint.y*0.60, "0", { //Texto Score
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
  }

  update() {
    coco -=1;
    this.parallax.setPosition(coco,100);
    if (coco<-3000){
      coco = 4800;
    }
    if (scoreac>=20 && proxcas+8<=40) 
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
          this.CartaRoja(proxcas);
        } else if (proxcas == 1 || proxcas == 4 || proxcas == 7 || proxcas == 10 || proxcas == 13 || proxcas == 16 || proxcas == 19 || proxcas == 22 || proxcas == 25 || proxcas == 28 || proxcas == 31 || proxcas == 34 || proxcas == 37 || proxcas == 40){
          this.CartaVerde(proxcas);
        } else {
          this.CartaAmarilla(proxcas, pos);
        }
      }

    roja(){
      let dado20 = this.d20()
      this.CartasRojas.conseguir().play('dado20anim');
      this.imprimirD20(dado20, 1.65);
      if (dado20 >= 10) {
        this.Puntajes[JTurno]+=10;
      } else {
        this.Puntajes[JTurno]-=10;
      }
      setTimeout(() => {
        scoretext.setText(this.Puntajes[JTurno]);
        this.d20texto.setStyle({backgroundColor: '',fill: "" });
        this.CartasRojas.desaparecer();
        }, 1000);
      scoreac = this.Puntajes[this.Siguiente[JTurno]];
      this.d4texto.setStyle({backgroundColor: '',fill: "" });
      setTimeout(() => {
        this.turno();
        scoretext.setText(scoreac);
        }, 2000);
    }

    verde(){
      this.Puntajes[JTurno]+=5;
      scoretext.setText(this.Puntajes[JTurno]);
      scoreac = this.Puntajes[this.Siguiente[JTurno]];
      this.d4texto.setStyle({backgroundColor: '',fill: "" });
      setTimeout(() => {
        this.turno();
        scoretext.setText(scoreac);
      }, 2000);
    }

    amarilla(proxcas, pos){
      let dado20 = this.d20()
      this.CartasAmarillas.conseguir().play('dado20anim');
      this.imprimirD20(dado20, 1.46);
      if (dado20 >= 8) {
        const numcas = parseInt(proxcas) + 2;
        let casPoint = this.tablero.findObject("Objetos", (obj) => obj.type == (numcas.toString()));
        setTimeout(() => {
          pos.setPosition(casPoint.x+1, casPoint.y+1);
          this.Casillas[JTurno] +=2;
          this.d20texto.setStyle({backgroundColor: '',fill: "" });
          this.CartasAmarillas.desaparecer();
          }, 1000);
      } else {
        const numcas = parseInt(proxcas) - 2;
        let casPoint = this.tablero.findObject("Objetos", (obj) => obj.type == (numcas.toString()));
        setTimeout(() => {
          pos.setPosition(casPoint.x+1, casPoint.y+1);
          this.Casillas[JTurno] -=2;
          this.d20texto.setStyle({backgroundColor: '',fill: "" });
          this.CartasAmarillas.desaparecer();
          }, 1000);
      }
      scoretext.setText(this.Puntajes[JTurno]);
      scoreac = this.Puntajes[this.Siguiente[JTurno]];
      this.d4texto.setStyle({backgroundColor: '',fill: "" });
      setTimeout(() => {
        this.turno();
        scoretext.setText(scoreac);
      }, 2000);
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
      this.BotonDado.activar()
      this.BotonSalto.activar()
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
    //Dados a imprimir
    imprimirD4(DNum){
      setTimeout(() => {
      this.d4texto = this.add.text(this.cameras.main.centerX*1.45, this.cameras.main.centerY*1.72, DNum)
      .setStyle({ 
          backgroundColor: '#a879ff', fontSize: '50px', 
          fontFamily: 'Arial'
      })}, 500);
    }
    imprimirD20(DNum, dimensionY){
      setTimeout(() => {
      this.d20texto = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY*dimensionY, DNum)
      .setStyle({ 
          backgroundColor: '#a879ff', fontSize: '50px', 
          fontFamily: 'Arial'
      })}, 500);
    }
    CartaRoja(NCarta){
      this.CartasRojas = new CartaRo( 
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      this.Cartulis[NCarta],
      this,
      () => {this.roja()})
    }
    CartaAmarilla(NCarta, pos){
      this.CartasAmarillas = new CartaAm( 
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      this.Cartulis[NCarta],
      this,
      () => {this.amarilla(NCarta, pos)},() => { scoreac = this.Puntajes[this.Siguiente[JTurno]],
      scoretext.setText(scoreac), this.d4texto.setStyle({backgroundColor: '',fill: "" }), this.CartasAmarillas.desaparecer(), this.turno()})
    }
    CartaVerde(NCarta){
      new CartaVe( 
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      this.Cartulis[NCarta],
      this,
      () => {this.verde()})
    }
    d20(){
      return Math.floor(Math.random()*20) + 1;
    }
}

