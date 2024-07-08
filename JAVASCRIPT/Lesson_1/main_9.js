//Cau lenh re nhanh if else

var date = 7;

// Cach viet chua duoc toi uu vi phai so sanh nhieu lan

// if(date === 2) {
//     console.log('Hom nay la thu 2');
// }

// if(date === 3) {
//     console.log('Hom nay la thu 3');
// }

// if(date === 4) {
//     console.log('Hom nay la thu 4');
// }

/**
 * Tinh chat if else luon luon lot vao mot nhanh
 */

if(date === 2) {
    console.log('Hom nay la thu 2');//nhanh 1
}
else if(date === 3) {
    console.log('Hom nay la thu 3');//nhanh 2
}
else if(date === 4) {
    console.log('Hom nay la thu 4');//nhanh 3
}
else{
    console.log('Khong biet');
}

//Bai Tap
/**
 * Khi a chia het cho 3 thi return ve 1
 * Khi a chia het cho 5 thi return ve 2
 * Khi a chia het cho 15 thi return ve 3
 */

function run(a) {
    if(a%15 === 0){
        return 3;
    }else if(a%3 === 0){
        return 1;
    }else if(a%5 === 0){
       return 2;
    }
}


console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3