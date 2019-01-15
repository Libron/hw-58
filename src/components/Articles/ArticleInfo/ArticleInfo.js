import React, {Fragment} from 'react';

const ArticleInfo = props => {
    if (props.info) {
        return (
            <Fragment>
                <img src={props.info.img} alt={props.info.title} width="100%" />
                <p>{props.info.text}</p>
            </Fragment>
        );
    } else return null
};

export default ArticleInfo;