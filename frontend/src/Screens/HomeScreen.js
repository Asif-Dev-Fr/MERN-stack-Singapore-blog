import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listArticles } from '../Action/articleActions';

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
        </div>
    )
}

export default HomeScreen;