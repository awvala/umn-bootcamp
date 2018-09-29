import React from "react";

const name = "Andrew";
const noVowels = name.replace(/[a|e|i|o|u|A|E|I|O|U]/g,'');
const numb = name.length;
const thoughts = "is a critical skill to master";


const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {numb} letters</h2>
        <h2>My name without vowels is {noVowels}</h2>
        <h2>I think React {thoughts}</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
