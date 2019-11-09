class Index {
  constructor() {

    this.matrix = [];
    this.matrix2 = [];
  }
  transMatrix(A) {
    var m = A.length, n = A[0].length, AT = [];
    for (var i = 0; i < n; i++) {
      AT[i] = [];
      for (var j = 0; j < m; j++) {
        AT[i][j] = A[j][i];
      }
    }
    return AT;
  }


  findClasterVertical(list) {
    console.log('Vertical')
    let i, k;
    list.splice(-1, 1)

    for (i = 0, k = -1; i < list.length; i++) {
      if (i % 5 === 0) {
        k++;

        this.matrix[k] = [];
      }

      const num = 3 != i && 4 != i && 8 != i && 9 != i && 13 != i && 14 != i && 18 != i && 19 != i
      if (num && list[i] === list[i + 1] && list[i + 1] === list[i + 2] && list[i + 2] === list[i + 3] && list[i + 3] === list[i + 4]) {
        console.log('list[5]', num, i)
        this.matrix[k].push(list[i] = 11111111111)
        this.matrix[k].push(list[i] = 11111111111)
        this.matrix[k].push(list[i] = 11111111111)
        this.matrix[k].push(list[i] = 11111111111)
        this.matrix[k].push(list[i] = 11111111111)
      } if (num && list[i] === list[i + 1] && list[i + 1] === list[i + 2] && list[i + 2] === list[i + 3]) {
        console.log('list[4]', num, i)
        this.matrix[k].push(list[i] = 11111111111)
        this.matrix[k].push(list[i] = 11111111111)
        this.matrix[k].push(list[i] = 11111111111)
        this.matrix[k].push(list[i] = 11111111111)
        this.matrix[k].push(list[i] = list[i + 4])
      } if (num && list[i] === list[i + 1] && list[i + 1] === list[i + 2]) {
        console.log('list[3]', num, i)
        this.matrix[k].push(list[i] = 11111111111)
        this.matrix[k].push(list[i] = 11111111111)
        this.matrix[k].push(list[i] = 11111111111)
        this.matrix[k].push(list[i] = list[i + 3])
        this.matrix[k].push(list[i] = list[i + 4])

      }
      else {
        this.matrix[k].push(list[i]);
      }

    }
    let newArr = this.matrix
    newArr.length = 5
    let newArr2 = newArr.flat(Infinity).filter((el) => {
      return el != null
    })
    newArr2.length = 25
    console.log(this.transMatrix(this.matrix))
    console.log('Vertical', newArr2)

  }


  findClasterHorizontal(list) {
    console.log('Horizontal', list)
    let matrix2 = []
    for (let i = 0, k = -1; i < list.length; i++) {
      if (i % 5 === 0) {
        k++;

        matrix2[k] = [];
      }
      console.log('list[i]', list[i])
      const num = 3 != i && 4 != i && 8 != i && 9 != i && 13 != i && 14 != i && 18 != i && 19 != i
      if (num && list[i] === list[i + 1] && list[i + 1] === list[i + 2] && list[i + 2] === list[i + 3] && list[i + 3] === list[i + 4]) {
        console.log('list[5]', num, i)
        matrix2[k].push(list[i] = 11111111111)
        matrix2[k].push(list[i] = 11111111111)
        matrix2[k].push(list[i] = 11111111111)
        matrix2[k].push(list[i] = 11111111111)
        matrix2[k].push(list[i] = 11111111111)
      } if (num && list[i] === list[i + 1] && list[i + 1] === list[i + 2] && list[i + 2] === list[i + 3]) {
        console.log('list[4]', num, i)
        matrix2[k].push(list[i] = 11111111111)
        matrix2[k].push(list[i] = 11111111111)
        matrix2[k].push(list[i] = 11111111111)
        matrix2[k].push(list[i] = 11111111111)
        matrix2[k].push(list[i] = list[i + 4])
      } if (num && list[i] === list[i + 1] && list[i + 1] === list[i + 2]) {
        console.log('list[3]', num, i)
        matrix2[k].push(list[i] = 11111111111)
        matrix2[k].push(list[i] = 11111111111)
        matrix2[k].push(list[i] = 11111111111)
        matrix2[k].push(list[i] = list[i + 3])
        matrix2[k].push(list[i] = list[i + 4])

      }
      else {
        matrix2[k].push(list[i]);
      }
    }


    for (let i = 0; i < matrix2.length; i++) {
      matrix2[i].length = 5
    }
    let newAeer = []
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        console.log('new matrix', matrix2[j][i])
        newAeer.push(matrix2[j][i])
      }
    }















    let matrix3 = []

    for (let i = 0, k = -1; i < newAeer.length; i++) {
      if (i % 5 === 0) {
        k++;

        matrix3[k] = [];
      }
      console.log('list[i]', list[i])
      const num = 3 != i && 4 != i && 8 != i && 9 != i && 13 != i && 14 != i && 18 != i && 19 != i
      if (num && newAeer[i] === newAeer[i + 1] && newAeer[i + 1] === newAeer[i + 2] && newAeer[i + 2] === newAeer[i + 3] && newAeer[i + 3] === newAeer[i + 4]) {
        console.log('list[5]', num, i)
        matrix3[k].push(newAeer[i] = 11111111111)
        matrix3[k].push(newAeer[i] = 11111111111)
        matrix3[k].push(newAeer[i] = 11111111111)
        matrix3[k].push(newAeer[i] = 11111111111)
        matrix3[k].push(newAeer[i] = 11111111111)
      } if (num && newAeer[i] === newAeer[i + 1] && newAeer[i + 1] === newAeer[i + 2] && newAeer[i + 2] === newAeer[i + 3]) {
        console.log('list[4]', num, i)
        matrix3[k].push(newAeer[i] = 11111111111)
        matrix3[k].push(newAeer[i] = 11111111111)
        matrix3[k].push(newAeer[i] = 11111111111)
        matrix3[k].push(newAeer[i] = 11111111111)
        matrix3[k].push(newAeer[i] = newAeer[i + 4])
      } if (num && newAeer[i] === newAeer[i + 1] && newAeer[i + 1] === newAeer[i + 2]) {
        console.log('list[3]', num, i)
        matrix3[k].push(newAeer[i] = 11111111111)
        matrix3[k].push(newAeer[i] = 11111111111)
        matrix3[k].push(newAeer[i] = 11111111111)
        matrix3[k].push(newAeer[i] = newAeer[i + 3])
        matrix3[k].push(newAeer[i] = newAeer[i + 4])

      }
      else {
        matrix3[k].push(newAeer[i]);
      }
    }























    for (let i = 0; i < matrix3.length; i++) {
      matrix3[i].length = 5
    }


    console.log('matrix3', matrix3)

  }

}



export default Index
