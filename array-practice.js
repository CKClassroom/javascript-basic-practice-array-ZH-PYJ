var people = ['Greg', 'Mary', 'Devon', 'James'];

// 1. Using a loop, iterate through this array and console.log all of the people.
for(let key in people){
    console.log(people[key]);
}

// 2. Write the command to remove "Greg" from the array.
people.shift();
console.log(people);
// 3. Write the command to remove "James" from the array.
people.pop();
console.log(people);
// 4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log(people);
// 5. Write the command to add your name to the end of the array.
people.push("Emma");
console.log(people);
// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for(let i=0; i<people.indexOf("Mary") +1 ; i++ ){
    console.log(people[i]);
}
// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
let peopleCopy = people.slice(2);
console.log(peopleCopy);

// 8. Write the command that gives the indexOf where "Mary" is located.
console.log(people.indexOf("Mary"));
// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log(people.indexOf("Foo"));

// 10. Redefine the people variable with the value you started with. 
//Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". 
//Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
people = ['Greg', 'Mary', 'Devon', 'James'];
people.splice(people.indexOf("Devon"),1, "Elizabeth", "Artie");
console.log(people);