import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listArticles } from '../Action/articleActions';
import { Link } from 'react-router-dom';
 
import Carousel from '../Components/Carousel';

const HomeScreen = () => {

    const articleList = useSelector(state => state.articleList);
    const { articles, loading, error } = articleList;
    const dispatch = useDispatch();

    // Retrieve data :
    useEffect(() => {
       dispatch(listArticles());
    },[dispatch]);


    return(
        loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
        <div>
            <section id="section_1">
                <Carousel />
            </section>
            {
                
                articles.map(value => 
                    value.category === 'Visa' ?
                    <div key={value._id}>
                        <h2>{value.name}</h2>
                        <p>{value.text}</p>
                        <Link to={"/nos-articles/" + value.category.replaceAll(' ', '-').toLowerCase()}> {value.category} </Link>
                    </div>  : ' ',
                        
                )

                
            }

            {
                articles.map(value => 
                    value.category === 'Travail' ?
                    <div key={value._id}>
                        <h2>{value.name}</h2>
                        <p>{value.text}</p>
                        <Link to={"/nos-articles/" + value.category.replaceAll(' ', '-').toLowerCase()}> {value.category} </Link>
                    </div>  : ' ',
                        
                )
            }

            {
                articles.map(value => 
                    value.category === 'Logement et Démenagement' ?
                    <div key={value._id}>
                        <h2>{value.name}</h2>
                        <p>{value.text}</p>
                        <Link to={"/nos-articles/" + value.category.replaceAll(' ', '-').toLowerCase()}> {value.category} </Link>
                    </div>  : ' ',
                        
                )
            }



        </div>
    )
}

export default HomeScreen;