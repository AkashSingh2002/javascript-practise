const mySym = Symbol("key1")

const jsUser = {
    name: "akash",
    "full name": "Akash singh",
    [mySym]: "mykey1",
    email: "akash@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser["mySym"]);

// Object.freeze(jsUser)
jsUser.email = "akash@gtpgmalcom"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
