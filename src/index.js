import 'phaser';
import config from './Config/config';
import StartScene from './Scenes/StartScene';
import GameScene from './Scenes/GameScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Start', StartScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Start');
  }
}

window.game = new Game();