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
    name:"",
    guesses:[]
    

    
  };
  userGuess = name=>{
    this.setState({score:this.state.score +1});
    this.setState({name:name});
    // let guessIds= this.state.ids.push(id)
    
    this.setState({guesses:this.state.guesses.concat(this.state.name)});
    console.log(this.state.guesses);
    
    
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
