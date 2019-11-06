class Index {
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

  IndexOfmatchElem(list) {
    list.splice(-1, 1)
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
      if (i % 5 === 0) {
        k++;

        matrix[k] = [];
      }
      const num = 3 != i && 4 != i && 8 != i && 9 != i && 13 != i && 14 != i && 18 != i && 19 != i
      if (num && list[i] === list[i + 1] && list[i + 1] === list[i + 2] && list[i + 2] === list[i + 3] && list[i + 3] === list[i + 4]) {
        console.log('list[i', num, i)
        matrix[k].push(list[i] = 11111111111)
        matrix[k].push(list[i] = 11111111111)
        matrix[k].push(list[i] = 11111111111)
        matrix[k].push(list[i] = 11111111111)
        matrix[k].push(list[i] = 11111111111)
      } if (num && list[i] === list[i + 1] && list[i + 1] === list[i + 2] && list[i + 2] === list[i + 3]) {
        console.log('list[i', num, i)
        matrix[k].push(list[i] = 11111111111)
        matrix[k].push(list[i] = 11111111111)
        matrix[k].push(list[i] = 11111111111)
        matrix[k].push(list[i] = 11111111111)
        matrix[k].push(list[i] = list[i + 4])
      } if (num && list[i] === list[i + 1] && list[i + 1] === list[i + 2]) {
        console.log('list[i', num, i)
        matrix[k].push(list[i] = 11111111111)
        matrix[k].push(list[i] = 11111111111)
        matrix[k].push(list[i] = 11111111111)
        matrix[k].push(list[i] = list[i + 3])
        matrix[k].push(list[i] = list[i + 4])

      }
      else {
        matrix[k].push(list[i]);
      }


    }
    let newArr = matrix
    newArr.length = 5
    //newArr.flat(Infinity) делает из многомерного масива в одномерній 
    let newArr2 = newArr.flat(Infinity).filter((el) => {
      return el != null
    })
    newArr2.length = 25
    console.table('NewArr', newArr2)
  }
}

export default Index
