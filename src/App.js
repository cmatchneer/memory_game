import React, { Component } from "react";
import Sunny from "./components/SunnyPeople";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import WinningButton from "./components/WinningButton";
import Sign from "./components/Sign";
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
winning = () =>{
  this.setState({showScore:true});
  this.setState({score:0});
  this.setState({highscore:0})
  this.componentDidMount();
  let audio = new Audio(winning)
    audio.play()
}
losingAudio =(char)=>{
  switch(char){
    case"dennis":
    let dennis = require("./assets/sounds/Dennis.m4a")
    let audio = new Audio(dennis)
      audio.play()
      break;
      
  }
}
correctAudio =(char)=>{
  switch(char){
    case"dennis":
    let dennis = require("./assets/sounds/golden_god.m4a")
    let audio = new Audio(dennis)
      audio.play()
      break;
  }
}
componentDidMount = ()=>{
  // console.log(this.sunny)
  console.log("used");
}

componentDidUpdate = () => {

  
  if(this.state.score === 14 && this.state.showScore === true){

    this.buttonShow();
  }
}

buttonShow = ()=>{
  console.log("test");
  this.setState({showScore:false});
}
handleCorrectGuess(sunny){
  console.log(sunny.id);
  this.setState({score:this.state.score +1})
  this.shuffle(sunny)
}
handleIncorrectGuess(name){
  if(this.state.highscore< this.state.score){
    this.setState({highscore:this.state.score});
    this.setState({score:0});
    this.shuffle(sunny);
  }else{
    this.setState({score:0});
    this.shuffle(sunny);
  } 
}

handleItemClick = id => {  
  let guessedCorrectly = false;
  const newSunny = this.state.sunny.map(item => {
  const newItem = { ...item };
  console.log(newItem.name);
    if (newItem.id === id) {
      if (!newItem.clicked) {
        newItem.clicked = true;
        guessedCorrectly = true;
        this.correctAudio(newItem.name)
        
      }else{
        this.losingAudio(newItem.name)
      }
    }
    return newItem;
  });
  // console.log(guessedCorrectly)
  guessedCorrectly
    ? this.handleCorrectGuess(newSunny)
    : this.handleIncorrectGuess(newSunny.name);
};



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
            // losingAudio={this.losingAudio(sunny.name)}
            // winningAudio={this.winningAudio(sunny.name)}
            guessed={(sunny.clicked)}
            click ={this.handleItemClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
