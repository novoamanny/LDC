import React, { Component } from 'react'

import image from '../../images/banner.jpg';


import './Banner.css';

const Banner = () => {
  
    return (
      <div id='banner-container'>
            <img src={image}/>
      </div>
    );
  
}

export default Banner;
