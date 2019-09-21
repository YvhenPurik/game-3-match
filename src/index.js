

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
let donuts;
var newDonuts;
var donutsInfo;
let tempDonut;
let countClickDonut = 0;
Array.prototype.random = function (length) {
	return this[Math.floor((Math.random() * length))];
}
class playGame extends Phaser.Scene {
	constructor() {
		super("PlayGame");
	}
}


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




function matchVertikal(list) {
	// vertical initial match
	const equalCol1 = list[0] == list[1] && list[1] == list[2]
		|| list[1] == list[2] && list[2] == list[3]
		|| list[2] == list[3] && list[3] == list[4];

	const equalCol2 = list[5] == list[6] && list[6] == list[7]
		|| list[6] == list[7] && list[7] == list[8]
		|| list[7] == list[8] && list[8] == list[9];

	const equalCol3 = list[10] == list[11] && list[11] == list[12]
		|| list[11] == list[12] && list[12] == list[13]
		|| list[12] == list[13] && list[13] == list[14];

	const equalCol4 = list[15] == list[16] && list[16] == list[17]
		|| list[16] == list[17] && list[17] == list[18]
		|| list[17] == list[18] && list[18] == list[19];

	const equalCol5 = list[20] == list[21] && list[21] == list[22]
		|| list[21] == list[22] && list[22] == list[23]
		|| list[22] == list[23] && list[23] == list[24]
	// horizontal initial match
	const equalRow1 = list[0] == list[5] && list[5] == list[10]
		|| list[5] == list[10] && list[10] == list[15]
		|| list[10] == list[15] && list[15] == list[20];

	const equalRow2 = list[1] == list[6] && list[6] == list[11]
		|| list[6] == list[11] && list[11] == list[16]
		|| list[11] == list[16] && list[16] == list[21];

	const equalRow3 = list[2] == list[7] && list[7] == list[12]
		|| list[7] == list[12] && list[12] == list[17]
		|| list[12] == list[17] && list[17] == list[22];

	const equalRow4 = list[3] == list[8] && list[8] == list[13]
		|| list[8] == list[13] && list[13] == list[18]
		|| list[13] == list[18] && list[18] == list[23];

	const equalRow5 = list[4] == list[9] && list[9] == list[14]
		|| list[9] == list[14] && list[14] == list[19]
		|| list[14] == list[19] && list[19] == list[24];

	if (list.length == 25) {
		if (equalCol1 || equalCol2 || equalCol3 || equalCol4 || equalCol5 || equalRow1 || equalRow2 || equalRow3 || equalRow4 || equalRow5) {
			console.log('---------- equal---All--------->>')
			return true

		} else {

			console.log('--------------Not-Equal--All')
			return false
		}
	}
}




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
	// console.log('game--initDonuts', game)

	let arrDonuts = ['red-donut', 'blue-donut', 'green-donut', 'esyBlue-donut', 'yellow-donut', 'pink-donut',]

	function random_item(items) {
		console.log('items', items)
		return items[Math.floor(Math.random() * items.length)];

	}
	for (let c = 0; c < donutsInfo.count.col; c++) {
		for (let r = 0; r < donutsInfo.count.row; r++) {
			var donutX = (c * (donutsInfo.width + donutsInfo.padding)) + donutsInfo.offset.left;
			var donutY = (r * (donutsInfo.height + donutsInfo.padding)) + donutsInfo.offset.top;
			newDonuts = game.add.sprite(donutX, donutY, arrDonuts.random(arrDonuts.length));
			game.physics.enable(newDonuts, Phaser.Physics.ARCADE);
			newDonuts.body.immovable = true;
			newDonuts.anchor.set(0.5);
			newDonuts.inputEnabled = true;
			newDonuts.events.onInputDown.add(listener, this);
			donuts.add(newDonuts);

		}
	}

	let key;
	try {
		key = donuts.children.map((el) => {
			return el.key
		})
	} catch (error) {

	}
	// console.log('donut-key-initDonuts', key)
	if (matchVertikal(key)) {
		console.log('op recursion-->')

		game.state.restart()
		initDonuts()
	} else {

	}


}


var ball;
var background;

function create(el) {

	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.tileSprite(0, 0, 1000, 600, 'background')

	initDonuts()


}
let arrPush = [];
let firstEllPosition = {
	x: 0,
	y: 0
};
let secondEllPosition = {
	x: 0,
	y: 0
};
function listener(el) {
	countClickDonut++
	console.log('ael', el)
	if (countClickDonut == 1) {
		firstEllPosition.x = el.position.x
		firstEllPosition.y = el.position.y

	}
	if (countClickDonut > 1) {
		secondEllPosition.x = el.position.x
		secondEllPosition.y = el.position.y
	}
	const horizontalStepAvailable = secondEllPosition.x - firstEllPosition.x == 160
		|| secondEllPosition.x - firstEllPosition.x == -160
		|| secondEllPosition.x - firstEllPosition.x == 240
		|| secondEllPosition.x - firstEllPosition.x == -240
		|| secondEllPosition.x - firstEllPosition.x == 320
		|| secondEllPosition.x - firstEllPosition.x == -320

	const verticallStepAvailable = secondEllPosition.y - firstEllPosition.y == 160
		|| secondEllPosition.y - firstEllPosition.y == -160
		|| secondEllPosition.y - firstEllPosition.y == 240
		|| secondEllPosition.y - firstEllPosition.y == -240
		|| secondEllPosition.y - firstEllPosition.y == 320
		|| secondEllPosition.y - firstEllPosition.y == -320

	console.log('firstEllPosition  ', firstEllPosition.y, 'secondEllPosition  ', secondEllPosition.y)
	if (countClickDonut <= 2 && el.scale.x < 1.1) {
		arrPush.push(el)
		el.scale.x += 0.1
		el.scale.y += 0.1
		//console.log('www',firstEllPosition.x - secondEllPosition.x)
		if (countClickDonut == 2 && secondEllPosition.x - firstEllPosition.x == 80 || secondEllPosition.x - firstEllPosition.x == -80 || secondEllPosition.y - firstEllPosition.y == 80 || secondEllPosition.y - firstEllPosition.y == -80) {
			countClickDonut = 0;

			arrPush[0].position.x = secondEllPosition.x;
			arrPush[0].position.y = secondEllPosition.y;
			arrPush[1].position.x = firstEllPosition.x;
			arrPush[1].position.y = firstEllPosition.y;

			firstEllPosition.x = null;
			firstEllPosition.y = null;
			secondEllPosition.x = null;
			secondEllPosition.y = null;
			el = arrPush.map((el) => {
				el.scale.x = 1
				el.scale.y = 1
			});
			//initDonuts()
			arrPush.length = 0
		} else if (horizontalStepAvailable || verticallStepAvailable) {
			countClickDonut = 0;
			el = arrPush.map((el) => {
				el.scale.x = 1
				el.scale.y = 1
			})
			var style = { font: "32px Arial", fill: "#000000", align: "center" };
			var text = game.add.text(game.world.centerX, game.world.centerY + 270, "incorrect choice", style);
			setTimeout(() => {
				text.destroy()
			}, 1500)
			text.anchor.set(0.5);
			arrPush.length = 0
			firstEllPosition.x = null;
			firstEllPosition.y = null;
			secondEllPosition.x = null;
			secondEllPosition.y = null;
		}
	} else {
		console.log('else')
		countClickDonut = 0;
		el = arrPush.map((el) => {
			el.scale.x = 1
			el.scale.y = 1
		})
		arrPush.length = 0
		firstEllPosition.x = null;
		firstEllPosition.y = null;
		secondEllPosition.x = null;
		secondEllPosition.y = null;
	}


}

function update() {


}
