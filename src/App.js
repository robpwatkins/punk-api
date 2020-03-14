import React from 'react';
// import logo from './logo.svg';
import './App.css';

class LikeButton extends React.Component {
  state = {
    isLiked: false,
    likedBeers: []
  }

  likeBeer = () => {
    this.setState({
      isLiked: true
    })
  }

  render() {
    console.log(this.state)
    return (
    <button onClick={() => this.likeBeer()}>{ this.state.isLiked ? "Liked!" : "Like"}</button>
    )
  }
}

class App extends React.Component {
  state = {
    beers: []
  }

  likedBeers = () => {
    console.log('heyoo');
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers").then( (response) => {
      return response.json();
    }).then((json) => {
      this.setState({ beers: json })
    });
  }
  
  render() {
    console.log(this.state.beers[0]);
  return (
    <div className="App">
      <div>
        { this.state.beers.map((beer, index) => { 
          return (
            <div className="mainBox" key={index}>
              <div className="centerBox">
                <div>
                  <h1>{beer.name}</h1>
                  <LikeButton beername={beer.name}/>
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
