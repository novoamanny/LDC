import React from 'react';

import image from '../../images/Joe.jpg';


import './Chupa-Joe.css';


const ChupaJoe = () =>{
    return(
        <div id='Joe-container'>

            <div id='Joe-image'>
                <img src={image}/>
            </div>



            <div id='Joe-bio'>
                <h1>Jonathan “J Boog” Nuno</h1>

                <p>Jonathan is one of the “LosDosChupacabras” that brings a wild side to the table.</p>
                
                <p>Originally from Burbank, California where he spent the first couple years of his youth living in a house with two families. He moved to Dallas in the late 90’s where his dad would find a promising job. Throughout his time in elementary he was known as the “bad kid” simply because he couldn’t stay out of trouble. His mother placed him in karate classes in hopes that he could channel his frustration through a sport. It wasn’t until his 6th grade year where he found his calling and that was to make people laugh. From making animal noises to simple facial expressions, whatever it was, it made people laugh and it made him feel happy. He made this his purpose.</p>

                <p>
                    Today, Jonathan has acquired years of experience in the alcohol industry and graduating with a degree in mixology. Jonathan continues to develop his tastes buds with new and exciting beer/wine products. Currently studying in the field of Journalism, he uses his constructive thinking to develop some of the “LosDosChupacabras” scripted work. On his free time he enjoys writing, playing video games, fitness and attending friend functions. He is definitely a social bug that’s not afraid to bite. 
                </p>
            </div>


            

        </div>
    );
}



export default ChupaJoe;