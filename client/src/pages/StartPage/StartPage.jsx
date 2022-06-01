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
                    <img className='start-page' src="/icon/pexels-polina-kovaleva-5827784.gif" alt="wonder"/>
                </div>
            </div>

            {/*<div style="padding-top:56.300%;position:relative;">*/}
            {/*    <iframe src="https://gifer.com/embed/U61H" width="100%" height="100%"*/}
            {/*            style='position:absolute;top:0;left:0;' frameBorder="0" allowFullScreen></iframe>*/}
            {/*</div>*/}
            {/*<p><a href="https://gifer.com">через GIFER</a></p>*/}
        </>
    );
};

export default StartPage;
