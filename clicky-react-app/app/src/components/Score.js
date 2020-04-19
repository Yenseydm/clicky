import React, {Component} from "react";
import "../components/Score.css";
import images from "../cardimage.json";

class Score extends Component{
 
  state ={
    images,
    score:0,
    topScore:0
  };

  cardClick = (id, clicked) => {
  
      const cardImg = this.state.images;
  
      if (clicked){
          cardImg.forEach((image, index) =>{
            cardImg[index].clicked = false;
          })
          return this.setState({
            image: cardImg.sort(() =>Math.random()-0.5),
            message: "You've clicked me alread!",
            score: 0
          })
      } 
      else{
          cardImg.forEach((image, index) => {
            if(id === image.id){
              cardImg[index].clicked = true;
            }
          });
  
          const {topScore, score} = this.state;
          const newScore = score +1;
          const newTopScore = newScore > topScore ? newScore : topScore;
  
          return this.setState({
            image: cardImg.sort(() => Math.random() -0.5),
            message: "Great Job! Keep going!!",
            score: newScore,
            topScore: newTopScore,
          })
      }
  
  };

  render() {

    return (
      <nav class="navbar fixed-bottom navbar-light bg-light">
        <p class="score">Score: {this.state.score} | Top Score: {this.state.topScore}</p>
      </nav>
     
    );

  }
}




export default Score;