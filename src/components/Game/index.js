import React, { Component } from "react";
import data from "../../data.json";
import Nav from "../Nav";
import Container from "../Container";
import Clicky from "../Clicky";
import Header from "../Header";
import Footer from "../Footer";

class Game extends Component {
  state = {
    data,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({data: this.shuffle(this.state.data)});
  }

  reset = data => {
    const reset = data.map(item =>({...item, clicked: false }));
    return this.shuffle(reset);
  };

  incorrectGuess = data => {
    this.setState({
      data: this.reset(data),
      score: 0
    });
  };

  correctGuess = newData => {
    const { topScore, score }=this.state;
    const newScore=score+1;
    const newTopScore=Math.max(newScore, topScore);

    this.setState({
      data: this.shuffle(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  shuffle = data => {
    let i=data.length - 1;
    while (i>0) {
      const k=Math.floor(Math.random()*(i+1));
      const random=data[i];
      data[i]=data[k];
      data[k]=random;
      i--;
    }
    return data;
  };

  itemClick = id => {
    let guessCorrect=false;
    const newData=this.state.data.map(item => {
      const newImage={...item };
      if (newImage.id === id) {
        if (!newImage.clicked) {
          newImage.clicked=true;
          guessCorrect=true;
        }
      }
      return newImage;
    });
    guessCorrect
      ? this.correctGuess(newData)
      : this.incorrectGuess(newData);
  };

  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <Container>
          {this.state.data.map(item => (
            <Clicky
              key={item.id}
              id={item.id}
              shake={!this.state.score && this.state.topScore}
              click={this.itemClick}
              image={item.image}/>
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Game;
