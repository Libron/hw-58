import React from 'react';
import './Articles.css';
import photo1 from '../../assets/photo_1.jpg';
import photo2 from '../../assets/photo_2.jpg';
import Article from "./Article/Article";

const articles = [
    {preTitle: 'it’s all about', title: 'BMW M5 F90 2018',  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', img: photo1},
    {preTitle: 'love your', title: 'your car tunning',  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.', img: photo2}
];

const Articles = props => {
    return (
        <div className="articles container">
            {articles.map((item,index)=>(
                <Article data={item} key={index}  showInfo={props.showInfo}/>
            ))}
        </div>
    );
};

export default Articles;