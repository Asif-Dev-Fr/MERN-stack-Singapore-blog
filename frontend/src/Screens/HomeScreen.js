import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listArticles } from '../Action/articleActions';
import { Link } from 'react-router-dom';
 
const HomeScreen = () => {

    // const [articles, setArticles] = useState([]);
    const articleList = useSelector(state => state.articleList);
    const { articles, loading, error } = articleList;
    const dispatch = useDispatch();

    // Retrieve data :
    useEffect(() => {
        /*
        const fetchData = async () => {
            const response = await fetch("/api/nos-articles");
            const data = await response.json();
            console.log(data);
        }
        fetchData();
        */
       dispatch(listArticles());
    },[dispatch]);

    return(
        loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
        <div>
            <h1>HomeScreen Component</h1>
            {
                articles.map(value => 
                    <div key={value._id}>
                        <h2>{value.name}</h2>
                        <p>{value.text}</p>
                        <Link to={"/nos-articles/" + value.category.replaceAll(' ', '-').toLowerCase()}> {value.category} </Link>
                    </div>   
                    
                )
            }
        </div>
    )
}

export default HomeScreen;