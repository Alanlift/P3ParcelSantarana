parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jt7N":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"E66h":[function(require,module,exports) {
var define;
var process = require("process");
var global = arguments[3];
},{"process":"jt7N"}],"prAY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Preloads=void 0;var a=e(require("phaser"));function e(a){return a&&a.__esModule?a:{default:a}}function s(a){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function t(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function o(a,e){for(var s=0;s<e.length;s++){var t=e[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}function i(a,e,s){return e&&o(a.prototype,e),s&&o(a,s),Object.defineProperty(a,"prototype",{writable:!1}),a}function n(a,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),e&&r(a,e)}function r(a,e){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,e){return a.__proto__=e,a})(a,e)}function g(a){var e=m();return function(){var s,t=u(a);if(e){var o=u(this).constructor;s=Reflect.construct(t,arguments,o)}else s=t.apply(this,arguments);return l(this,s)}}function l(a,e){if(e&&("object"===s(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(a)}function d(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}function u(a){return(u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}var p=function(e){n(o,a.default.Scene);var s=g(o);function o(){return t(this,o),s.call(this,"Preloads")}return i(o,[{key:"preload",value:function(){this.load.audio("dado","assets/sounds/Dado.mp3"),this.load.audio("saltotesonido","assets/sounds/saltotesonido.mp3"),this.load.audio("sonidorana","assets/sounds/sonidorana.mp3"),this.load.audio("tematab","assets/sounds/CancionTablero.mp3"),this.load.audio("temamen","assets/sounds/CancionMenu.mp3"),this.load.audio("victoria","assets/sounds/victoria.mp3"),this.load.audio("alan","assets/sounds/alansonido.mp3"),this.load.audio("cabra","assets/sounds/cabrasonido.mp3"),this.load.audio("juan","assets/sounds/juansonido.mp3"),this.load.image("alanpp","assets/images/alanpp.png"),this.load.image("juanpp","assets/images/juanpp.png"),this.load.image("cabrapp","assets/images/cabrapp.png"),this.load.image("julipp","assets/images/julipp.png"),this.load.image("carga_bg","assets/images/carga_bg.png"),this.load.image("menu_bg","assets/images/menu_bg.png"),this.load.image("custom_bg","assets/images/custom_bg.png"),this.load.image("tablero_bg","assets/images/tablero_bg.png"),this.load.image("tablero_blur","assets/images/tablero_blur.png"),this.load.image("ayuda_bg","assets/images/ayuda_bg.png"),this.load.image("nubes_bg","assets/images/nubes.png"),this.load.image("sapo","assets/images/sapojg1.png"),this.load.image("sapo2","assets/images/sapojg2.png"),this.load.image("sapo3","assets/images/sapojg3.png"),this.load.spritesheet("despawn","assets/images/sapodespawn.png",{frameWidth:1125,frameHeight:834}),this.load.spritesheet("spawn","assets/images/sapospawn.png",{frameWidth:1125,frameHeight:834}),this.load.image("vacio","assets/images/casillerovacio.png"),this.load.image("ayuda","assets/images/ayuda.png"),this.load.image("play","assets/images/play.png"),this.load.image("volver","assets/images/volver.png"),this.load.image("config","assets/images/configuracion.png"),this.load.image("credit","assets/images/creditos.png"),this.load.image("saltote","assets/images/saltote.png"),this.load.image("saltote2","assets/images/saltote2.png"),this.load.image("dadoicon","assets/images/dado1.png"),this.load.image("dadoclick","assets/images/dado2.png"),this.load.image("tuerca","assets/images/tuerca.png"),this.load.image("Jugador 1","assets/images/turno1.png"),this.load.image("Jugador 2","assets/images/turno2.png"),this.load.image("Jugador 3","assets/images/turno3.png"),this.load.image("ContMoscas","assets/images/moscas.png"),this.load.image("1","assets/images/cartas/Verde1.png"),this.load.image("2","assets/images/cartas/Amarilla1.png"),this.load.image("3","assets/images/cartas/Roja1.png"),this.load.image("4","assets/images/cartas/Verde2.png"),this.load.image("botonam1","assets/images/cartas/Boton1Amarilla.png"),this.load.image("botonam2","assets/images/cartas/Boton2Amarilla.png"),this.load.image("botonro1","assets/images/cartas/Boton1Rojo.png"),this.load.video("final","assets/images/omglf.mp4")}},{key:"create",value:function(){var a=this,e=this.sound.add("temamen",{loop:!0});this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"carga_bg").setScale(.5),this.add.text(this.cameras.main.centerX,this.cameras.main.centerY+this.cameras.main.centerY/1.5,"Cargando...").setOrigin(.5).setPadding(10).setStyle({backgroundColor:"#0000",fontSize:"60px",fill:"#6c4600",fontFamily:"Arial"}),this.anims.create({key:"desfrog",frames:this.anims.generateFrameNumbers("despawn",{start:0,end:6}),duration:1e3,repeat:0}),this.anims.create({key:"sfrog",frames:this.anims.generateFrameNumbers("spawn",{start:0,end:6}),duration:1e3,repeat:0}),setTimeout(function(){a.scene.start("MainMenu"),e.play()},3e3)}},{key:"update",value:function(){}}]),o}();exports.Preloads=p;
},{"phaser":"E66h"}],"yyDo":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(n,r,a,i,u){var c=this;e(this,t),o(this,"boton",void 0),this.boton=i.add.image(n,r,a).setInteractive({useHandCursor:!0}).on("pointerdown",function(){return c.desactivar(u)})}return n(t,[{key:"desactivar",value:function(e){var t=this;e(),this.boton.disableInteractive(),setTimeout(function(){t.boton.alpha=1,t.boton.setInteractive({useHandCursor:!0})},3e3),this.boton.alpha=.5}},{key:"achicar",value:function(e){this.boton.setScale(e)}},{key:"detener",value:function(){this.boton.disableInteractive()}},{key:"cambiar",value:function(e){this.boton.setTexture(e)}}]),t}(),a=r;exports.default=a;
},{}],"lSM7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.MainMenu=void 0;var e=n(require("phaser")),t=n(require("../js/button.js"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=p();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(n){a(i,e.default.Scene);var r=s(i);function i(){return o(this,i),r.call(this,"MainMenu")}return c(i,[{key:"create",value:function(){var e=this;this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"menu_bg").setScale(1),new t.default(this.cameras.main.centerX-this.cameras.main.centerX/1.7,this.cameras.main.centerY+this.cameras.main.centerY/3,"config",this,function(){e.scene.switch("Creditos")}),new t.default(this.cameras.main.centerX,this.cameras.main.centerY+this.cameras.main.centerY/3,"play",this,function(){e.sound.stopAll(),e.scene.start("Play")}),new t.default(this.cameras.main.centerX+this.cameras.main.centerX/1.7,this.cameras.main.centerY+this.cameras.main.centerY/3,"credit",this,function(){e.scene.switch("Creditos")})}}]),i}();exports.MainMenu=m;
},{"phaser":"E66h","../js/button.js":"yyDo"}],"iSvj":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Creditos=void 0;var e=n(require("phaser")),t=n(require("../js/button.js"));function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}function u(e,t){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=p();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(n){c(i,e.default.Scene);var r=s(i);function i(){return o(this,i),r.call(this,"Creditos")}return a(i,[{key:"create",value:function(){var e=this;this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"custom_bg").setScale(1.1);new t.default(.15*this.cameras.main.centerX,this.cameras.main.centerY,"volver",this,function(){e.scene.switch("MainMenu")});var n=this.sound.add("juan");new t.default(.7*this.cameras.main.centerX,.5*this.cameras.main.centerY,"juanpp",this,function(){n.play()});var r=this.sound.add("alan");new t.default(1.43*this.cameras.main.centerX,1.2*this.cameras.main.centerY,"julipp",this,function(){r.play()}).achicar(.6);var o=this.sound.add("alan");new t.default(1.43*this.cameras.main.centerX,.5*this.cameras.main.centerY,"alanpp",this,function(){o.play()});var i=this.sound.add("cabra");new t.default(.7*this.cameras.main.centerX,1.2*this.cameras.main.centerY,"cabrapp",this,function(){i.play()})}}]),i}();exports.Creditos=d;
},{"phaser":"E66h","../js/button.js":"yyDo"}],"bv0Z":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var o=function(){function t(n,o,i,a,u){var c=this;e(this,t),r(this,"boton",void 0),this.boton=a.add.image(n,o,i).setScale(.5).setInteractive({useHandCursor:!0}).on("pointerdown",function(){return c.desactivar(u)})}return n(t,[{key:"desactivar",value:function(e){e(),this.boton.visible=!1}}]),t}(),i=o;exports.default=i;
},{}],"uy1L":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=function(){function t(n,r,i,a,u){var s=this;e(this,t),o(this,"boton",void 0),o(this,"boton2",void 0),this.boton=a.add.image(n,r,i).setScale(.5),this.boton2=a.add.image(1*n,1.275*r,"botonro1").setScale(.5).setInteractive({useHandCursor:!0}).on("pointerdown",function(){return s.desactivar(u)})}return n(t,[{key:"desactivar",value:function(e){e(),this.boton.visible=!1,this.boton2.visible=!1}}]),t}(),i=r;exports.default=i;
},{}],"kgSp":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function n(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function t(n,i,r,a,s,u){var c=this;e(this,t),o(this,"boton",void 0),o(this,"boton2",void 0),o(this,"boton3",void 0),this.boton=a.add.image(n,i,r).setScale(.5),this.boton2=a.add.image(.93*n,1.455*i,"botonam1").setScale(.5).setInteractive({useHandCursor:!0}).on("pointerdown",function(){return c.desactivar(s)}),this.boton3=a.add.image(1.29*n,1.455*i,"botonam2").setScale(.5).setInteractive({useHandCursor:!0}).on("pointerdown",function(){return c.desactivar(u)})}return n(t,[{key:"desactivar",value:function(e){e(),this.boton.visible=!1,this.boton2.visible=!1,this.boton3.visible=!1}}]),t}(),r=i;exports.default=r;
},{}],"aHgZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Play=void 0;var e,t,a,o,n,r,i,s,c,u,d,l,f,h,y,m,p,b,v,g,j=T(require("phaser")),J=T(require("../js/button.js")),O=T(require("../js/cartasve.js")),x=T(require("../js/cartasro.js")),w=T(require("../js/cartasam.js"));function T(e){return e&&e.__esModule?e:{default:e}}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function B(e,t,a){return t&&P(e.prototype,t),a&&P(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function k(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Y(e,t)}function Y(e,t){return(Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=X();return function(){var a,o=E(e);if(t){var n=E(this).constructor;a=Reflect.construct(o,arguments,n)}else a=o.apply(this,arguments);return R(this,a)}}function R(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return A(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q,M=4800,V=function(v){k(S,j.default.Scene);var T=_(S);function S(){return C(this,S),T.call(this,"Play")}return B(S,[{key:"preload",value:function(){this.load.tilemapTiledJSON("tablero","assets/tilemaps/tablero.json"),this.load.image("tilesBelow","assets/images/tablero_bg.png")}},{key:"create",value:function(){var v=this;this.parallax=this.add.image(M,100,"nubes_bg");var j=this.make.tilemap({key:"tablero"}),O=j.addTilesetImage("tablero_bg","tilesBelow"),x=j.createLayer("Fondo",O,0,0),w=j.getObjectLayer("Objetos"),T=j.findObject("Players",function(e){return"sapo1"===e.name}),S=this.physics.add.sprite(T.x,T.y,"sapo").setScale(.1);T=j.findObject("Players",function(e){return"sapo2"===e.name});var C=this.physics.add.sprite(T.x,T.y,"sapo2");T=j.findObject("Players",function(e){return"sapo3"===e.name});var P=this.physics.add.sprite(T.x,T.y,"sapo3");S.setCollideWorldBounds(!0),C.setCollideWorldBounds(!0),P.setCollideWorldBounds(!0);var B=[S,C,P];i=this.physics.add.group(),w.objects.forEach(function(e){var t=e.x,a=void 0===t?0:t,o=e.y,n=void 0===o?0:o,r=e.name;e.type;switch(r){case"CasRojas":var s=i.create(a,n,"vacio");s.setBounceY(0),s.set}}),s=this.physics.add.group(),w.objects.forEach(function(e){var t=e.x,a=void 0===t?0:t,o=e.y,n=void 0===o?0:o,r=e.name;e.type;switch(r){case"CasVerdes":s.create(a,n,"vacio").setBounceY(0)}}),c=this.physics.add.group(),w.objects.forEach(function(e){var t=e.x,a=void 0===t?0:t,o=e.y,n=void 0===o?0:o,r=e.name;e.type;switch(r){case"CasAmar":c.create(a,n,"vacio").setBounceY(0)}}),i.name="CasRojas",s.name="CasVerdes",c.name="CasAmar";var k=[i,s,c];this.physics.add.collider(B,x),this.physics.add.collider(k,x),e=0,t="Jugador 1",a=0,o=0,n=0,r=0,this.JugadorTurno("Jugador 1"),T=j.findObject("Botones",function(e){return"Dado"==e.name}),new J.default(T.x,T.y,"dadoicon",this,function(){m.play(),b.play();var t=Math.floor(4*Math.random())+1;if(v.Dado(t),"0"==e?(v.JugadorTurno("Jugador 2"),a=o+=t):"1"==e?(v.JugadorTurno("Jugador 3"),a=n+=t):(v.JugadorTurno("Jugador 1"),a=r+=t),a>=41){var i=j.findObject("Objetos",function(e){return"41"===e.type});setTimeout(function(){B[e].setPosition(i.x+1,i.y+1)},2e3),setTimeout(function(){v.sound.stopAll(),v.scene.start("Victoria",{JTurno:e})},3e3),g=!0}else{y=1;var s=j.findObject("Objetos",function(e){return e.type==a});B[e].play("desfrog"),setTimeout(function(){B[e].setPosition(s.x+1,s.y+1),B[e].play("sfrog")},1e3),setTimeout(function(){B[e].stop(),v.Casilla(a),B[e].setTexture("sapo")},2e3)}}).achicar(.2),T=j.findObject("Botones",function(e){return"Saltote"==e.name}),this.BotonSalto=new J.default(T.x,T.y,"saltote",this,function(){if(a="0"==e?o:"1"==e?n:r,h>=20&&a+8<40){p.play(),"0"==e?(v.JugadorTurno("Jugador 2"),a=o+=8,u-=20):"1"==e?(v.JugadorTurno("Jugador 3"),a=n+=8,d-=20):(v.JugadorTurno("Jugador 1"),a=r+=8,l-=20),y=1;var t=j.findObject("Objetos",function(e){return e.type==a});setTimeout(function(){B[e].setPosition(t.x+1,t.y+1),v.Casilla(a)},3e3)}}),this.BotonSalto.achicar(.12),u=30,d=30,l=30,h=30,T=j.findObject("Botones",function(e){return"Score"==e.name}),this.add.sprite(T.x,T.y,"ContMoscas").setScale(.2),f=this.add.text(1.05*T.x,.6*T.y,"",{fontSize:"36px",fill:"#000000",fontFamily:"Arial"}),new J.default(this.cameras.main.centerX/8,this.cameras.main.centerY-this.cameras.main.centerY/1.2,"tuerca",this,function(){v.scene.switch("Opcion")}),T=j.findObject("Botones",function(e){return"Ayuda"==e.name}),new J.default(T.x,T.y,"ayuda",this,function(){v.scene.switch("Ayuda")}),m=this.sound.add("dado"),p=this.sound.add("saltotesonido"),b=this.sound.add("sonidorana"),this.sound.add("tematab",{loop:!0}).play(),g=!1}},{key:"update",value:function(){M-=1,this.parallax.setPosition(M,100),M<-3e3&&(M=4800),h>=20?this.BotonSalto.cambiar("saltote2"):this.BotonSalto.cambiar("saltote")}},{key:"Casilla",value:function(e){3==e||6==e||9==e||12==e||15==e||18==e||21==e||24==e||27==e||30==e||33==e||36==e||39==e?this.CartaRoja(e):1==e||4==e||7==e||10==e||13==e||16==e||19==e||22==e||25==e||28==e||31==e||34==e||37==e||40==e?this.CartaVerde(e):this.CartaAmarilla(e)}},{key:"roja",value:function(){1==y&&("Jugador 1"==t?(u+=10,h=d,y+=1):"Jugador 2"==t?(d+=10,h=l,y+=1):"Jugador 3"==t&&(l+=10,h=u,y+=1),this.turno(),f.setText(h))}},{key:"verde",value:function(){1==y&&("Jugador 1"==t?(u+=5,h=d,y+=1):"Jugador 2"==t?(d+=5,h=l,y+=1):"Jugador 3"==t&&(l+=5,h=u,y+=1),this.turno(),f.setText(h))}},{key:"amarilla",value:function(){1==y&&("Jugador 1"==t?(u-=10,h=d,y+=1):"Jugador 2"==t?(d-=10,h=l,y+=1):"Jugador 3"==t&&(l-=10,h=u,y+=1),this.turno(),f.setText(h))}},{key:"turno",value:function(){"0"==e?(e="1",t="Jugador 2"):"1"==e?(e="2",t="Jugador 3"):"2"==e&&(e="0",t="Jugador 1")}},{key:"JugadorTurno",value:function(e){this.add.image(this.cameras.main.centerX,this.cameras.main.centerY-this.cameras.main.centerY/1.15,e).setScale(.18),"Jugador 1"==e?this.add.image(1.11*this.cameras.main.centerX,this.cameras.main.centerY-this.cameras.main.centerY/1.08,"sapo").setScale(.06):"Jugador 2"==e?this.add.image(1.11*this.cameras.main.centerX,this.cameras.main.centerY-this.cameras.main.centerY/1.08,"sapo2").setScale(.6):"Jugador 3"==e&&this.add.image(1.11*this.cameras.main.centerX,this.cameras.main.centerY-this.cameras.main.centerY/1.08,"sapo3").setScale(.6)}},{key:"Dado",value:function(e){this.add.text(1.55*this.cameras.main.centerX,1.8*this.cameras.main.centerY,e).setStyle({backgroundColor:"#71af45",fontSize:"50px",fill:"#000000",fontFamily:"Arial"})}},{key:"CartaRoja",value:function(e){var t=this;new x.default(this.cameras.main.centerX,this.cameras.main.centerY,e,this,function(){t.roja()})}},{key:"CartaAmarilla",value:function(e){var t=this;new w.default(this.cameras.main.centerX,this.cameras.main.centerY,e,this,function(){t.amarilla()},function(){t.turno(),f.setText(h)})}},{key:"CartaVerde",value:function(e){var t=this;new O.default(this.cameras.main.centerX,this.cameras.main.centerY,e,this,function(){t.verde()})}}]),S}();exports.Play=V;
},{"phaser":"E66h","../js/button.js":"yyDo","../js/cartasve.js":"bv0Z","../js/cartasro.js":"uy1L","../js/cartasam.js":"kgSp"}],"v2vv":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Ayuda=void 0;var t=e(require("../js/button.js"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}function c(t,e){return(c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=s();return function(){var r,n=y(t);if(e){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return f(this,r)}}function f(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return l(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(e){i(o,Phaser.Scene);var r=a(o);function o(){return n(this,o),r.call(this,"Ayuda")}return u(o,[{key:"preload",value:function(){this.load.tilemapTiledJSON("tablero","public/assets/tilemaps/tablero.json")}},{key:"create",value:function(){var e=this,r=this.make.tilemap({key:"tablero"}).findObject("Botones",function(t){return"Ayuda"==t.name});this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"ayuda_bg").setScale(1);new t.default(r.x,r.y,"ayuda",this,function(){e.scene.switch("Play")})}}]),o}();exports.Ayuda=p;
},{"../js/button.js":"yyDo"}],"AV9U":[function(require,module,exports) {
"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=t(function e(t,r,o,i,a){n(this,e);var l=i.add.text(t,r,o).setOrigin(.5).setPadding(10).setStyle({backgroundColor:"#71af45",fontSize:"50px",fill:"#000000",fontFamily:"Arial"}).setInteractive({useHandCursor:!0}).on("pointerdown",function(){return a()}).on("pointerover",function(){return l.setStyle({fill:"#667a00"})}).on("pointerout",function(){return l.setStyle({fill:"#000000"})})}),o=r;exports.default=o;
},{}],"viH1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Opcion=void 0;var t=e(require("../js/buttonfont.js"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function a(t){var e=l();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return s(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,Phaser.Scene);var n=a(o);function o(){return r(this,o),n.call(this,"Opcion")}return i(o,[{key:"create",value:function(){var e=this,n=this.sound.add("temamen",{loop:!0});this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"tablero_blur").setScale(1),new t.default(1.3*this.cameras.main.centerX,this.cameras.main.centerY+this.cameras.main.centerY/2.2,"Si",this,function(){e.sound.stopAll(),e.scene.start("MainMenu"),n.play()}),new t.default(this.cameras.main.centerX/1.5,this.cameras.main.centerY+this.cameras.main.centerY/2.2,"No",this,function(){e.scene.switch("Play")})}}]),o}();exports.Opcion=y;
},{"../js/buttonfont.js":"AV9U"}],"bML9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Victoria=void 0;var e,t=n(require("phaser")),r=n(require("../js/button.js"));function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=p();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(r){u(o,t.default.Scene);var n=f(o);function o(){return a(this,o),n.call(this,"Victoria")}return c(o,[{key:"init",value:function(t){e=t.JTurno}},{key:"create",value:function(){this.video=this.add.video(this.cameras.main.centerX,this.cameras.main.centerY,"final"),this.video.play(),this.sound.add("victoria").play(),"0"==e?(this.Ganador("GANASTE Jugador 1"),this.JugadorTurno("Jugador 1")):"1"==e?(this.Ganador("GANASTE Jugador 2"),this.JugadorTurno("Jugador 2")):(this.Ganador("GANASTE Jugador 3"),this.JugadorTurno("Jugador 3"))}},{key:"JugadorTurno",value:function(e){this.add.image(this.cameras.main.centerX,this.cameras.main.centerY-this.cameras.main.centerY/1.15,e).setScale(.18),"Jugador 1"==e?this.add.image(1.11*this.cameras.main.centerX,this.cameras.main.centerY-this.cameras.main.centerY/1.08,"sapo").setScale(.6):"Jugador 2"==e?this.add.image(1.11*this.cameras.main.centerX,this.cameras.main.centerY-this.cameras.main.centerY/1.08,"sapo2").setScale(.6):"Jugador 3"==e&&this.add.image(1.11*this.cameras.main.centerX,this.cameras.main.centerY-this.cameras.main.centerY/1.08,"sapo3").setScale(.6)}},{key:"Ganador",value:function(e){this.add.text(.5*this.cameras.main.centerX,this.cameras.main.centerY,e.toUpperCase()).setStyle({backgroundColor:"#71af45",fontSize:"60px",fontFamily:"Arial"})}}]),o}();exports.Victoria=y;
},{"phaser":"E66h","../js/button.js":"yyDo"}],"QvaY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=c(require("phaser")),r=require("../scenes/preloads.js"),s=require("../scenes/mainmenu.js"),a=require("../scenes/creditos.js"),i=require("../scenes/play.js"),t=require("../scenes/ayuda.js"),u=require("../scenes/opcion.js"),d=require("../scenes/victoria.js");function c(e){return e&&e.__esModule?e:{default:e}}var n={type:e.default.AUTO,width:1600,height:960,scale:{mode:e.default.Scale.FIT,autoCenter:e.default.Scale.CENTER_BOTH,min:{width:1024,height:576},max:{width:1920,height:1080}},physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}},scene:[r.Preloads,s.MainMenu,a.Creditos,i.Play,u.Opcion,t.Ayuda,d.Victoria]},o=new e.default.Game(n);exports.default=o;
},{"phaser":"E66h","../scenes/preloads.js":"prAY","../scenes/mainmenu.js":"lSM7","../scenes/creditos.js":"iSvj","../scenes/play.js":"aHgZ","../scenes/ayuda.js":"v2vv","../scenes/opcion.js":"viH1","../scenes/victoria.js":"bML9"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.0b46c350.js.map