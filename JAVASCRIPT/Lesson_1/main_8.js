//Đối tượng Date

// var date = new Date();//đây là 1 đối tượng 
// console.log(typeof date);//Object
// console.log(date.toString());//Sat Jul 22 2023 18:36:58 GMT+0700 (Indochina Time)

// var date1 = Date();// đây không phải là 1 đối tượng
// console.log(typeof date1);//String
// console.log(date1);//Sat Jul 22 2023 18:38:03 GMT+0700 (Indochina Time)

// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDay();

// console.log(`${day}/${month}/${year}`);//  6/7/2023

//tìm tài liệu truy cập javascript date object mozilla, chọn kết quả đầu tiên

/**
 * Math Object 
 * 
 * - Math.PI
 * - Math.round()
 * - Math.abs()
 * - Math.ceil()
 * - Math..floor()
 * - Math.random()
 * - Math.min()
 * - Math.max()
 */

// console.log(Math.PI);//3.141592653589793
// //Hàm làm tròn 
// console.log(Math.round(1.3));//1
// console.log(Math.round(1.5));//2
// //Hàm giá trị tuyệt đối
// console.log(Math.abs(-4));//4

// console.log(Math.ceil(4.1));//5

// console.log(Math.floor(5.4));//5

// //trả về 1 dãy số thập phân ngẫu nhiên nhỏ hơn 1
// console.log(Math.random());//0.7422124327156618

// var random = Math.floor(Math.random() * 5);
// var random = Math.floor(Math.random() * 100);
// if(random < 50){
//     console.log('Cường hóa thành công');
// }

// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin'
// ];

// console.log(bonus[random]);



// console.log(Math.min(-100, 1, 90, 50, 20));//-100
// console.log(Math.max(-100, 1, 90, 50, 20));//90
