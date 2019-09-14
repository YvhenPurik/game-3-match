

var game = new Phaser.Game(1000, 1000, Phaser.AUTO, null, { preload: preload, create: create, update: update });

var ball;
let ball2;
let ball3;
let ball4;
let ball5;



function preload() {

	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.stage.backgroundColor = '#eeeee2';
	game.load.image('ball', '../assets/img/game/gem-01.png');
	game.load.image('ball2', '../assets/img/game/gem-02.png');
	game.load.image('ball3', '../assets/img/game/gem-03.png');
	game.load.image('ball4', '../assets/img/game/gem-04.png');
	game.load.image('ball5', '../assets/img/game/gem-05.png');
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
	ball = game.add.sprite(50, 50, 'ball');
	ball2 = game.add.sprite(150, 50, 'ball2');
	ball3 = game.add.sprite(250, 70, 'ball3');
	ball4 = game.add.sprite(450, 30, 'ball4');
	ball5 = game.add.sprite(550, 130, 'ball5');

	game.physics.enable(ball, Phaser.Physics.ARCADE);
	game.physics.enable(ball2, Phaser.Physics.ARCADE);
	game.physics.enable(ball3, Phaser.Physics.ARCADE);
	game.physics.enable(ball4, Phaser.Physics.ARCADE);
	game.physics.enable(ball5, Phaser.Physics.ARCADE);

	ball.body.gravity.y = 100
	ball2.body.gravity.y = 60
	ball3.body.gravity.y = 120
	ball4.body.gravity.y = 30
	ball5.body.gravity.y = 230

	ball.body.collideWorldBounds = true;
	ball.body.bounce.set(1);

	ball2.body.collideWorldBounds = true;
	ball2.body.bounce.set(1);

	ball3.body.collideWorldBounds = true;
	ball3.body.bounce.set(1);

	ball4.body.collideWorldBounds = true;
	ball4.body.bounce.set(1);

	ball5.body.collideWorldBounds = true;
	ball5.body.bounce.set(1);

	ball.pivot.x = 50
	ball.pivot.y = 50

	ball2.pivot.x = 50
	ball2.pivot.y = 50

	ball4.pivot.x = 50
	ball4.pivot.y = 50

	ball5.pivot.x = 50
	ball5.pivot.y = 50
	console.log('create', ball)
}
function update() {
	ball.rotation += 0.2
	ball2.rotation += -0.2
	ball4.rotation += -0.6
	ball5.rotation += -0.1
	console.log('update', ball)

}