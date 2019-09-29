import 'phaser';
import Index from '../SecondaryFunction/IndexMatc'



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
    this.idFirstEl = null;
    this.idSecondEl = null;
    this.stepCountHorizont = 5;
    this.stepCountVertical = 5;

    this.listenerSwap = this.listenerSwap.bind(this)
  }




  preload() {

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
    // console.log('list', list)
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

  listenerSwap(pointer, el) {

    let res = this.children.list.map((el) => {
      //console.log('el2', el)
      if (el.texture.key != 'background') {
        return el.texture.key
      }
    })

    res.shift()
    this.index = new Index()
    this.index.IndexOfmatchElem(res)


    let stepCountHorizontFirst = 5;
    let stepCountVerticalFirst = 5;
    let stepCountHorizontSecond = 5;
    let stepCountVerticalSecond = 5;
    // console.log('el', el)
    this.countClickDonut++
    if (this.countClickDonut == 1) {

      this.firstEllPosition.x = el.x
      this.firstEllPosition.y = el.y

    }
    if (this.countClickDonut > 1) {
      this.secondEllPosition.x = el.x
      this.secondEllPosition.y = el.y
    }


    for (let c = 80; c < 570; c += 80) {

      if (this.firstEllPosition.x < c) {
        stepCountHorizontFirst--
      }
    }

    for (let r = 80; r < 470; r += 80) {

      if (this.firstEllPosition.y < r) {
        stepCountVerticalFirst--
      }
    }

    if (this.countClickDonut > 1) {
      for (let c = 80; c < 570; c += 80) {

        if (this.secondEllPosition.x < c) {
          stepCountHorizontSecond--
        }
      }

      for (let r = 80; r < 470; r += 80) {

        if (this.secondEllPosition.y < r) {
          stepCountVerticalSecond--
        }
      }
    } else {
      stepCountHorizontSecond = null;
      stepCountVerticalSecond = null;
    }


    //console.log(' first ', ' x ', stepCountHorizontFirst, ' y ', stepCountVerticalFirst, ' second ', ' x ', stepCountHorizontSecond, ' y ', stepCountVerticalSecond)
    let matrix = {
      '1.1': 1,
      '1.2': 2,
      '1.3': 3,
      '1.4': 4,
      '1.5': 5,

      '2.1': 6,
      '2.2': 7,
      '2.3': 8,
      '2.4': 9,
      '2.5': 10,

      '3.1': 11,
      '3.2': 12,
      '3.3': 13,
      '3.4': 14,
      '3.5': 15,

      '4.1': 16,
      '4.2': 17,
      '4.3': 18,
      '4.4': 19,
      '4.5': 20,

      '5.1': 21,
      '5.2': 22,
      '5.3': 23,
      '5.4': 24,
      '5.5': 25,
    }

    if (this.countClickDonut == 1) {
      this.idFirstEl = matrix[`${stepCountHorizontFirst}.${stepCountVerticalFirst}`]
    } else if (this.countClickDonut == 2) {

      this.idSecondEl = matrix[`${stepCountHorizontSecond}.${stepCountVerticalSecond}`]

    }




    //console.log(`lol ${this.stepCountHorizont}.${this.stepCountVertical}`)







    // if (this.firstEllPosition.x == 250 && this.firstEllPosition.y == 150 && this.countClickDonut == 1) {
    //   this.idFirstEl = 1
    // } else {
    //   this.idFirstEl = null
    // }

    //console.log('idFirstEl', this.idFirstEl, this.countClickDonut)


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

    } else {
      diagonalStepAvailable = false
    }

    //console.log('diagonal sum', this.secondEllPosition.y - this.secondEllPosition.x + this.firstEllPosition.y - this.firstEllPosition.x)
    //console.log('this.firstEllPosition  ', this.firstEllPosition.y, 'this.secondEllPosition  ', this.secondEllPosition.y)
    if (horizontalStepAvailable || verticallStepAvailable || diagonalStepAvailable && this.countClickDonut == 2) {
      this.countClickDonut = 0;
      el = this.arrPush.map((el) => {
        el.scale = 1

      })
      var style = { font: "32px Arial", fill: "#ffffff", align: "center" };
      let text = this.add.text(160, 540, "swap only horizontally and vertically", style);
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
        this.swapСhildrenSceneItem(this.children.list, matrix[`${stepCountHorizontFirst}.${stepCountVerticalFirst}`], matrix[`${stepCountHorizontSecond}.${stepCountVerticalSecond}`])

        let result = this.children.list.map((el, i, arr) => {

          if (el.texture.key != 'background') {
            return el.texture.key
          }
        })
        let text;
        result.splice(0, 1)
        let array2 = result.filter(element => element !== null);
        //console.log('this.matchVertikal(result)', this.matchVertikal(result), 'result', array2)
        if (!this.matchVertikal(array2)) {
          text = this.add.text(260, 540, "not any match", { font: "32px Arial", fill: "#ffffff", align: "center" });
          setTimeout(() => {
            text.destroy()  //matrix[`${stepCountHorizontFirst}.${stepCountVerticalFirst}`]
          }, 1500)
          console.log('not match')
          this.swapСhildrenSceneItem(this.children.list, matrix[`${stepCountHorizontSecond}.${stepCountVerticalSecond}`], matrix[`${stepCountHorizontFirst}.${stepCountVerticalFirst}`])
          this.tweens.add({
            targets: this.arrPush[0],
            x: this.arrPush[1].x,
            y: this.arrPush[1].y,
            ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 200,
            repeat: 0,
            yoyo: true
          });


          this.tweens.add({
            targets: this.arrPush[1],
            x: this.arrPush[0].x,
            y: this.arrPush[0].y,
            ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 200,
            repeat: 0,            // -1: infinity
            yoyo: true
          });

        } else if (this.matchVertikal(array2)) {
          try {
            text.destroy()
          } catch (error) {

          }

          text = this.add.text(260, 540, "match------> 3", { font: "32px Arial", fill: "#ffffff", align: "center" });
          setTimeout(() => {
            text.destroy()
          }, 1500)
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
          console.log(' match----->')
        }
        this.countClickDonut = 0;



        this.firstEllPosition.x = null;
        this.firstEllPosition.y = null;
        this.secondEllPosition.x = null;
        this.secondEllPosition.y = null;
        el = this.arrPush.map((el) => {
          el.scale = 1

          console.log('matrix1', typeof matrix[`${stepCountHorizontFirst}.${stepCountVerticalFirst}`], 'matrix2', typeof matrix[`${stepCountHorizontSecond}.${stepCountVerticalSecond}`])


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
    //console.log('this.children.list', this.children.list)

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
      this.input.on('gameobjectdown', this.listenerSwap, this);
    }


  }




  create() {

    //console.log('this.add', this.add)

    this.add.image(400, 150, "background");

    this.initDonuts()
  }
  update() {

  }
}


