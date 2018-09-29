import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>

    {friends.map (item => <FriendCard 
      name={item.name}
      image={item.image}
      location={item.location}
      occupation={item.occupation}
    />)}
  </Wrapper>
);

export default App;
