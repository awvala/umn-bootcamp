function Programmer (name, title, age, language) {
    this.name = name,
    this.title = title,
    this.age = age,
    this.language = language,
    this.PrintStuff = function () {
        console.log ("Name: " + this.name);
        console.log ("Job Title: " + this.title);
        console.log ("Age: " + this.age);
        console.log ("Favorite Language: " + this.language);
    }
};

Programmer.prototype.printInfo = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " + this.age + "\nLanguages:" +  this.language);
}

var mark = new Programmer ("Bob", "Supreme Codester", "58", "C#");

mark.PrintStuff();
console.log ("=============");
mark.printInfo();