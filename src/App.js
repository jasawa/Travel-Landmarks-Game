import React, { Component } from "react";
import LandmarkCard from "./components/LandmarkCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import landmarks from "./landmarks.json";
import "./App.css";

// initialize bestScoreOverAll and scoreInThisRound to begin game
let bestScoreEver = 0;
let scoreInThisRound = 0;

class App extends Component {
  
  // Setting this.state.landmarks to the landmarks json array
  // Setting state to update the counters: bestScoreOverall, scoreInThisRound
  state = {
    landmarks,
    bestScoreEver,
    scoreInThisRound
  };

  // when a landmark is clicked
  setClicked = id => {
    // Make a copy of the state of landmarks array to work with
    const landmarks = this.state.landmarks;

    // Filter this.state.landmarks for landmarks with an id equal to the id that was clicked
    const clickedLandmark = landmarks.filter(landmark => landmark.id === id);

    // if the isClicked value of the image is already true (ie the user had already clicked it) then this round of the gave is over

    if (clickedLandmark[0].isClicked) {
      // reset the scoreInThisRound to zero
      scoreInThisRound = 0;

      // reset the all the landmarks to isClicked is false
      for (let i=0; i<landmarks.length; i++) {
        landmarks[i].isClicked = false;
      }

      this.setState({ scoreInThisRound });
      this.setState({landmarks});

    // if the landmark the user clicked hadn't been clicked before and there are more landmarks the user hasn't clicked yet
    } else if (scoreInThisRound < 12) {
      // set the isClicked on this landmark to true
      clickedLandmark[0].isClicked = true;
      //increase by one the scoreInThisRound
      scoreInThisRound++;

      // if the scoreInThisRound is higher than bestScoreEver
      if (scoreInThisRound > bestScoreEver) {
        bestScoreEver = scoreInThisRound;
        this.setState({ bestScoreEver });
      }

    // if the user has clicked all the landmarks without repeats
    } else {
      // set the last clicked landmark to true
      clickedLandmark[0].isClicked = true;
      
      bestScoreEver = 12;
      this.setState({ bestScoreEver });

      // reset the scoreInThisRound
      scoreInThisRound = 0;

      // reset all the isClicked to false
      for (let i=0; i<landmarks.length; i++) {
        landmarks[i].isClicked = false;
      }

    }

    // Shuffle the landmarks cards array
    landmarks.sort(function(a, b){return 0.5 - Math.random()});

    // set this.state.landmarks equal to the new shuffled landmarks array
    this.setState({ landmarks });
    this.setState({ scoreInThisRound })

  };

  // Map over this.state.landmarks and render a LandmarkCard component for each landmark object
  render() {
    return (
      <Wrapper>
        <Title>Landmarks Memory Game</Title>

        <Subtitle>
          Unrepeated Clicks so far:  {this.state.scoreInThisRound}
          <br/>
          Your Best Score Ever:  {this.state.bestScoreEver}
        </Subtitle>
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
