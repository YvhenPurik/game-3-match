import 'phaser';
import config from '../Config/config';
export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images

    this.load.image('background', '../src/assets/background.jpg');


  }




  create() {
    this.add.image(400, 150, "background");

  }
}