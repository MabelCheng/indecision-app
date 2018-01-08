// const square = function(x){
//     return x * x;
// };
function squareName(x){
    return x*x;
}
console.log(squareName(7));
// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;


// console.log(squareArrow(4));

//get FirstName
let fullName = "Mabel Cheng";
const getFirstName = (name) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName(fullName));
fullName = "Yuhong cheng"
const getFirstNameShorter = (name) => fullName.split(' ')[0];
console.log(getFirstNameShorter(fullName));