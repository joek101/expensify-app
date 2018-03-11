const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'New York',
        temp: 33
    }
};

//console.log(`My name is ${person.name}. I am ${person.age} years old.`);

// const { city, temp } = person.location;


/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {title, author} = book;

console.log(`Title is ${title}. Author is ${author}`);

const {name = "Self"} = book.publisher;

console.log(`${name}`);
 */
/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        
    }
};

const { name = 'Self-Published' } = book.publisher;

console.log(name); */


const address = ['1299 S Juniper Street', 'Philadephia', 'PA', '19147']

//console.log(`You are in ${address[1]} ${address[2]}`);

const [add, city, state, zip] = address;

console.log(`You are in ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

//‘A medium Coffee (hot) costs $2.

const [coffee, , medium] = item;

console.log(`A medium ${coffee} cost ${medium}`);