import React, { Component } from "react";
import LandmarkCard from "./components/LandmarkCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import landmarks from "./landmarks.json";
import "./App.css";

class App extends Component {
  // Setting this.state.landmarks to the landmarks json array
  state = {
    landmarks
  };

  // this fuction will be removed xxxxxxxxxxxx
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.landmarks equal to the new landmarks array
    this.setState({ friends });
  };

  // Map over this.state.landmarks and render a LandmarkCard component for each landmark object
  render() {
    return (
      <Wrapper>
        <Title>Landmarks List</Title>
        {this.state.landmarks.map(landmark => (
          <LandmarkCard

            id={landmark.id}
            key={landmark.id}
            image={landmark.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
