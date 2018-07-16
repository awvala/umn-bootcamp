/*# **Instructions**
* Over the course of this activity you are going to be using constructors to create simplistic characters for use within a very basic Roleplaying Game (RPG)
* Each character created using your constructor should have the following properties...
  * Name: The character's name --> String
  * Profession: What the character does for a living --> String
  * Gender: The character's gender --> String
  * Age: The character's age --> Integer
  * Strength: Abstraction for how strong the character is --> Integer
  * HitPoints (HP): Abstraction for how much health the character has --> Integer
  * PrintStats: Function which prints all of a character's properties to the screen
  * Once you have created your constructor, create two new characters and print their properties to the screen
  * Fool around and get comfortable with your constructor before moving onto the next parts of the activity
  * 
* Now that you feel comfortable with your constructor, it is time to start making this character creation system a little more reactive by adding in some more methods...
  * IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and determining whether they are above or below zero.
  * Attack: Function which takes in a second character's hitpoints and subtracts this character's strength from it.
  * LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.

* BONUS: After completing the previous sections and making sure they work, you now have everything you need to create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of the activity as, by completing the above sections you are well on your way to mastering constructors!
*/

function CreateCharacter (name, profession, gender, age, strength, hp) {
    this.name = name,
    this.profession = profession,
    this.gender = gender,
    this.age = age,
    this.strength = strength,
    this.hp = hp,
    this.PrintStats = function () {
        console.log ("Name:  " + this.name);
        console.log ("Profession:  " + this.profession);
        console.log ("Gender:  " + this.gender);
        console.log ("Age:  " + this.age);
        console.log ("Strength:  " + this.strength);
        console.log ("HP:  " + this.hp);
    },
    this.IsAlive = function () {
        if (this.hp < 0) {
            console.log (this.name + " be super dead!")
        } else {
            console.log (this.name + " has " + this.hp + " HP(s) remaining.")
        }
    },
    this.Attack = function (character) {
        var secondChar = character.name;
        var secondCharHP = parseInt(character.hp);
        character.hp = (parseInt(secondCharHP) - parseInt(this.strength));
        console.log(this.name + " attacks " + secondChar + " for " +  this.strength + " points of damage!");
        console.log(secondChar + " has " + character.hp + " hp(s) remaining");
    },
    this.LevelUp = function () {
        this.age++;
        this.strength = parseInt(this.strength) + 5;
        this.hp = parseInt(this.hp) + 25;
    }
}

var dooley = new CreateCharacter ("Dooley", "Watchman", "Male", "39", "7", "100");
var milford = new CreateCharacter ("Milford", "Druid", "Male", "44", "2", "80");
var anasthra = new CreateCharacter ("Anasthra", "Sorcerer", "Female", "8", "18", "90");
var samwise = new CreateCharacter ("Samwise", "Gaffer", "Male", "65", "5", "120");

console.log("================");
milford.PrintStats();
console.log(" ");
console.log("++++++++++++++++");
console.log(" ");
milford.Attack(dooley);
milford.IsAlive();
console.log(" ");
console.log("!!!!  LEVEL UP  !!!!");
milford.LevelUp();
milford.PrintStats();
console.log("================");
