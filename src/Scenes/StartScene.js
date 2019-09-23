import 'phaser';
import config from '../Config/config';
export default class StartScene extends Phaser.Scene {
  constructor() {
    super('Start');
  }

  preload() {
    // load images
    this.load.image('logo', '../src/assets/logo.png');
    this.load.image('background', '../src/assets/background.jpg');
    this.load.image('startBtn', '../src/assets/btn-play.png');

  }


  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(400, 500, config.width, config.height)
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton
    );
  }

  create() {
    this.bg = this.add.image(400, 150, "background");
    //bg.anchor.setTo(0.5, 0.5);

    this.gameButton = this.add.sprite(100, 200, 'startBtn').setInteractive();
    this.centerButton(this.gameButton, 1);

    // this.gameText = this.add.text(0, 0, 'Play', { fontSize: '32px', fill: '#fff' });
    // this.centerButtonText(this.gameText, this.gameButton);

    this.gameButton.on('pointerdown', function (pointer) {
      this.scene.start('Game');
    }.bind(this));

    this.input.on('pointerover', function (event, gameObjects) {
      // console.log('gameObjects', gameObjects)
      gameObjects[0].scale = 1.2;

    });
    this.input.on('pointerout', function (event, gameObjects) {
      // console.log('gameObjects', gameObjects)
      gameObjects[0].scale = 1;

    });





    const logo = this.add.image(400, 150, "logo");

    this.tweens.add({
      targets: logo,
      y: 250,
      duration: 2000,
      ease: "Power2",
      yoyo: true,
      loop: -1
    });
  }
};