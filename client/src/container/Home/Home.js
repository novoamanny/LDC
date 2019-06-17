import React, {Component} from 'react';


import Banner from '../../components/Banner/Banner';
import Media from '../Media/Media';
import Header from '../../components/Header/Header';


class Home extends Component{



    render(){
        return(
            <div>
                
                <Banner/>
                <Header/>
                <Media/>
                
            </div>
        );
    }
}


export default Home;