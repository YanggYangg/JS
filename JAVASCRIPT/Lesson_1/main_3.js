// TOÁN TỬ SO SÁNH - P2
/**
 * ===
 * 
 * !==
 * 
 */
// var a = 1;
// var b = '1';

// console.log(a !== b);

//Câu lệnh điều kiện và phép so sánh 
var a = 1;
var b = 2;

/**
 * Gthich: 
 * Có 6 giá trị khi convert (bài trước) sang boolean
 * Khi sdung toán tử and luôn đọc từ trái qua phải 
 * Nếu gặp giá trị khác 6 giá trị trên thì khi đó nó 
 * đọc sang vế phải và lấy gtri vế phải và gắn gtri cho result
 * 
 */
var result = 'A' && 'B' && 'C' ;

//Trường hợp khác 
var result_1 = 'A' && NaN && 'C' ;

// console.log(result);

//Toán tử logic không trả về boolean


// if(result){
//     console.log("DIEU KIEN DUNG");
// }else{
//     console.log("DIEU KIEN SAI");
// }


//Toán tử OR
//Khác với 6 value convert trên thì lấy luôn không cần quan tâm đến phía sau
var result_2 = 'A' || 'B' || 'C' || 'D';
console.log('result: ', result_2);//A

var result_3 = null || 'B' || 'C' || 'D';
console.log('result: ', result_3);//B

var result_4 = 'A' || 'B' || undefined || 'D';
console.log('result: ', result_4);//B


// if(result_2){
//     console.log("DIEU KIEN DUNG");
// }else{
//     console.log("DIEU KIEN SAI");
// }