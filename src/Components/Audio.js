import React, { Component } from "react";
import './Audio.css'

// Import your audio file
import song from "../audio.wav";

class App extends Component {
  // Create state
  state = {
    click:"off",

    // Get audio file in a variable
    audio: new Audio(song),

    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {
     let isonoff = this.state.isPlaying;

      if(isonoff === false){
        this.state.click = "ON"

      }
      else{
        this.state.click = "OFF";
      }
    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {

      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
      <div className="Audiio">
        {/* Show state of song on website */}

        {/* Button to call our main function */}
        <button onClick={this.playPause} className='soundbutton'>
         <span className="soundd"> Sound is : </span> {this.state.click}
        </button>
      </div>
    );
  }
}

export default App;