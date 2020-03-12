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
    guesses:[]
  };
  theGame = (guess, compareList)=>{
   

   const compare= compareList.filter(name => name !== guess)
   console.log("overall list "+compareList);
   console.log("filtered list "+compare);
   switch(compare.lenght){
     case 0:
    return this.setState({score:this.state.score +1});
    case 1:
    return this.setState({score:0});
    
     
   }
  }

  userGuess = name=>{
    
    this.setState({name:name});
    const guessName= this.state.name
    this.setState({guesses:this.state.guesses.concat(this.state.name)});
    
    this.theGame(guessName,this.state.guesses)
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
        <Title score={this.state.score}></Title>
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
