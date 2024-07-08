/**
 * Hàm (function) trong JavaScript
 * 
 * 1. Hàm?
 *   - Một khối mã
 *   - Làm 1 việc cụ thể
 * 
 * 2. Loại hàm
 *   - Buily-in
 *   - Tự định nghĩa
 * 
 * 3. Tính chất 
 *   - Không thực thi khi định nghĩa
 *   - Sẽ thực thi khi được gọi
 *   - Có thể nhận được tham số
 *   - Có thể trả về 1 giá trị
 * 
 * 4. Tạo hàm đầu tiên
 */

//a-z A-Z 0-9 _ $

// //Hàm không thực thi 
// function showDialog() {
//     //code
//     alert("Xin chào các bạn!");
// }

// //Sẽ thực thi khi dược gọi
// showDialog();

/**
 * Tham số hàm - JavaScript cơ bản
 * 
 * 1. Tham số ?
 *   - Định nghĩa
 *   - Kiểu dữ liệu ?
 *   - Tính private ?
 *   - 1 tham số
 *   - Nhiều tham số
 * 
 * 2. Truyền tham số
 *   - 1 tham số
 *   - Nhiều tham số
 * 
 * 3. Arguments?
 *   - Đối tượng arguments
 *   - Giới thiệu vòng for of
 */

// function writeLog(message, message2, message3) { //Tham số message
//     // console.log(typeof message);
//     console.log(message);//tính private chỉ sử dụng trong hàm thôi đem ra ngoài bị lỗi ngay !!!
//     console.log(message2);
//     if(message3){// có message3 thì mới in ra còn ko có thì ko in ra
//         console.log(message3);
//     }
// }


// writeLog('Quynh Giang','Ky thuat phan mem 17B');//đối số message

// console.log(1, 2, 3., 4);

// function writeLog(){
//     console.log(arguments)
// }
// writeLog('Quynh Giang','Khoa CNTT','Ky Thuat Phan Mem')

// function writeLog(){
//     //for lần thứ 1 chạy qua lấy element đầu tiên của array gán cho biến param
//     //Sau đó chạy vào đoạn code được viết ở trong console.log(param);
//     //Sau đó chạy đến dấu ngoặc đóng rồi nó sẽ vòng lên chạy lên lại vòng for
//     for(var param of arguments) {//arguments: đang là 1 array
//         console.log(param)//được chạy 3 lần 
//     }
//     //vòng for sẽ chạy với số lần bằng số element của arguments
// }
// writeLog('Quynh Giang','Khoa CNTT','Ky Thuat Phan Mem')

// function writeLog(){
//     var myString = '';
//     for(var param of arguments) {
//         myString += `${param} -`
//     }
//     console.log(myString)
// }

// writeLog('Nguyen Thi Quynh Giang','Khoa CNTT');

/**
 * Return trong hàm - JavaScript cơ bản
 * 
 */

// var isConfirm = confirm('Message?');
// console.log(isConfirm)

// function cong(a, b){
//     return a + b;//trả về kết quả a  +  b
// }
//  var result = cong(2, 8);
//  console.log(result)

/**
 * Một số điều cần thiết về function
 * 
 * 1. Khi function đặt trùng tên?
 * => function khai báo sau cùng sẽ ghi đè
 * 2. Khai báo biến trong hàm ?
 * => Có, khai báo như bth 
 * 3. Định nghĩa hàm trong hàm?
 * => Có
 * 
 */

// function showMessage(){
//     console.log('Message 1');
// }

// function showMessage(){
//     console.log('Message 2');
// }

// showMessage()

// function showMessage(){
//     var fullName = 'Quynh Giang';
//     console.log(fullName)
// }

// showMessage()

// function showMessage() {
//     function showMessage2() {
//         console.log('Message 2');
//     }
//     showMessage2();
// }
// showMessage();

/**
 * Các loại hàm
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */

// showMessage();//hosting ; sẽ gọi được trước khi được định nghĩa
// function showMessage() {//Declaration function
//     console.log('Declaration function');
// }


// //sẽ không gọi được trước khi được định nghĩa
// var showMessage2 = function testName() { //Expression function
//     console.log('Expression function');
// }



// showMessage2();





// setTimeout(function autoLogin() {

// });

// var myObject = {
//     myFunction: function() {

//     }
// }

