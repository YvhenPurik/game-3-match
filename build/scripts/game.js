(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
var donuts = void 0;
var newDonuts;
var donutsInfo;
var tempDonut = void 0;

// let arr =[
// 	[1,3,4,5,1],
// 	[2,2,5,1,1],
// 	[2,3,5,5,1],
// 	[2,5,2,1,3],
// 	[2,1,1,3,4]
// ]
function preload() {
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.stage.backgroundColor = '#eee';
	game.load.spritesheet('red-donut', 'assets/img/game/gem-01.png', 193, 71);
	game.load.spritesheet('blue-donut', 'assets/img/game/gem-02.png', 193, 71);
	game.load.spritesheet('green-donut', 'assets/img/game/gem-03.png', 193, 71);
	game.load.spritesheet('esyBlue-donut', 'assets/img/game/gem-04.png', 193, 71);
	game.load.spritesheet('yellow-donut', 'assets/img/game/gem-05.png', 193, 71);
	game.load.spritesheet('pink-donut', 'assets/img/game/gem-06.png', 193, 71);
	game.load.image('background', 'assets/img/backgrounds/background.jpg');
}
Array.prototype.random = function (length) {
	return this[Math.floor(Math.random() * length)];
};

var arrDonuts = ['red-donut', 'blue-donut', 'green-donut', 'esyBlue-donut', 'yellow-donut', 'pink-donut'];

function matchVertikal(list) {
	// vertical initial match
	var equalCol1 = list[0] == list[1] && list[1] == list[2] || list[1] == list[2] && list[2] == list[3] || list[2] == list[3] && list[3] == list[4];

	var equalCol2 = list[5] == list[6] && list[6] == list[7] || list[6] == list[7] && list[7] == list[8] || list[7] == list[8] && list[8] == list[9];

	var equalCol3 = list[10] == list[11] && list[11] == list[12] || list[11] == list[12] && list[12] == list[13] || list[12] == list[13] && list[13] == list[14];

	var equalCol4 = list[15] == list[16] && list[16] == list[17] || list[16] == list[17] && list[17] == list[18] || list[17] == list[18] && list[18] == list[19];

	var equalCol5 = list[20] == list[21] && list[21] == list[22] || list[21] == list[22] && list[22] == list[23] || list[22] == list[23] && list[23] == list[24];
	// horizontal initial match
	var equalRow1 = list[0] == list[5] && list[5] == list[10] || list[5] == list[10] && list[10] == list[15] || list[10] == list[15] && list[15] == list[20];

	var equalRow2 = list[1] == list[6] && list[6] == list[11] || list[6] == list[11] && list[11] == list[16] || list[11] == list[16] && list[16] == list[21];

	var equalRow3 = list[2] == list[7] && list[7] == list[12] || list[7] == list[12] && list[12] == list[17] || list[12] == list[17] && list[17] == list[22];

	var equalRow4 = list[3] == list[8] && list[8] == list[13] || list[8] == list[13] && list[13] == list[18] || list[13] == list[18] && list[18] == list[23];

	var equalRow5 = list[4] == list[9] && list[9] == list[14] || list[9] == list[14] && list[14] == list[19] || list[14] == list[19] && list[19] == list[24];

	if (list.length == 25) {
		if (equalCol1 || equalCol2 || equalCol3 || equalCol4 || equalCol5 || equalRow1 || equalRow2 || equalRow3 || equalRow4 || equalRow5) {
			console.log('---------- equal---All--------->>');
			return true;
		} else {

			console.log('--------------Not-Equal--All');
			return false;
		}
	}
}

function initDonuts() {
	var donutsInfo = {
		width: 50,
		height: 50,
		count: {
			row: 5,
			col: 5
		},
		offset: {
			top: 150,
			left: 250
		},
		padding: 30
	};

	donuts = game.add.group();
	console.log('game--initDonuts', game);

	for (var c = 0; c < donutsInfo.count.col; c++) {
		for (var r = 0; r < donutsInfo.count.row; r++) {
			var donutX = c * (donutsInfo.width + donutsInfo.padding) + donutsInfo.offset.left;
			var donutY = r * (donutsInfo.height + donutsInfo.padding) + donutsInfo.offset.top;
			newDonuts = game.add.sprite(donutX, donutY, arrDonuts.random(arrDonuts.length));
			game.physics.enable(newDonuts, Phaser.Physics.ARCADE);
			newDonuts.body.immovable = true;
			newDonuts.anchor.set(0.5);
			donuts.add(newDonuts);
		}
	}

	var key = void 0;
	try {
		key = donuts.children.map(function (el) {
			return el.key;
		});
	} catch (error) {}
	console.log('donut-key-initDonuts', key);
	if (matchVertikal(key)) {
		console.log('op recursion-->');
		game.stage.stage.update();
		initDonuts();
	} else {}
}

var ball;
var background;

function create(el) {

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.tileSprite(0, 0, 1000, 600, 'background');

	initDonuts();
}

function clickHandler(el) {
	el.scale.x += 0.1;
	el.scale.y += 0.1;
	console.log('click on donuts:', el);
}

function update() {}

},{}]},{},[1])
//# sourceMappingURL=game.js.map
