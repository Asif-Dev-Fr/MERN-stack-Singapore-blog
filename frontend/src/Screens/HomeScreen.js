import React, { useState, useEffect } from 'react';

const HomeScreen = () => {

    const [articles, setArticles] = useState([]);

    // Retrieve data :
    useEffect(() => {
        const fetchData = async (articleId) => {
            const response = await fetch("/api/nos-articles");
            const data = await response.json();
            console.log(data);
        }
        fetchData();
    },[]);

    return(
        <div>
            <h1>HomeScreen Component</h1>
        </div>
    )
}

export default HomeScreen;