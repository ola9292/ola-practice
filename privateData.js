import userData from "./data.js";

/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/
function transformData(data){
    // use map to loop through the data
    return data.map(person => {
        // return an object with the two new properties
        // concat the first and last name
        const full = `${person.name.first} ${person.name.last}`;
         // create a new date object, passing in the dob
        // format by calling toDateString() method
        const formattedDOB = 

        // return {
        //     fullName: `${person.name.first} ${person.name.last}`,
        //     birthday: new Date(person.dob.date).toDateString()
        // } 
    })
}

console.log(transformData(userData));
