var game = new Phaser.Game(480, 320, Phaser.AUTO, null, { preload: preload, create: create, update: update });

var ball;

function preload() {

	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.stage.backgroundColor = '#eee232';
	game.load.image('ball', '../assets/img/game/gem-01.png');
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	ball = game.add.sprite(50, 50, 'ball');
	game.physics.enable(ball, Phaser.Physics.ARCADE);
	ball.body.velocity.set(50, 50);
	ball.pivot.x = 50
	ball.pivot.y = 50
	console.log('create', ball)
}
function update() {
	ball.rotation += 0.2
	console.log('update', ball)

}