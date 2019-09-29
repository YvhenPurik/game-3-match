class Index {

  IndexOfmatchElem(list) {
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
    //   ["yellow-donut", "esyBlue-donut", "yellow-donut", "yellow-donut", "yellow-donut"],
    //   ["yellow-donut", "blue-donut", "green-donut", "esyBlue-donut", "pink-donut"],
    //   ["yellow-donut", "green-donut", "green-donut", "pink-donut", "pink-donut"],
    //   ["esyBlue-donut", "esyBlue-donut", "green-donut", "yellow-donut", "blue-donut"],
    //   ["blue-donut", "green-donut", "blue-donut", "green-donut", "yellow-donut"],

    // ]
    // let arr2 = [

    // ]
    // let size = 5; //размер подмассива
    // let subarray = []; //массив в который будет выведен результат.
    // for (let i = 0; i < Math.ceil(list.length / size); i++) {
    //   subarray[i] = list.slice((i * size), (i * size) + size);
    // }


    //   let count = 0;
    //   let temp = [];
    //   for (let row in arr) {
    //     for (let col in arr) {
    //       count++
    //       console.log('arr[col][row]', arr[col][row], count)
    //       // if (arr[col][row] == arr[this.fpm(col) - 1][row]) {
    //       //   count++
    //       //   console.log('arr[col][row]', arr[this.fpm(col) - 1][row], count)

    //       // } else {

    //       //   temp.push(null)
    //       // }

    //     }
    //   }

    //   console.log('temp', temp)
    // }
    // fpm(r) {
    //   if (r == 0) {
    //     console.log('r=1')
    //     return 1
    //   }
    //   else return r
    // }
    // fpp(r) {
    //   if (r == 5) return -1
    //   else return r
    // }
    let res = Object.assign({}, list)
    console.log('res', res)
    // for (let key in res) {
    //   console.log('res', res[key], Object.keys(res[key]))
    // }
  }
}

export default Index