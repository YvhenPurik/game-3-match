import 'phaser';




export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    this.arrPush = [];
    this.secondEllPosition = {
      x: null,
      y: null
    };
    this.firstEllPosition = {
      x: null,
      y: null
    };
    this.countClickDonut = 0

    this.listener = this.listener.bind(this)
  }

  // method(el) {
  //   // console.log('this.count', this.count)


  // }


  preload() {
    // load images

    // this.load.audio('GameMusick', '../src/assets/game.mp3');
    this.load.image('background', '../src/assets/background.jpg');
    this.load.image('red-donut', '../src/assets/gem-01.png', 193, 71);
    this.load.image('blue-donut', '../src/assets/gem-02.png', 193, 71);
    this.load.image('green-donut', '../src/assets/gem-03.png', 193, 71);
    this.load.image('esyBlue-donut', '../src/assets/gem-04.png', 193, 71);
    this.load.image('yellow-donut', '../src/assets/gem-05.png', 193, 71);
    this.load.image('pink-donut', '../src/assets/gem-06.png', 193, 71);


  }


  matchVertikal(list) {
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


  swapСhildrenSceneItem(xs, i, j) {
    var temp = xs[j];
    xs[j] = xs[i];
    xs[i] = temp;
    return xs;
  }


  listener(pointer, el) {
    // console.log('this1', this.children.list)
    this.swapСhildrenSceneItem(this.children.list, 1, 2)
    console.log('el', el)
    this.countClickDonut++
    if (this.countClickDonut == 1) {

      this.firstEllPosition.x = el.x
      this.firstEllPosition.y = el.y

    }
    if (this.countClickDonut > 1) {
      this.secondEllPosition.x = el.x
      this.secondEllPosition.y = el.y
    }
    //console.log('this.firstEllPosition.x', this.firstEllPosition.x, 'this.secondEllPosition.x', this.secondEllPosition.x)
    // console.log('this.firstEllPosition', this.firstEllPosition, 'this.secondEllPosition', this.secondEllPosition)
    //this.method(el)






    const horizontalStepAvailable = this.secondEllPosition.x - this.firstEllPosition.x == 160
      || this.secondEllPosition.x - this.firstEllPosition.x == -160
      || this.secondEllPosition.x - this.firstEllPosition.x == 240
      || this.secondEllPosition.x - this.firstEllPosition.x == -240
      || this.secondEllPosition.x - this.firstEllPosition.x == 320
      || this.secondEllPosition.x - this.firstEllPosition.x == -320

    const verticallStepAvailable = this.secondEllPosition.y - this.firstEllPosition.y == 160
      || this.secondEllPosition.y - this.firstEllPosition.y == -160
      || this.secondEllPosition.y - this.firstEllPosition.y == 240
      || this.secondEllPosition.y - this.firstEllPosition.y == -240
      || this.secondEllPosition.y - this.firstEllPosition.y == 320
      || this.secondEllPosition.y - this.firstEllPosition.y == -320

    let diagonalStepAvailable
    if (this.countClickDonut == 2) {

      diagonalStepAvailable = this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x
        == 280
        || this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x == 120
        || this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x == -40
        || this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x == -200
        || this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x == -360
        || this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x == -520
        || this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x == -680
      //|| this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x == -600
      // || this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x != -200
      // || this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x != -280
      // || this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x != -120
      // || this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x != -440
      // || this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x != 200
      // || this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x != 600
      // || this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x != 40
    } else {
      diagonalStepAvailable = false
    }

    console.log('diagonal sum', this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x)
    //console.log('this.firstEllPosition  ', this.firstEllPosition.y, 'this.secondEllPosition  ', this.secondEllPosition.y)
    if (horizontalStepAvailable || verticallStepAvailable || diagonalStepAvailable && this.countClickDonut == 2) {
      this.countClickDonut = 0;
      el = this.arrPush.map((el) => {
        el.scale = 1

      })
      var style = { font: "32px Arial", fill: "#000000", align: "center" };
      let text = this.add.text(160, 540, "nope only horizontally and vertically", style);
      setTimeout(() => {
        text.destroy()
      }, 2500)
      // text.anchor.set(0.5);
      this.arrPush.length = 0
      this.firstEllPosition.x = null;
      this.firstEllPosition.y = null;
      this.secondEllPosition.x = null;
      this.secondEllPosition.y = null;
    }
    if (this.countClickDonut <= 2 && el.scale < 1.1) {
      this.arrPush.push(el)
      el.scale += 0.1

      //console.log('www',this.firstEllPosition.x - this.secondEllPosition.x)
      if (this.countClickDonut == 2 && this.secondEllPosition.x - this.firstEllPosition.x == 80 || this.secondEllPosition.x - this.firstEllPosition.x == -80 || this.secondEllPosition.y - this.firstEllPosition.y == 80 || this.secondEllPosition.y - this.firstEllPosition.y == -80) {
        this.countClickDonut = 0;


        this.tweens.add({
          targets: this.arrPush[0],
          x: this.arrPush[1].x,
          y: this.arrPush[1].y,
          ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
          duration: 500,
          repeat: 0,
          yoyo: false
        });


        this.tweens.add({
          targets: this.arrPush[1],
          x: this.arrPush[0].x,
          y: this.arrPush[0].y,
          ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
          duration: 500,
          repeat: 0,            // -1: infinity
          yoyo: false
        });
        this.firstEllPosition.x = null;
        this.firstEllPosition.y = null;
        this.secondEllPosition.x = null;
        this.secondEllPosition.y = null;
        el = this.arrPush.map((el) => {
          el.scale = 1

        });

        this.arrPush.length = 0
      } else if (horizontalStepAvailable || verticallStepAvailable || diagonalStepAvailable) {
        this.countClickDonut = 0;
        el = this.arrPush.map((el) => {
          el.scale = 1

        })
        var style = { font: "32px Arial", fill: "#000000", align: "center" };
        let text = this.add.text(300, 540, "incorrect choice", style);
        setTimeout(() => {
          text.destroy()
        }, 1500)
        // text.anchor.set(0.5);
        this.arrPush.length = 0
        this.firstEllPosition.x = null;
        this.firstEllPosition.y = null;
        this.secondEllPosition.x = null;
        this.secondEllPosition.y = null;
      }
    } else {
      console.log('else')
      this.countClickDonut = 0;
      el = this.arrPush.map((el) => {
        el.scale = 1

      })
      this.arrPush.length = 0
      this.firstEllPosition.x = null;
      this.firstEllPosition.y = null;
      this.secondEllPosition.x = null;
      this.secondEllPosition.y = null;
    }
    console.log('this2', this)

  }


  initDonuts() {
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
    Array.prototype.random = function (length) {
      return this[Math.floor((Math.random() * length))];
    }
    // this.donuts = this.add.group();
    //console.log('this', this)

    let arrDonuts = ['red-donut', 'blue-donut', 'green-donut', 'esyBlue-donut', 'yellow-donut', 'pink-donut',]

    let key = [];
    for (let c = 0; c < donutsInfo.count.col; c++) {
      for (let r = 0; r < donutsInfo.count.row; r++) {
        var donutX = (c * (donutsInfo.width + donutsInfo.padding)) + donutsInfo.offset.left;
        var donutY = (r * (donutsInfo.height + donutsInfo.padding)) + donutsInfo.offset.top;
        this.newDonuts = this.add.image(donutX, donutY, arrDonuts.random(arrDonuts.length));
        // this.physics.enable(newDonuts, Phaser.Physics.ARCADE);
        //console.log('this.newDonuts')
        // this.newDonuts.body.immovable = true;
        // this.newDonuts.anchor.set(0.5);
        this.newDonuts.setInteractive()


        // this.donuts.add(newDonuts);
        key.push(this.newDonuts.texture.key)
      }
    }


    //console.log('key', key)
    try {
      key = this.newDonuts.map((el) => {
        // return el.texture.key
        // console.log('el', el.texture.key)
      })
    } catch (error) {

    }
    //console.log('donut-key-initDonuts', key)
    if (this.matchVertikal(key)) {
      // console.log('op recursion-->', this.scene)

      // this.state.restart()

      this.scene.scene.children.getAll().forEach(s => {
        if (s.texture.key != 'background') {
          s.destroy()
        }

      })

      this.initDonuts()
    } else {
      this.input.on('gameobjectdown', this.listener, this);
    }


  }




  create() {

    //console.log('this.add', this.add)

    this.add.image(400, 150, "background");
    // this.add.audio('startMusick', 1, true);
    // this.sound.play('GameMusick', {
    //   mute: false,
    //   volume: 0.05,
    //   rate: 1,
    //   detune: 0,
    //   seek: 0,
    //   loop: true,
    //   delay: 0
    // });
    this.initDonuts()
  }
  update() {

  }
}


