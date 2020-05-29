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
      let dennis = require("./assets/sounds/tools.m4a")
      let audioDennis = new Audio(dennis)
      audioDennis.play()
      break;
    case "charlie":
      let charlie = require("./assets/sounds/charlie-lose.m4a");
      let audioCharlie = new Audio(charlie)
      audioCharlie.play()
      break;
    case "mac":
      let mac =require("./assets/sounds/mac-lose.m4a");
      let audioMac= new Audio(mac)
      audioMac.play()
      break;
    case "dee":
      let dee= require("./assets/sounds/dee-lose.m4a")
      let audioDee = new Audio(dee);
      audioDee.play();
      break;
    case "frank":
      let frank = require("./assets/sounds/frank-lose.m4a");
      let audioFrank = new Audio(frank);
      audioFrank.play();
      break;
    case "artimus":
     let artimus = require("./assets/sounds/artimus-lose.m4a")
     let audioArtimus = new Audio(artimus);
     audioArtimus.play();
     break;
    case "bill":
      let bill = require("./assets/sounds/bill-lose.m4a");
      let audioBill = new Audio(bill);
      audioBill.play();
      break;
    case "cricket":
      let cricket = require("./assets/sounds/cricket-lose.m4a");
      let audioCricket = new Audio(cricket);
      audioCricket.play();
      break;
    case "liam":
      let liam = require("./assets/sounds/liam-lose.m4a")
      let audioLiam = new Audio(liam);
      audioLiam.play();
      break;
    case "ryan":
      let ryan = require("./assets/sounds/ryan-lose.m4a");
      let audioRyan = new Audio(ryan);
      audioRyan.play();
      break;
    case "margaret":
      let margaret= require("./assets/sounds/margaret.m4a");
      let audioMargaret = new Audio(margaret);
      audioMargaret.play();
      break;
    case "maureen":
      let maureen = require("./assets/sounds/maureen-lose.m4a");
      let audioMaureen = new Audio(maureen);
      audioMaureen.play();
      break;
    case "waitress":
      let waitress = require("./assets/sounds/waitress-lose.m4a")
      let audioWaitress = new Audio(waitress);
      audioWaitress.play();
      break;   
  }
}
correctAudio =(char)=>{
  switch(char){
    case"dennis":
      let dennis = require("./assets/sounds/Dennis.m4a")
      let audioDennis = new Audio(dennis)
      audioDennis.play()
      break;
    case "charlie":
      let charlie = require("./assets/sounds/charlie-win.m4a");
      let audioCharlie = new Audio(charlie)
      audioCharlie.play()
      break;
    case "mac":
      let mac =require("./assets/sounds/mac-win.m4a");
      let audioMac= new Audio(mac)
      audioMac.play()
      break;
    case "dee":
      let dee= require("./assets/sounds/dee-win.m4a")
      let audioDee = new Audio(dee);
      audioDee.play();
      break;
    case "frank":
      let frank = require("./assets/sounds/frank-win.m4a");
      let audioFrank = new Audio(frank);
      audioFrank.play();
      break;
    case "artimus":
      let artimus = require("./assets/sounds/artimus-win.m4a")
      let audioArtimus = new Audio(artimus);
      audioArtimus.play();
      break;
    case "bill":
      let bill = require("./assets/sounds/bill-win.m4a");
      let audioBill = new Audio(bill);
      audioBill.play();
      break;
    case "cricket":
      let cricket = require("./assets/sounds/cricket-win.m4a");
      let audioCricket = new Audio(cricket);
      audioCricket.play();
      break;
    case "liam":
      let liam = require("./assets/sounds/liam-win.m4a")
      let audioLiam = new Audio(liam);
      audioLiam.play();
      break;
    case "ryan":
      let ryan = require("./assets/sounds/ryan-win.m4a");
      let audioRyan = new Audio(ryan);
      audioRyan.play();
      break;
    case "margaret":
      let margaret= require("./assets/sounds/margaret.m4a");
      let audioMargaret = new Audio(margaret);
      audioMargaret.play();
      break;
    case "maureen":
      let maureen = require("./assets/sounds/maureen-win.m4a");
      let audioMaureen = new Audio(maureen);
      audioMaureen.play();
      break;
    case "waitress":
      let waitress = require("./assets/sounds/waitress-win.m4a")
      let audioWaitress = new Audio(waitress);
      audioWaitress.play();
      break;
  }
}
componentDidMount = ()=>{
  // console.log(this.sunny)
  console.log("used");
  this.shuffle(sunny)
}

componentDidUpdate = () => {

  
  if(this.state.score === 13 && this.state.showScore === true){

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
