/**Bai 2*/
const intergers=[1,2,3,4,6,7,8,9,10,11];
const evenNumbers = intergers.filter(
    (intergers, index)=> {
        return intergers%2===0;
    }
);
console.log(evenNumbers);
//FILTER
// const numbers = [1,2,3,4, 9, 10];

// const filteredNumbers = numbers.filter(
//     (number, index) => {
//         return number<=5
//     }
// )
//  /bai1
// / method ~ hàm
// forEach
// const provinces = [`Quang Ngai`,`Binh Phuoc`,`Quang Nam`,`Quang Ninh`,`Ninh Binh`, `Bac Ninh`]
// provinces.forEach((provinces, index)=>{
//     console.log(`${provinces} - ${index}`);
// })