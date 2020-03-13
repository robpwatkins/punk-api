import React from 'react';
// import logo from './logo.svg';
import './App.css';

class LikeButton extends React.Component {
  state = {
    isLiked: false,
    likedBeers: []
  }

  render() {
    console.log(this.state)
    return (
    <button onClick={() => this.setState({isLiked: true, likedBeers: [ ...this.state.likedBeers, this.props.beername]})}>{ this.state.isLiked ? "Liked!" : "Like"}</button>
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
      <header className="App-header">
        <div>
          { this.state.beers.map((beer, index) => { 
            return (
              <div key={index}>
                <h1>{beer.name}</h1>
                <LikeButton beername={beer.name}/>
                <h2>{'ABV: ' + beer.abv}</h2>
                <h2>{beer.tagline}</h2>
                <img id="img" src={beer.image_url} alt=""></img>
                <h4>{beer.description}</h4>
              </div>
            )
          })}
        </div>
      </header>
    </div>
  );
  }
}

export default App;
