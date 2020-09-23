import React from 'react';

const ArticleScreen = ({article}) => {
    return(
        <div>
            <h1>Article Screen</h1>
            
            <h2>{article.name}</h2>
        </div>
    )

}

export default ArticleScreen;