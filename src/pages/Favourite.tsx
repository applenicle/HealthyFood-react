import React from 'react';
import { Card, Categories } from '../components';

const Favourite = () => {
  return (
    <div>
      <div>
        <h2>Favorite</h2>
        <img src="" alt="" />
      </div>
      <div>
        <img src="" alt="" />
        <input type="text" placeholder="Search Favorite Food" />
        <img src="" alt="" />
      </div>
      <div>{/* <Categories /> */}</div>
      <div className="wrapper">{/* <Card /> */}</div>
    </div>
  );
};

export default Favourite;
