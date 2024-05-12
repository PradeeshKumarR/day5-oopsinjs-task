// Quesion 1
// Class - Movie
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
function getPG(movies) {
    const pgMovies = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].rating === "PG") {
            pgMovies.push(movies[i]);
        }
    }
    return pgMovies;
}

let movie1 = new Movie("Movie1", "Studio1", "PG");
let movie2 = new Movie("Movie2", "Studio2", "R");
let movie3 = new Movie("Movie3", "Studio3");
let movie4 = new Movie("Movie4", "Studio4", "PG-13");
let movies = [movie1, movie2, movie3, movie4]

const pgMovies = getPG(movies);
console.log(pgMovies);

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG­13");
console.log(casinoRoyale);

// Question 2
// Convert the UML diagram to Typescript class. - use number for double
class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        return this.color;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

let circle = new Circle();
console.log(circle);
console.log(circle.getRadius());
console.log(circle.getColor());
console.log(circle.getRadius(), circle.getColor());
circle.setRadius(5.0);
console.log(circle.getRadius());
circle.setColor("green");
console.log(circle.getColor());
console.log("Circle toString :", circle.toString());
console.log(circle.getArea());
console.log(circle.getCircumference());

//Question 3
//Write a “person” class to hold all the details.
class Person {
    constructor(name, age, gender, occupation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }

    // Method to introduce the person
    introduce() {
        return `Hi, my name is ${this.name}, I am ${this.age} years old. I work as a ${this.occupation}.`;
    }

    // Method to check if the person is eligible to vote
    canVote() {
        return this.age >= 18 ? true : false;
    }
}

// Creating an instance of Person class
const person1 = new Person("Ravi", 25, "Male", "Software Engineer");
console.log(person1.introduce());
console.log(person1.canVote());

//Question 4
//Write a class to calculate the Uber price.
class UberPriceCalculator {
    constructor(distance, time, surgeMultiplier = 1) {
        this.distance = distance; // in miles
        this.time = time; // in minutes
        this.surgeMultiplier = surgeMultiplier; // surge multiplier (default is 1)
    }

    // Method to calculate the fare
    calculateFare(baseFarePerMile, baseFarePerMinute, surgeMultiplier) {
        const totalFare = (this.distance * baseFarePerMile) + (this.time * baseFarePerMinute) * surgeMultiplier;
        return totalFare;
    }
}

const distance = 10; // in miles
const time = 30; // in minutes
const surgeMultiplier = 1.5; // surge multiplier (if any)

const uberCalculator = new UberPriceCalculator(distance, time, surgeMultiplier);
const fare = uberCalculator.calculateFare(15, 0.2, surgeMultiplier); // base fare per mile = $1.5, base fare per minute = $0.2

console.log(`The estimated fare for your ride is ${fare.toFixed(2)}INR.`);