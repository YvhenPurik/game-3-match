class Index {

  IndexOfmatchElem(list) {
    list.splice(-1, 1)
    // console.log('IndexOfmatchElem', list)
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

    // let arr = [
    //   ["esyBlue-donut", "esyBlue-donut", "yellow-donut", "yellow-donut", "yellow-donut"],
    //   ["esyBlue-donut", "blue-donut", "green-donut", "esyBlue-donut", "pink-donut"],
    //   ["yellow-donut", "yellow-donut", "yellow-donut", "pink-donut", "pink-donut"],
    //   ["esyBlue-donut", "esyBlue-donut", "green-donut", "yellow-donut", "blue-donut"],
    //   ["blue-donut", "green-donut", "blue-donut", "green-donut", "yellow-donut"],

    // ]
    // 
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
      if (i % 5 === 0) {
        k++;
        matrix[k] = [];
      }

      matrix[k].push(list[i]);
    }
    console.log('matrix', matrix)
  }
}

export default Index