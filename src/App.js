import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import landmarks from "./landmarks.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    landmarks
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.landmarks and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Landmarks List</Title>
        {this.state.landmarks.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={landmark.id}
            key={landmark.id}
            name={landmark.name}
            image={landmark.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
