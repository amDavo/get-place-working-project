import React from 'react';
import {Link} from "react-router-dom";
import './StartPage.css';

const StartPage = () => {
    return (
        <>
            <div>
                <div className="gradient1"></div>
                <div className="gradient2"></div>
                <div className="gradient3"></div>
                <div className="gradient4"></div>
                <div className="gradient5"></div>
                <div className="gradient6"></div>
                <div className="gradient7"></div>
                <div className="gradient8"></div>
                <div className="gradient9"></div>
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
