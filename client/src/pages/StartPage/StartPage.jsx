import React from 'react';
import {Link} from "react-router-dom";
import './StartPage.css';

const StartPage = () => {
    return (
        <>
            <div>
                <div className='start-page-back'>
                    <div className='start-page-text'>
                        <h1>Добро пожаловать в Workery</h1>
                        <h3>Ищи, создавай и оценивай локации для работы по всему городу</h3>
                        <div>
                            <Link to="/main">
                                <button className="start btn btn-dark">Попробовать</button>
                            </Link>
                        </div>
                    </div>
                    <div className="start-page">
                        <video className='video' muted="muted" autoPlay="autoplay" loop>
                            <source src="/icon/video-work.mp4" type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StartPage;
