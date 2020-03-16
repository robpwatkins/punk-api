import React from 'react';
import './App.css';

export default function LikedBeers(props) {
  if (props.isliked) {
    return (
      <div className="likedBeers">
        <h5>Liked Beers:</h5>
        <div>
          {props.likedbeers.map(likedBeer => {
            return (
              <h6 key={ likedBeer }>{ likedBeer }</h6>
            )
          })}
        </div>
      </div>
    )
  } else {
    return null;
  }
}