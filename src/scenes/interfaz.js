import Phaser from 'phaser'
import CartaVe from "../js/cartasve.js";
import CartaRo from "../js/cartasro.js";
import CartaAm from "../js/cartasam.js";
import compartirInstancia from './EventCenter.js';
import { CARTA1, CARTA10, CARTA11, CARTA12, CARTA13, CARTA15, CARTA16, CARTA2, CARTA3, CARTA4, CARTA5, CARTA6, CARTA7, CARTA8, CARTA9 } from '../enums/cartastexto';
import { getPhrase } from '../services/traducciones.js';
let scoreText;
let CTurno;

export class Interfaz extends Phaser.Scene {
	constructor() {
	  // Se asigna una key para despues poder llamar a la escena
	  super("Interfaz")
	}
	preload() {
		this.load.tilemapTiledJSON("tablero", "assets/tilemaps/tablero.json");
	}

	create(){
		this.carta1sonido = this.sound.add('carta1son');
		this.carta2sonido = this.sound.add('carta2son');
		this.cartabiensonido = this.sound.add('cartabienson');
		this.cartamalsonido = this.sound.add('cartamalson');
		this.tablero = this.make.tilemap({ key: "tablero"});
		let spawnPoint = this.tablero.findObject("Botones", (obj) => obj.name == ('Score'));
		this.Cartulis = ["1","1","2","3","4","5","6","7","8","9","10","11","12","13","11","15","16",
		"2","3","4","5","6","7","8","9","10","11","12","13","11","15","16","2","3","4","5","6","7","8","9","10"];
		this.CartulisTexto = ["1",CARTA1,CARTA2,CARTA3,CARTA4,CARTA5,CARTA6,CARTA7,CARTA8,CARTA9,CARTA10,CARTA11,CARTA12,CARTA13,"1",CARTA15,CARTA16];
		CTurno = 'Jugador 1';
		this.Puntajes = [0, 0, 0];
		this.Turnos = [['0','Jugador 1'],['1','Jugador 2'],['2','Jugador 3']]
		this.Siguiente = [1, 2, 0];
		this.JugadorTurno("Jugador 1", "0");
		compartirInstancia.on('casillaRoja',  this.CartaRoja, this);
		compartirInstancia.on('casillaVerde', this.CartaVerde, this);
		compartirInstancia.on('casillaAmarilla', this.CartaAmarilla, this);
		compartirInstancia.on('cambiarPuntaje', (valor, posicion)=>{ this.Puntajes[posicion] -= valor})
		CTurno = 'Jugador 1';
		compartirInstancia.on('imprimirD4', this.imprimirD4, this);
		scoreText = this.add.text(spawnPoint.x*1.05, spawnPoint.y*0.7, "0", { //Texto Score
		fontSize: "36px",
		// @ts-ignore
		fill: "#000000",
		fontFamily: 'Century Gothic'
	  	});
	}
//Cartas impresión
	CartaRoja(NCarta, JTurno){
		this.carta1sonido.play()
		this.CartasRojas = new CartaRo( 
		this.cameras.main.centerX,
		this.cameras.main.centerY,
		this.Cartulis[NCarta],
		this.CartulisTexto[this.Cartulis[NCarta]],
		this,
		() => {this.roja(JTurno)})
	  }
	  CartaAmarilla(NCarta, pos, JTurno){
		this.carta2sonido.play()
		this.CartasAmarillas = new CartaAm( 
		this.cameras.main.centerX,
		this.cameras.main.centerY,
		this.Cartulis[NCarta],
		this.CartulisTexto[this.Cartulis[NCarta]],
		this,
		() => {this.amarilla(NCarta, pos, JTurno)},() => { compartirInstancia.emit('actualizarPuntaje', this.Puntajes[this.Siguiente[JTurno]]),
		scoreText.setText(this.Puntajes[this.Siguiente[JTurno]]),
		this.d4texto.setStyle({backgroundColor: '',fill: "" }), this.CartasAmarillas.desaparecer(), this.turno(JTurno)})
	  }
	  CartaVerde(NCarta, JTurno){
		this.carta2sonido.play()
		new CartaVe( 
		this.cameras.main.centerX,
		this.cameras.main.centerY,
		this.Cartulis[NCarta],
		this.CartulisTexto[this.Cartulis[NCarta]],
		this,
		() => {this.verde(JTurno)})
	  }
//Funcionamiento de cartas
	  roja(JTurno){
		let dado20 = this.d20()
		this.CartasRojas.conseguir().play('dado20anim');
		this.imprimirD20(dado20, 1.01, 1.65);
		if (dado20 >= 10) {
			setTimeout(() => {this.cartabiensonido.play();}, 1000);
			this.Puntajes[JTurno]+=10;
		} else {
			setTimeout(() => {this.cartamalsonido.play();}, 1000);
		  	this.Puntajes[JTurno]-=10;
		}
		setTimeout(() => {
		  scoreText.setText(this.Puntajes[JTurno]);
		  this.d20texto.setStyle({backgroundColor: '',fill: "" });
		  this.CartasRojas.desaparecer();
		  }, 1000);
		  compartirInstancia.emit('actualizarPuntaje', this.Puntajes[this.Siguiente[JTurno]]);
		this.d4texto.setStyle({backgroundColor: '',fill: "" });
		setTimeout(() => {
		  this.turno(JTurno);
		  scoreText.setText(this.Puntajes[this.Siguiente[JTurno]]);
		  }, 2000);
	  }
  
	  verde(JTurno){
		this.cartabiensonido.play();
		this.Puntajes[JTurno]+=5;
		scoreText.setText(this.Puntajes[JTurno]);
		compartirInstancia.emit('actualizarPuntaje', this.Puntajes[this.Siguiente[JTurno]]);
		this.d4texto.setStyle({backgroundColor: '',fill: "" });
		setTimeout(() => {
		  this.turno(JTurno);
		  scoreText.setText(this.Puntajes[this.Siguiente[JTurno]]);
		}, 2000);
	  }
  
	  amarilla(proxcas, pos, JTurno){
		let dado20 = this.d20()
		this.CartasAmarillas.conseguir().play('dado20anim');
		this.imprimirD20(dado20, 1, 1.45);
		if (dado20 >= 8) {
		  	setTimeout(() => {
				this.cartabiensonido.play();
				compartirInstancia.emit('avanceAmarilla')
				this.d20texto.setStyle({backgroundColor: '',fill: "" });
				this.CartasAmarillas.desaparecer();
			}, 1000);
		} else {
		  	setTimeout(() => {
				this.cartamalsonido.play();
				compartirInstancia.emit('retrocesoAmarilla');
				this.d20texto.setStyle({backgroundColor: '',fill: "" });
				this.CartasAmarillas.desaparecer();
			}, 1000);
		}
		scoreText.setText(this.Puntajes[JTurno]);
		compartirInstancia.emit('actualizarPuntaje', this.Puntajes[this.Siguiente[JTurno]]);
		this.d4texto.setStyle({backgroundColor: '',fill: "" });
		setTimeout(() => {
		  this.turno(JTurno);
		  scoreText.setText(this.Puntajes[this.Siguiente[JTurno]]);
		}, 2000);
	  }

	  turno(JTurno){
		CTurno = this.Turnos[this.Siguiente[JTurno]][1]
		JTurno = this.Turnos[this.Siguiente[JTurno]][0]
		this.JugadorTurno(CTurno, JTurno);
		compartirInstancia.emit('activarBotones');
		compartirInstancia.emit('actualizarTurno', JTurno);
	  }

	      //Textos
		  JugadorTurno(TurnoText, Turno){
			this.add.image(this.cameras.main.centerX, this.cameras.main.centerY-this.cameras.main.centerY/1.15, getPhrase(TurnoText)).setScale(0.18);
			this.add.image(this.cameras.main.centerX*1.11, this.cameras.main.centerY-this.cameras.main.centerY/1.08, "sapo"+Turno).setScale(0.06);
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
		  imprimirD20(DNum, dimensionX, dimensionY){
			setTimeout(() => {
			this.d20texto = this.add.text(this.cameras.main.centerX*dimensionX, this.cameras.main.centerY*dimensionY, DNum)
			.setStyle({ 
				backgroundColor: '#a879ff', fontSize: '50px', 
				fontFamily: 'Century Gothic'
			})
			this.d20texto.setOrigin(0.5)}, 500);
		  }
		  //Calculo del dado
		  d20(){
			return Math.floor(Math.random()*20) + 1;
		  }
}
