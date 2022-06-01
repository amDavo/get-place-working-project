import React from 'react';
import {Link} from "react-router-dom";
import './StartPage.css';

const StartPage = () => {
    return (
        <>
            <div>
                <div className='start-page-back'>
                    <div className='start-page-text'>
                        <h1>Welcome to the</h1>
                        <h1>Workery</h1>
                        <div>
                            <Link to="/main">
                                <button className='btn btn-primary'>Start your new experience</button>
                            </Link>
                        </div>
                    </div>
                    <div className="start-page">
                        <video className='video' muted="muted" autoplay="autoplay" loop>
                            <source src="/icon/video-work.mp4" type='video/mp4'/>
                        </video>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StartPage;
