var square=x => x*x;

console.log(square(9));

var user={
  name:"Manmeet",
  sayHi:() => {
    console.log(`Hi this is ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi this is ${this.name}`);
  }
};

user.sayHiAlt("Man",10,true);
