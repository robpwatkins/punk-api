import React from 'react';
import './App.css';
import LikeButton from './LikeButton';

class App extends React.Component {
  state = {
    beers: [],
    likedBeers: []
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers").then( (response) => {
      return response.json();
    }).then((json) => {
      this.setState({ beers: json })
    });
  }
  
  addLikedBeer = (likedBeer) => {
    this.setState( {likedBeers: [ ...this.state.likedBeers, likedBeer]} )
    // console.log(this.state);
  }

  render() {
    // console.log(this.state.beers[0]);
  return (
    <div className="App">
      <div>
        { this.state.beers.map((beer, index) => { 
          return (
            <div className="mainBox" key={index}>
              <div className="centerBox">
                <div>
                  <h1>{beer.name}</h1>
                  <LikeButton likedbeers={this.state.likedBeers} addthebeer={this.addLikedBeer} beername={beer.name}/>
                  <h3>{'ABV: ' + beer.abv}</h3>
                  <h3>{beer.tagline}</h3>
                </div>
              <img id="img" src={beer.image_url} alt=""></img>
              </div>
              <h5>{beer.description}</h5>
            </div>
          )
        })}
      </div>
    </div>
  );
  }
}

export default App;
