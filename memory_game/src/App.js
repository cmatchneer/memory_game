import React, { Component } from "react";
import Sunny from "./components/SunnyPeople";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import WinningButton from "./components/WinningButton";
import Sign from "./components/Sign";
import Sound from "react-sound"
import sunny from "./sunny.json";

import winning from "./assets/sounds/golden_god.m4a"
const styles ={
  position:{
    position:"relative",
    
  }
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    sunny,
    score:0,
    highscore:0,
    showScore:true
  };
   shuffle= a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    this.setState({sunny:a});
}
winning = (sunny) =>{
  // this.shuffle(sunny);
  this.myRef = React.createRef();
  console.log("test");
  this.setState({showScore:true});
  this.setState({score:0});
  this.setState({highscore:0})
  
  return (
   <Sound
      url={winning}
      playStatus={Sound.status.PLAYING}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}  
    />
   )
  ;
  

}
componentDidMount = ()=>{
  this.shuffle(this.state.sunny);
}
handleCorrectGuess(sunny){
  this.setState({score: this.state.score +1})
  this.shuffle(sunny)
}
handleIncorrectGuess(sunny){
  if(this.state.highscore =1){
    this.winning(sunny);
  }else{
    this.setState({highscore:this.state.score});
    this.setState({score:0});
    this.shuffle(sunny);
  }
}

handleItemClick = id => {
  
  let guessedCorrectly = false;
  const newSunny = this.state.sunny.map(item => {
    const newItem = { ...item };
    if (newItem.id === id) {
      if (!newItem.clicked) {
        newItem.clicked = true;
        guessedCorrectly = true;
      }
    }
    return newItem;
  });
  guessedCorrectly
    ? this.handleCorrectGuess(newSunny)
    : this.handleIncorrectGuess(newSunny);
};
  

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };


  render() {
    
    return (
      <Wrapper styles ={styles.position}>
        
        <Sign> </Sign>
        {this.state.showScore?<Title score={this.state.score} highscore={this.state.highscore}></Title>:<WinningButton winning={this.winning}></WinningButton>}
        
        {this.state.sunny.map(sunny => (
          <Sunny
            
            id={sunny.id}
            key={sunny.id}
            name={sunny.name}
            image={sunny.image}
            click ={this.handleItemClick(sunny.id)}
           
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
