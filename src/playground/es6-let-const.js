var nameVar = ' mabel';
nameVar = 'Cheng';
console.log('nameVar',nameVar);

let nameLet = 'Jen';
nameLet = 'julia';
console.log('nameLet',nameLet);

const nameConst = 'sdf';
console.log('nameConst',nameConst);


//block scoping

const fullName = "Mabel Cheng";
let firstName;
if(fullName){
   //var firstName = fullName.split(' ')[0];
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);