import React from 'react';

import image from '../../images/Ivan.jpg';


import './Chupa-Ivan.css';


const ChupaIvan = () =>{
    return(
        <div id='Ivan-container'>

            <div id='Ivan-image'>
                <img src={image}/>
            </div>

            <div id='Ivan-bio'>
                <h1>Ivan Rodriguez</h1>

                <p>Ivan is the weird and crazy part of “los dos chupacabras"</p>
                
                <p>Originally from the Northeast, New Jersey/Pennsylvania, he always had to be the class clown.</p>

                <p>
                    From a very young age he enjoyed acting out scenes from movies and shows, while also trying out different voices and accents . He soon realized that he loved the attention and loved what he could do for people, put a smile on their face. His mother later put him into acting and comedy classes. There is where he found that making people laugh is all he wants to do. So with that in mind he took what he learned and applied it everywhere. Some places more appropriate than others. Making jokes at a convention and laughing uncontrollably can get you in a hot jam. As well as the classroom. With being the class clown also came a little trouble. Not everyone can take a joke. Fast forward years later, engaged and following his fiance on an opportunity in Dallas, TX. It was an easy move considering he is a cowboys fan. It was a win/win scenario, he gets to be in the hometown of his favorite football team and get nice weather all year round. Two months after arriving in Dallas he lands a job at a liquor store. There is where he found the other chupacabra, in his natural habitat. The two realize that there is comedic chemistry between them and decide to activate wonder twin powers. From there well, the rest is pretty much history. If you don’t know ….. now you know…. Chupas. 
                </p>
            </div>

        </div>
    );
}



export default ChupaIvan;