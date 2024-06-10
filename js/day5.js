//? Js Objects

const person = {
    name: "Faizan",
    rollNo: "121",
    dob: 2002,
    // calcAge: function(){
    //     return 2024 - this.dob;
    // }
    calcAge: () => { //lexical this
        return 2024 - this.dob;
    }

}

console.log(person.name);
console.log(person["name"]);
console.log(person)

person.rollNo = 404;
person["rollNo"] = 404;

console.log(person);
console.log(person.calcAge());

const student = { ...person };

student.hobby = 'coding';
console.log("student: ", student);
console.log("person: ", person);


const fruits = ["apple", "orange", "banana"];
const vegetable = [...fruits];
// console.log(fruits, vegetable);
vegetable.push("tomato")
// console.log(fruits, vegetable);


const { type: t, model, color, engine } = {
    type: "Fiat",
    model: "500",
    color: "white",
    engine: [{

    }]
};
console.log(t, model, color);

function learningObj(type, model, color) {
    const car = {
        type, // type: type
        model,
        color,

    }
    console.log(car);

}
learningObj("Fiat", "500", "white");

// Strings
let name = "Faizan Mustafa";
// ['F','a','i','z','a','n',]
console.log(name[3]);




// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('!'));
// // Expected output: true

// console.log(str1.endsWith('best', 17));
// // Expected output: true

// const str2 = 'Is this a question?';

// console.log(str2.endsWith('question'));
// Expected output: false

// const str1 = '5';

// console.log(str1.padStart(2, '*'));
// // Expected output: "05"

// const fullNumber = '2034399002125581';
// const last4Digits = fullNumber.slice(-4);
// console.log(last4Digits);
// const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

// console.log(maskedNumber);
// // Expected output: "************5581"

const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Dog", 'my'));
// Expected output: "I think my dog is cuter than your dog!"

const regex = /Dog/i;
console.log(paragraph.replace(regex, 'ferret'));
// Expected output: "I think Ruth's ferret is cuter than your dog!"

// Practice
// Array Methods
// String Methods
