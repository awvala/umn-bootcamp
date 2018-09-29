import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";



const App = () => (
  <Wrapper>
    <h1 className="title">Friends List</h1>
    {friends.map (item => <FriendCard 
      name={item.name}
      image={item.image}
      location={item.location}
      occupation={item.occupation}
    />)}
  </Wrapper>
);

export default App;
