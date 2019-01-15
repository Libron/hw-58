import React from 'react';

const Article = props => {
    return (
        <div className="item">
            <div className="ar_text">
                <span>{props.data.preTitle}</span>
                <h2>{props.data.title}</h2>
                <p>{props.data.text}</p>
                <a href="http://localhost:3000/" onClick={event => props.showInfo(event, props.data)}>Read More</a>
            </div>
            <div className="ar_image"><img src={props.data.img} alt={props.index} /></div>
        </div>
    );
};

export default Article;