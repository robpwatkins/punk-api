import React from 'react';
import './App.css';
import LikedList from './LikedList'

export default class LikeButton extends React.Component {
  state = {
    isLiked: false,
  }

  likeBeer = (props) => {
    this.setState({
      isLiked: true
    })
    this.props.addthebeer(props.state.input)
  }

  render() {
    return (
      <div>
        <button onClick={ () => this.likeBeer() }>{ this.state.isLiked ? 'Liked!' : 'Like' }</button>
        <LikedList isliked={ this.state.isLiked } likedbeers={ this.props.likedbeers } />
      </div>
    )
  }
}