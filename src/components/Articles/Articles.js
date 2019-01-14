import React from 'react';
import './Articles.css';
import photo1 from '../../assets/photo_1.jpg';
import photo2 from '../../assets/photo_2.jpg';

const Articles = () => {
    return (
        <div className="articles container">
            <div className="item">
                <div className="ar_text">
                    <span>it’s all about</span>
                    <h2>BMW M5 F90 2018</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud.</p>
                    <a href="http://localhost:3000/">Read More</a>
                </div>
                <div className="ar_image"><img src={photo1} alt="1" /></div>
            </div>
            <div className="item">
                <div className="ar_text">
                    <span>love your</span>
                    <h2>your car tunning</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud.</p>
                    <a href="http://localhost:3000/">Read More</a>
                </div>
                <div className="ar_image"><img src={photo2} alt="2" /></div>
            </div>
        </div>
    );
};

export default Articles;