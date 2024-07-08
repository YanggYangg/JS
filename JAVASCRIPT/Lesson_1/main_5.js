/**
 * Chuỗi trong JavaScript
 * 
 * 1. Tạo chuỗi
 *  - Các cách tạo chuỗi
 *  - Nên dùng cách nào ? Lý do?
 *  - Kiểm tra data type
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết code 
 * 5. Template String ES6
 */

//backslash (\) in JavaScript
// var fullName = 'Quynh Giang la \'Co Giao\'';//Cách 1
// // var fullName1 = new String('Quynh Giang');//Cách 2
// // console.log(typeof fullName1);//object

// console.log(fullName.length)

// var firstName = 'Quynh';
// var lastName = 'Giang';

// console.log(`Toi la: ${firstName} ${lastName}`)//Template String ES6


/**
 * LÀM VIỆC VỚI CHUỖI
 */
var myString = '    Học JS tại JS JS F8!    ';

//Keyword JavaScript tring methods

//1. Length
// console.log(myString.length)

//2. Find index: tìm vị trí trong chuỗi
// console.log(myString.indexOf('JS', 6))
// console.log(myString.lastIndexOf('JS', 6))
// console.log(myString.search('JS'))

//3. Cut string
// console.log(myString.slice(4,6))//JS

//4. Replace : ghi đè
// console.log(myString.replace('JS', 'JavaScript'))//chỉ đổi được cái đầu
// console.log(myString.replace( /JS/g, 'JavaScript'))// đổi được hết 

//5. Convert to upper case: chuyển đổi chuỗi thành chữ hoa
// console.log(myString.toUpperCase())

//6. Convert to lower case: chuyển đổi chuỗi thành chữ thường
// console.log(myString.toLowerCase())

//7. Trim: loại bỏ khoảng trắng thừa 2 đầu
// console.log(myString.trim())

//8. Split : cắt 1 chuỗi thành 1 array (tìm điểm chung hợp lý)
// var language = 'JavaScript, PHP, Ruby';

// console.log(language.split(', '))//['JavaScript', 'PHP', 'Ruby']

// var language = 'JavaScript'
// console.log(language.split(''))//['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

//9. Get a character by index: lấy 1 kí tự bởi 1 index cho trước
// const myString2 = 'Quynh Giang'
//  console.log(myString2.charAt(0))//Q ; cách 1
//  // truyền 1 index ko tồn tại => nó trả về 1 chuỗi rỗng 
//  console.log(myString2[10])//Cách 2
