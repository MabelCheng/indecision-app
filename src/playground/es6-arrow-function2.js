//argument object - no longer bound with arrow functions
const add = function(a,b){
    console.log(arguments);
    return a + b;
};

/*
const add = (a, b) => {
    console.log(arguments); // 
}
*/
console.log(add(5,1,1001));

// this keyword - no longer bound with arrow functions

const user = {
    name:"cheng",
    locations : ["houston","shanghai"],
    printPlacesLived : function(){
        console.log(this.name);
        console.log(this.locations);

        const that = this;
        this.locations.forEach(function(location) { //此处的this rebound了
         //   console.log(this.name + ' has lived in ' + location);
            //此处的this.name无法识别，常见的方法是新建一个that，如上,然后写成如下
            console.log(that.name + ' has lived in ' + location);
        });
    }
};

//es6 可以写成如下
const user2 = {
    name:"cheng",
    locations : ["houston","shanghai"],
    printPlacesLived : function(){
        console.log(this.name);
        console.log(this.locations);
        this.locations.map((location) => { // can transform the array   
            return location;
        });
        this.locations.forEach((location) =>{
            console.log(this.name + '2 has lived in' + location);
        });
    }
};
//or
/*
const user2 = {
    name:"cheng",
    locations : ["houston","shanghai"],
    printPlacesLived(){
        console.log(this.name);
        console.log(this.locations);
        this.locations.forEach((location) =>{
            console.log(this.name + '2 has lived in' + location);
        });
    }
};
*/

//map 简介
const userMap = {
    name : "mabel",
    locations : ['shanghai', 'houston'],
    printPlacesLived(){
        return this.locations.map((location) => this.name + 'map has lived in ' + location);
    }
};

console.log(userMap.printPlacesLived());
//error
const user3 = {
    name:"cheng",
    locations : ["houston","shanghai"],
    printPlacesLived : () =>{ //无法使用this
        console.log(this.name);
        console.log(this.locations);
        this.locations.forEach((location) =>{
            console.log(this.name + '2 has lived in' + location);
        });
    }
};




user.printPlacesLived();
user2.printPlacesLived();

//test
const multiplier = {
    numbers:[12, 34, 55, 2, 1],
    multiplyBy : 3,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }

};
console.log(multiplier.multiply());
