# MCR Codes Virtual Pet
This is my virtual pet project for [Manchester Codes](https://www.manchestercodes.com/) as part of the Programming Fundamentals module.

## Description
This program allows you to create a virtual pet, be sure to look after it!

### Features
* Create your own pet
* You can give them a name
* They can get older
* As they get older, they get hungrier and less fit
* You can walk your pet to increase it's fitness
* You can feed your pet to decrease it's hunger
* You can talk to your pet to see if it needs feeding or walking
* If your pet gets too hungry or unfit, it will DIE
* If your pet ages to 30, it will DIE

## Requirements

### Hard Requirements
* [Node JS](https://nodejs.org/en/) - to run the program as per the [instructions](#getting-started)

### Application Dependencies
Currently none.

### Development Dependencies
* [Jest](https://jestjs.io/) - run `npm install` to install it as a development dependency.

## Getting Started
1. Open up your terminal and clone the repository onto your local machine using `git clone`, or fork it if you wish and then run `git clone`.
2. Navigate into the directory that you cloned the repository into (`cd virtual-pet` if you didn't specify a directory).
3. Enter the Node REPL via the `node` command.
4. Import the required modules like so: `const Pet = require('./src/virtual-pet.js')`.
5. Create your pet! e.g. `const fido = new Pet('Fido');`.
6. Once you have created your pet, you have access to several methods:
    * `growUp()`
    * `walk()`
    * `feed()`
    * `checkUp()`
    * `haveBaby(<babyName>)`

## Testing
This program was built using TDD. More specifically, using red/green refactoring with [Jest](https://jestjs.io/).

Each function was first written as a failing test, which was then built out as per the test assertions and later refactored, and tested again.

All tests are located inside of the `__tests__` directory, and if you wish to run them, you can install Jest by running `npm install`. From there, you can run `npm test` to run the tests.

## Future Plans
* ~~Refactor to allow for `MIN_HUNGER`, `MAX_HUNGER` etc. to make code more readable.~~
* ~~Allow pets to have babies!~~
* Convert to ES6 Class Syntax.

## License
This project is licensed under the [MIT license](https://opensource.org/licenses/MIT).