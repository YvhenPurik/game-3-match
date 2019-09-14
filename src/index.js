var game = new Phaser.Game(480, 320, Phaser.AUTO, null, { preload: preload, create: create, update: update });

var ball;

function preload() {

	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.stage.backgroundColor = '#eee';
	game.load.image('ball', '../assets/img/game/gem-01.png');
}
function create() {
	ball = game.add.sprite(50, 50, 'ball');
}
function update() { }