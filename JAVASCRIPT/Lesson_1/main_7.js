// Object trong JavaScript
// var emailKey = 'email';

// var myInfo = {
//     name: 'Quynh Giang', // cặp key-value
//     age : 20, 
//     address: 'TPHCM, VietNam',
//     [emailKey] : 'nguyenquynhgiang1324@gmail.com',
//     getName: function() {
//         return this.name;//this trong ngữ cảnh này là myInfo
//     }
// };

// console.log(myInfo);//{name: 'Quynh Giang', age: 20, address: 'TPHCM, VietNam'}

// //Thêm 1 cặp key-value sau khi object được tạo

// myInfo.email = 'nguyenquynhgiang1324@gmail.com';
// console.log(myInfo);//{name: 'Quynh Giang', age: 20, address: 'TPHCM, VietNam', email: 'nguyenquynhgiang1324@gmail.com'}

// //Lấy value ra ngoài
// console.log(myInfo.name);//Quynh Giang
// console.log(myInfo['email']);//nguyenquynhgiang1324@gmail.com

// var myKey = 'address';
// console.log(myInfo[myKey]);

// console.log(myInfo);//{name: 'Quynh Giang', age: 20, address: 'TPHCM, VietNam', email: 'nguyenquynhgiang1324@gmail.com'}

/**
 * Xóa 1 cặp key-value
 */

// delete myInfo.age;
// console.log(myInfo);//{name: 'Quynh Giang', address: 'TPHCM, VietNam', email: 'nguyenquynhgiang1324@gmail.com'}

// console.log(myInfo);//{name: 'Quynh Giang', age: 20, address: 'TPHCM, VietNam', email: 'nguyenquynhgiang1324@gmail.com', getName: ƒ}
/**
 * Cái getName sẽ gọi đến function trên, và function đó 
 * sẽ return lại this.name là Quynh Giang
 * Và chữ Quynh Giang được trả về sau đó nó đưa về console.log
 */
// console.log(myInfo.getName());//Quynh Giang

//function --> Phương thức / Method
// Others --> Thuộc tính / Property

/**
 * Object constructor : xây dựng đối tượng 
 */

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// var author = new User('Quynh', 'Giang', 'Avatar');
// var user =  new User('Nguyen', 'A', 'Avatar');

// author.title = 'Chia sẻ dạo tại F8';//User {firstName: 'Quynh', lastName: 'Quynh', avatar: 'Avatar', title: 'Chia sẻ dạo tại F8'}
// user.comment = 'Liệu có khóa asp.net không ad';//User {firstName: 'Nguyen', lastName: 'Nguyen', avatar: 'Avatar', comment: 'Liệu có khóa asp.net không ad'}


//Xem lại bản thiết kế từ chính đối tượng khỏi tạo
// console.log(author.constructor === User);//true

// console.log(author);//User {firstName: 'Quynh', lastName: 'Quynh', avatar: 'Avatar'}
// console.log(user);//User {firstName: 'Nguyen', lastName: 'Nguyen', avatar: 'Avatar'}

// console.log(author.getName());//Quynh Giang
// console.log(user.getName());//Nguyen A

/**
 * Object prototype - Basic
 * 
 * 1. Prototype là gì ?
 * 2. Sử dụng khi nào?
 */

// function User(firstName, lastName, avatar){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() {
//         return `${this.firstName}  ${this.lastName}`;
//     }
// }

// User.prototype.className = 'F8';//prototype giúp thêm 1 thuộc tính
// User.prototype.getClassName = function() {
//     return this.className;
// }

// var user = new User('Quynh', 'Giang', 'Avatar 1');
// var user2 =  new User('Nguyen', 'A', 'Avatar 2 ');

// console.log(user.className);
// console.log(user2.getClassName());