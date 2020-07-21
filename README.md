# Animal_OOP
concepts of OOP

Search...
Umuzi Remote work
1. Syllabus
2. Topics
3. Workshops
4. Projects
Android with Kotlin Projects
Constraint Layout Using Layout Editor
Data Binding Basics
Linear layout using the Layout Editor
User Activity
Androids
Incremental Counter
Information Page
Angular Tutorial
Assertive programming kata
Bootcamp Writing Assignment
Build your first personal website
Capstone project
Gmail Text Scraper
Pair Stairs
Spaced Repitition machine to help you remember what you read
The Quizmaster
build a Chrome Extension that measures time spent in meetings
Consume Github API
DAGs with Airflow
Data-science-specifics
MEDIUM: Cross-validation & Simple Linear Regression
Dashboard Assignment
EASY: Google Data Studio Assignment
HARD: Live Dashboard Assignment
EASY: Plotly Dashboard Assignment
HARD: Webscraping and Live Dashboard Assignment
Data Modelling Challenges
HARD: Network Intrusion
Data Visualisation Projects
MEDIUM: Evolution of Linux Visualisation
MEDIUM: Financial Services Use in Tanzania
MEDIUM: Data Wrangling
MEDIUM: Decision Trees
Introduction to Jupyter Notebooks
MEDIUM: K-Means Clustering Assignment
Logistic regression
MEDIUM: Predict breast cancer
MEDIUM: Predict credit card approvals
MEDIUM: Multivariate Linear Regression
MEDIUM: Natural language processing
MEDIUM: OOP for data science
MEDIUM: Statistical Thinking
Webscraping Assignment
Distributed workloads with ZeroMQ
Email random inspirational quote
Expose a simple REST api for your game
ExpressJS
Game of life: Angular elements
Git Basic Exercises
How to submit your project
Java Projects
Consume own api using curl
File IO + Logging + Errors
Introduction to Spring Boot
Introduction to Spring Boot - part 1
Introduction to Spring Boot - part 2
Introduction to Spring Boot - part 3
Introduction to Spring Boot - part 4
Introduction to Spring Infrastructure
Introduction to Spring Infrastructure part 1
Introduction to Spring Infrastructure part 2
Introduction to Spring Infrastructure part 3
Java Generics
Java collections
Java data structures
SQL Extended
Level 1 programming katas
Linux challenges
Advanced Linux challenges
Beginner Linux challenges
Memory Game: rebuild using a modern web frontend framework
Memory game in vanilla js
Memory game using Angular Material
Nodejs Challenges
1: Node & File IO
2 (alt): Node & mongoDB assignment
3: Express, forms and templates
4: Expose a JSON API
Add a little Ajax
Node & SQL assignment
OOP Excercises
Animals
Animals Part 1. OOP basics
Animals Part 2. Adding Tests
Bank Accounts
Dice

Project structure
Java
The code you push to git should have the following structure:

├── build.gradle
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
├── settings.gradle
└── src
    ├── main
        └── java
            ├── Animal.java       <-------- names are important
            ├── Cat.java          <-------- names are important
            ├── Dog.java          <-------- names are important
            ├── Home.java         <-------- names are important
            └── MainProgram.java  <-------- names are important

Please refer to the following to find out more: TOPICS: [TODO] Java project submission requirements

Instructions
This Challenge should test topics from your OOP knowledge

Encapsulation
Inheritance
Polymophism
Composition
Screenshot 2019-11-11 at 10 21 38

In this challenge you will create 3 classes

Super class called Animal
Dog and Cat class which both extends Animal class (a dog is an animal and a cat is an animal)
Dog and Cat class should only have 1 function, which is their own implementation of the sound() function. This is polymorphism
a Home class. But we’ll talk about that later…
// Java

? dog = new Dog()

dog.eat()    // -> 'Rax eats'
dog.sounds() // -> 'Dog barks'

? cat = new Cat()

cat.eat()    // -> 'Stormy eats'
cat.sounds() // -> 'Cat meows'
// Javascript

var dog = new Dog();

dog.eat(); // -> 'Rax eat'
dog.sounds();// -> 'Dog barks'

var cat = new Cat();

cat.eat();// -> 'Stormy eats'
cat.sounds();// -> 'Cat meows'

Now let’s add composition. Make a new class called Home. Lots of people have dogs and cats in their homes. Home should have a function called adoptPet that takes any Animal as an input. The new pet should be stored in the Home object in an array/list. The Home object should also have a function called makeAllSounds. It should work like this:

// Java

Home home = new Home()
? dog1 = new Dog()
? dog2 = new Dog()
? cat = new Cat()

home.makeAllSounds() // this doesn't do anything
home.adoptPet(dog1)
home.makeAllSounds()
// this prints:
// Dog barks

home.adoptPet(cat)
home.makeAllSounds()
// this prints:
// Dog barks
// Cat meows

home.adoptPet(dog2)
home.makeAllSounds()
// this prints:
// Dog barks
// Cat meows
// Dog barks
// Javascript

var home = new Home();
var dog1 = new Dog();
var dog2 = new Dog();
var cat = new Cat();


home.makeAllSounds();// this doesn't give/return any result/data
home.adoptPet(dog1);
home.makeAllSounds();
// this prints :
// Dog barks

home.adoptPet(cat);
home.makeAllSounds();
// this prints :
// Dog barks
// Cat meows

home.adoptPet(dog2);
home.makeAllSounds();
// this prints :
// Dog barks
// Cat meows
//Dog barks


Up for a Challenge?
This section is not compulsory. If you do this we’ll think you’re cool.

Add some functionality to adoptPet so that an error/exception gets raised if you try to adoptThe same pet twice

eg:

home.adoptPet(dog1) // totally ok
home.adoptPet(dog1) // not ok at all
RAW CONTENT URL
