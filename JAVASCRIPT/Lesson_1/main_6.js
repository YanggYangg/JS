/**
 * Kiểu số (number) trong JavaScript
 * 
 * 1. Tạo giá trị Number
 *    - Các cách tạo
 *    - Dùng cách nào? Tại sao?
 *    - Kiểm tra data type
 * 
 * 2. Làm việc với Number
 *    - To string
 *    - To Fixed
 */

//Cách 1
// var age = 20;
// var PI = 3.14;

// //Cách 2
// var otherNumber = new Number(9);

// var result = 20 / 'ABC'
// console.log(result)//NaN => kiểu số không hợp lệ
// console.log(typeof result)
// console.log(isNaN(result))//true

// var myString = age.toString();
// console.log(myString)//20

// console.log(PI.toFixed())//3 
//gtri thập phân nhỏ hơn 0.5 => làm tròn dưới và ngược lại

/**
 * Mảng trong JavaScript - Array
 * 
 * 1. Tạo mảng 
 *    - Cách tạo
 *    - Sử dụng cách nào? Tại sao?
 *    - Kiểm tra data type?
 * 
 * 2. Truy xuất mảng
 *    - Độ dài mảng 
 *    - Lấy phần tử theo index
 */
// 1 mảng 
// var languages = [
//     'JavaScript',//1 phần tử của mảng
//     'PHP',
//     'Ruby',
// ];

// console.log(languages)//(3) ['JavaScript', 'PHP', 'Ruby']

//Khuyến cáo k sử sụng cách này
// var languages = new Array(
//     'JavaScript',//1 phần tử của mảng
//     'PHP',
//     'Ruby',
// );

// console.log(Array.isArray(languages))// kiểm tra coi có phải array không
// console.log(languages.length)//3
// //Lấy theo index
// console.log(languages[2])//Ruby

/**
 * Làm việc với Array
 * 1. To string 
 * 2. Join 
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9. Slicing
 */

// Nối array
var languages = [
    'JavaScript',//1 phần tử của mảng
    'PHP',
    'Ruby',
];

// var languages2 = [
//     'NodeJS',
//     'ReactJS'
// ];

// console.log(languages.concat(languages2))//(5) ['JavaScript', 'PHP', 'Ruby', 'NodeJS', 'ReactJS']
// console.log(languages2.concat(languages))//(5) ['NodeJS', 'ReactJS', 'JavaScript', 'PHP', 'Ruby']


// console.log(languages.toString())//JavaScript,PHP,Ruby
// console.log(languages.join(''))//JavaScriptPHPRuby
// console.log(languages.join(', '))//JavaScript, PHP, Ruby

// //pop: xóa ptu cuối mảng và trả lại chính ptu đã xóa
// console.log(languages.pop())// Ruby; Xóa elements cuối mảng và trả về ptu đã xóa
// console.log(languages)//(2) ['JavaScript', 'PHP']

// //push: thêm ptu ở cuối mảng, thêm 1 or nhiều ptu
// console.log(languages.push('Dart'))//3
// console.log(languages)//(3) ['JavaScript', 'PHP', 'Dart']

// //shift: xóa ptu ở đầu mảng và trả lại chính ptu đã xóa
// console.log(languages.shift())//JavaScript
// console.log(languages)//(2) ['PHP', 'Dart']

// //Unshift: thêm ptu vào đầu mảng, thêm 1 or nhiều ptu
// console.log(languages.unshift('NodeJS'))//3
// console.log(languages)//(3) ['NodeJS', 'PHP', 'Dart']

// //Splicing: có thể xóa, cắt hoặc chèn ptu mới vào mảng 

// //Tham số đầu là chỉ mục (nơi đặt con trỏ), tham số tiếp là số lượng element muốn xóa
// languages.splice(1, 1)
// console.log(languages)//(2) ['NodeJS', 'Dart']

// // Tham số 1 vị trí sẽ chèn, tham số 2 quyết định có xóa element nào ko, tham số 3 chèn
// languages.splice(1, 0, 'ReactJS')// tham số thứ 3 chèn 
// console.log(languages)//(3) ['NodeJS', 'ReactJS', 'Dart']


//Slicing: cắt 1 vài element của mảng
// console.log(languages.slice(1, 2))// ['PHP']
// console.log(languages.slice(0))//Copy mảng:  ['JavaScript', 'PHP', 'Ruby']
