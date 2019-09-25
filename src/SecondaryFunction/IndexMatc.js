class Index {

  IndexOfmatchElem(list) {
    // console.log('x+y', x + y)
    // let arr = [
    //   [1, 6, 11, 16, 21],
    //   [2, 7, 12, 17, 22],
    //   [3, 8, 13, 18, 23],
    //   [4, 9, 14, 19, 24],
    //   [5, 10, 15, 20, 25],

    // ]
    // let arr2 = [
    //   ['1.1', '2.1', '3.1', '4.1', '5.1'],
    //   ['1.2', '2.2', '3.2', '4.2', '5.2'],
    //   ['1.3', '2.3', '3.3', '4.3', '5.3'],
    //   ['1.4', '2.4', '3.4', '4.4', '5.4'],
    //   ['1.5', '2.5', '3.5', '4.5', '5.5'],

    // ]

    let arr = [
      ["yellow-donut", "esyBlue-donut", "green-donut", "yellow-donut", "yellow-donut"],
      ["yellow-donut", "blue-donut", "green-donut", "esyBlue-donut", "pink-donut"],
      ["yellow-donut", "green-donut", "pink-donut", "pink-donut", "pink-donut"],
      ["esyBlue-donut", "esyBlue-donut", "yellow-donut", "yellow-donut", "blue-donut"],
      ["blue-donut", "green-donut", "blue-donut", "green-donut", "yellow-donut"],

    ]
    let arr2 = [

    ]
    //arrDonuts = ['red-donut', 'blue-donut', 'green-donut', 'esyBlue-donut', 'yellow-donut', 'pink-donut',]

    // let random = (length, arr) => {
    //   return arr[Math.floor((Math.random() * length))];
    // }
    //console.log('random(arrDonuts.length)', random(arrDonuts.length, arrDonuts))
    //console.log('arr', arr[0][0] == arr[1][0])
    // let temp = [];
    let count = 0;
    console.log('arr2', arr2)
    for (let c = 0; c < 5; c++) {

      for (let r = 0; r < 5; r++) {

        console.log(arr[r != 4 ? r + 1 : r][c] == arr[r][c])
        if (arr[r][c] == arr[r != 4 ? r + 1 : r][c] || count == 2) {
          count++
          arr2.push(arr[count > 1 ? r - 1 : r][c])
          //arr2.push(arr[r][c])
        } else {
          count = 0
          arr2.push('xxx')
        }
        //arr3.push(random(arrDonuts.length, arrDonuts))
        // if (arr2[i][j] == arr2[i][j + 1]) {
        //   temp.push(arr[i][j])
        //   temp.push(arr[i][j + 1])
        // }
      }
    }

  }


}

export default Index