// Bai3
const averageScores = [10,5,6,7,9];
const hasUnderAverageScores = averageScores.some(
    (number) => {
        return number <5;
    }
)
console.log(hasUnderAverageScores ? `co sinh vien duoi trung binh`:`khong ban nao duoi trung binh`);
const allPass = averageScores.every(
    (number)=> {
        return number >=5;
    }
)
console.log(allPass ? `tat ca deu qua mon`:`van con sinh vien khong qua mon`);
//Every
// const isAllOddNumbers = numbers.every(
//     (number) => {
//         console.log(number);
//         return number %2 !==0;
//     }
// );
/**Some, unknown(cần trả gì đó) và void(rỗng)
 * có boolean => phải có const/let,...
 * */
// const numbers=[1,2,3,4,6,7,8,9,10,11];
// const hasEvenNumbers = numbers.some(
//     (numbers, index)=> numbers%2===0;
// )
// console.log(hasEvenNumbers);

 /* Bai 2*/
// const intergers=[1,2,3,4,6,7,8,9,10,11];
// const evenNumbers = intergers.filter(
//     (intergers, index)=> {
//         return intergers%2===0;
//     }
// );
// console.log(evenNumbers);
//1 dòng có thể bỏ {}:
//có thể xóa index
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(filteredNumbers); 

//FILTER
// const numbers = [1,2,3,4, 9, 10];

// const filteredNumbers = numbers.filter(
//     (number, index) => {
//         return number<=5
//     }
// )
/**bai1*///
// / method ~ hàm
// forEach
// const provinces = [`Quang Ngai`,`Binh Phuoc`,`Quang Nam`,`Quang Ninh`,`Ninh Binh`, `Bac Ninh`]
// provinces.forEach((provinces, index)=>{
//     console.log(`${provinces} - ${index}`);
// })