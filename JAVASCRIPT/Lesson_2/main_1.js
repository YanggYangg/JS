//For loop
// for(var i = 1; i <= 1000; i++) {
//     console.log(i);
// }

//BaiTap
/**
 * Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length.
 * Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên, giá trị trong khoảng từ min tới max.
 * Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên trong khoảng min - max.
 */

function getRandNumbers(min, max, length) {
    let randomNumbers = [];
    for(let i = 0; i < length; i++){
        let randomNum = Math.random() * (max - min) + min;
        randomNumbers.push(randomNum); // Thêm số ngẫu nhiên vừa tạo vào mảng randomNumbers.
    }
    return randomNumbers;
}


console.log(getRandNumbers(1, 10, 5)); 

