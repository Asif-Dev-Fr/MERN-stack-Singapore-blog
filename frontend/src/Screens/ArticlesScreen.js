import React, {useEffect, useState} from 'react';
import ArticleScreen from './ArticleScreen';

const ArticlesScreeen = ({ match }) => {
    // console.log(match.params);

    const [article, setArticle] = useState({});
    
    useEffect(() => {
        const fetchDataByCat = async () => {
          const response = await fetch("/api/nos-articles");
          const data = await response.json();
          // console.log(data);
          const searchedByCat = data.find(value => value.category.replaceAll(' ', '-').toLowerCase() === match.params.category);
          setArticle(searchedByCat);
        }
        fetchDataByCat();
    },[match.params.category]);

    console.log(article);
    return(
        <div>
            <h1>Articles Screeen !</h1>
            <ArticleScreen article={article} />
        </div>
    )
}

export default ArticlesScreeen;