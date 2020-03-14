import React from 'react';
import './App.css';

export default class LikeButton extends React.Component {
  state = {
    isLiked: false,
    buttonVisible: false
  }

  likeBeer = (props) => {
    this.setState({
      isLiked: true
    })
    this.props.addthebeer(this.props.beername)
    this.setState({ buttonVisible: true })
  }

  showLikedBeers = (props) => {
    console.log(this.props.likedbeers);
  }

  render() {
    return (
      <div>
        <button onClick={ () => this.likeBeer() }>{ this.state.isLiked ? 'Liked!' : 'Like' }</button>
        <div className={ this.state.buttonVisible ? '' : 'hidden' } onClick={ () => this.showLikedBeers() }
        >Liked Beers:
          {this.props.likedbeers.map(likedBeer => {
            return (
            <h6 key={likedBeer}>{likedBeer}</h6>
            )
          })
          }</div>
      </div>
    )
  }
}