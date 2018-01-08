
class Person{
    
  /*  constructor(name){
        this.name = name || 'test';
    }*/
    constructor(name = 'Anonymous',age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `hi! + I am ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
};

class student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;//奇特的写法
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `Their major is ${this.major}`; 
        }
        return description;
    }
};


class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()){
            greeting += `I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
        
    }
}

const me = new Traveller('Mabel Cheng',24, 'Computer Science');
console.log(me.getGreeting());
const other = new Traveller();
console.log(other.getGreeting());