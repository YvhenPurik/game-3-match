import Preload from 'Preload';

class Game extends Phaser.Game {

	constructor() {
		super(500, 500, Phaser.AUTO, 'content', null);
		this.state.add('Preload', Preload, false);
		this.state.start('Preload');
	}

}
let phaser = Phaser
console.log('phaser', phaser)

let game2 = new Game();
console.log('Phaser.Game', game2)
