import React from 'react';

import SoundCloud from '../../components/SoundCloud/SoundCloud';
import Instagram from '../../components/Instagram/Instagram';

import './Media.css';


const Media = () => {
    return(
        <div id='media-container'>


            <div id='Insta'>
                <div id='media-title'>
                    <h1>Instagram</h1>
                </div>
                <Instagram/>
            </div>


            <div id='SC'>
                <div id='media-title'>
                    <h1>SoundCloud</h1>
                </div>
                <SoundCloud/>
            </div>


            
        </div>
    );
}


export default Media;