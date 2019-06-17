import React from 'react';
import './SoundCloud.css';

const SoundCloud = () => {
    return(
        <div id='player-container'>
             <iframe scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/518722764&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
    );
}



export default SoundCloud;