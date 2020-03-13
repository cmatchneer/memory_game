import React, { Component } from "react";
import Sunny from "./components/SunnyPeople";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import sunny from "./sunny.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    sunny,
    score:0,
    highscore:0,
    name:"",
    guesses:[],
    display:[]
  };
   shuffle= a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    this.setState({sunny:a});
}

  userGuess = name=>{
    this.shuffle(this.state.sunny);
    
    this.setState({name:name},()=>{
      // console.log(this.state.name);
    });
    const guessName= this.state.name
    this.setState({guesses:this.state.guesses.concat(this.state.name)},()=>{
      console.log(this.state.guesses);
    });
    for(let i =0;i<this.state.guesses.length;i++){
      if(this.state.guesses[i] !== guessName){
        
        this.setState({score: this.state.score +1});
      }else{ 
        if(this.state.score > this.state.highscore){
          const highscore = this.state.score
          
          return (this.setState({highscore:highscore}),
          this.setState({score:0}),
          this.setState({guesses:[]}))
          }else{
            return (
            this.setState({score:0}),
            this.setState({guesses:[]}))
          }
    
      }
    }
  }
  

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };


  render() {
    
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}></Title>
        {this.state.sunny.map(sunny => (
          <Sunny
            
            id={sunny.id}
            key={sunny.id}
            name={sunny.name}
            image={sunny.image}
            click ={this.userGuess}
           
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
