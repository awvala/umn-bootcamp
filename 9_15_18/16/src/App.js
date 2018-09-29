import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  render() {
    return <Wrapper>
      <h1 className="title">Friends List</h1>
      {friends.map(friend => {
        const {name, occupation, image, location} = friend
        return <FriendCard
          name={name}
          image={image}
          occupation={occupation}
          location={location}
        /> 
      })}
    </Wrapper>
  }
}

// function App() {
// }
// 
// App.prototype = React.Component.prototype
// 
// App.prototype.render = function() {
// }

// const App = () => (
//   <Wrapper>
//     <h1 className="title">Friends List</h1>
//     <FriendCard
//       name={friends[0].name}
//       image={friends[0].image}
//       occupation={friends[0].occupation}
//       location={friends[0].location}
//     />
//     <FriendCard
//       name={friends[1].name}
//       image={friends[1].image}
//       occupation={friends[1].occupation}
//       location={friends[1].location}
//     />
//     <FriendCard
//       name={friends[2].name}
//       image={friends[2].image}
//       occupation={friends[2].occupation}
//       location={friends[2].location}
//     />
//   </Wrapper>
// );

export default App;
