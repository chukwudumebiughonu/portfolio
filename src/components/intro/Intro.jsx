import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true, 
            backDelay: 1500,
            backSpeed: 80, 
            strings: ['React Web App ', ' Ecommerce Development', 'Customized web app development', 'Static web services','Machine Learning Models', 'Data Science'],
         });

    },[]);
    return (
        <div className='intro' id='intro'>
            <div className= 'left'>
                    <div className='imgContainer'>
                         <img src='assets/profile-picyu.png' alt=''/>
                    </div>
            </div>
            <div className= 'right'>
                <div className='wrapper'>
                    <h2>Hi There, I'm</h2>
                    <h1>Chukwudumebi Ughonu</h1>
                    <h3>I am experieced in <span ref= {textRef}>React Web App</span></h3>
                </div>
                <a href='#portfolio'>
                    <img src='assets/down.png' alt=''/>
                </a>
            </div>
        </div>
    )
}