import React from 'react';
import './App.css';
import LikedBeers from './LikedBeers'

export default class LikeButton extends React.Component {
  state = {
    isLiked: false,
  }

  likeBeer = () => {
    this.setState({
      isLiked: true
    })
    this.props.addthebeer(this.props.beername)
  }

  render() {
    return (
      <div>
        <button onClick={ () => this.likeBeer() }>{ this.state.isLiked ? 'Liked!' : 'Like' }</button>
        <LikedBeers isliked={ this.state.isLiked } likedbeers={ this.props.likedbeers } />
      </div>
    )
  }
}