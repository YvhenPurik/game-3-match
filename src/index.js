

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
let donuts;
var newDonuts;
var donutsInfo;

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
	game.stage.arr
	game.load.spritesheet('red-donut', 'assets/img/game/gem-01.png', 193, 71);
	game.load.spritesheet('blue-donut', 'assets/img/game/gem-02.png', 193, 71);
	game.load.spritesheet('green-donut', 'assets/img/game/gem-03.png', 193, 71);
	game.load.spritesheet('esyBlue-donut', 'assets/img/game/gem-04.png', 193, 71);
	game.load.spritesheet('yellow-donut', 'assets/img/game/gem-05.png', 193, 71);
	game.load.spritesheet('pink-donut', 'assets/img/game/gem-06.png', 193, 71);
	game.load.image('background', 'assets/img/backgrounds/background.jpg');

	console.log('hgjhg', game.stage)
}
Array.prototype.random = function (length) {
	return this[Math.floor((Math.random() * length))];
}
let arrDonuts = ['red-donut', 'blue-donut', 'green-donut', 'esyBlue-donut', 'yellow-donut', 'pink-donut',]
var chosen_donut = arrDonuts.random(arrDonuts.length)
console.log('get rand donut', chosen_donut)
function initDonuts() {
	let
		donutsInfo = {
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
	for (let c = 0; c < donutsInfo.count.col; c++) {
		for (let r = 0; r < donutsInfo.count.row; r++) {
			var donutX = (c * (donutsInfo.width + donutsInfo.padding)) + donutsInfo.offset.left;
			var donutY = (r * (donutsInfo.height + donutsInfo.padding)) + donutsInfo.offset.top;
			newDonuts = game.add.sprite(donutX, donutY, arrDonuts.random(arrDonuts.length));
			game.physics.enable(newDonuts, Phaser.Physics.ARCADE);
			newDonuts.body.immovable = true;
			newDonuts.anchor.set(0.5);

			donuts.add(newDonuts);
		}
	}
}


var ball;
var background;

function create() {

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.tileSprite(0, 0, 1000, 600, 'background')
	initDonuts()
}

function clickHandler(el) {
	el.scale.x += 0.1
	el.scale.y += 0.1
	console.log('click on donuts:', el)

}

function update() {


}
