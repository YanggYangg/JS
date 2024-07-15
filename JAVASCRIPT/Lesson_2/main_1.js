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

// function getRandNumbers(min, max, length) {
//     let randomNumbers = [];
//     for(let i = 0; i < length; i++){
//         let randomNum = Math.random() * (max - min) + min;
//         randomNumbers.push(randomNum); // Thêm số ngẫu nhiên vừa tạo vào mảng randomNumbers.
//     }
//     return randomNumbers;
// }


// console.log(getRandNumbers(1, 10, 5)); 


var myArray = [
    'Javascript',
    'PHP',
    'Ruby',
    'Java',
    'Python'
];
//console.log(myArray[0]);

var arrLength = myArray.length;
console.log("element: " + arrLength);//4

for (var i = 0; i < arrLength; i++) {
    //console.log(i); // 1 2 3 4
    console.log(myArray[i]); // Javascript PHP Ruby Java Python
}

//Bai tap 
/**
 * Tính tổng giá trị 1 đơn hàng 
 * Cho trước mảng orders là danh sách chứa các khóa học,
 * các mặt hàng được để thể hiện dưới dạng object và đều có 1 key là price
 * để thể hiện giá trị mặt hàng đó 
 */

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(orders){
    var sum = 0;
    for (var i=0;i< orders.length;i++) {
        sum = sum + orders[i].price
    }
    return sum
}


// Expected results:
getTotal(orders) // Output: 8700000


