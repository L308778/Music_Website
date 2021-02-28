import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Particle from "./particle"

function Cards() {
  return (
    <div className='cards'>
      <Particle/>
      <h1>Check out the latest RELEASES!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/cover.png'
              text='Bored in the House'
              label='Tech House'
              path='/tracks'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
