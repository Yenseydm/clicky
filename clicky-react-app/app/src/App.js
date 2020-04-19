import React, {Component} from 'react';
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import images from "./cardimage.json";
import Card from "./components/card";
import "./App.css";
// import Score from "./components/Score";

let score = 0;
let topScore = 0;
let message = "Click Any Image to begin!";


class App extends Component {
 
  state ={
    images,
    message,
    score,
    topScore
  };

  cardClick = id => {
  
      const clickedImg = images.filter(match => match.id === id);
      
      if (clickedImg[0].clicked){

          score = 0;
          message = "OOooO Better luck next time buddy!";

          for (let i = 0; i < images.length ; i++){
            images[i].clicked = false;
          }

          this.setState({message});
          this.setState({score});
          this.setState({images});

        } else if (score < 11){

          clickedImg[0].clicked = true;
          score++;
          message = "Great job! Keep Going!!"

          if(score > topScore){
            topScore = score;
            this.setState({ topScore });
          }

          images.sort(function(a, b){return 0.5 - Math.random()});

          this.setState({ images });
          this.setState({ score });
          this.setState({ message });

        } else {

          clickedImg[0].clicked = true;

          score = 0;
          message = "Congrats! You got a memory of an elephant!";
          topScore = 12;
          this.setState({ topScore });

          for(let i = 0; i< images.length; i ++){
              images[i].clicked = false;
          }

          images.sort(function(a, b){return 0.5 -Math.random()});

          this.setState({ images });
          this.setState({ score });
          this.setState({ message });

        }
  
  };

  render() {

    return (
      <div>
       <Navbar />
       <Jumbotron /> 
      <div className="container">
          <div class="row">
            {this.state.images.map(image => (
          <div onClick={() => this.cardClick(image.id)} className="card col-md-3 ">
              <Card
                key={image.id}
                id={image.id}
                name={image.name}
                clicked={image.clicked}
                image={image.image}
                handleClick={this.handleClick}
                />
          </div>
            ))}
          </div>
      </div>

      <nav class="navbar fixed-bottom navbar-light bg-light">
        <p class="score"> Score: {this.state.score} | Top Score: {this.state.topScore}</p>
          <p>{this.state.message}</p>
      </nav>

      </div>
     

       
    );

  }
}

// function App() {
//   return (
//     <div className="App">
//         <Navbar />
//         <Jumbotron />
//         <br></br>
//         <Score />
//     </div>
//   );
// }

export default App;
