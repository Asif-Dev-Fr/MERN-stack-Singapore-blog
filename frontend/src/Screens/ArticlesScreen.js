import React, {useEffect, useState} from 'react';

const ArticlesScreeen = ({ match }) => {
    // console.log(match.params);

    const [category, setCategory] = useState();
    
    useEffect(() => {
        const fetchDataByCat = async () => {
          const response = await fetch("/api/nos-articles");
          const data = await response.json();
          // console.log(data);
          const searchedByCat = data.find(value => value.category === match.params.category);
          setCategory(searchedByCat);
        }
        fetchDataByCat();
    },[match.params.cat]);

    console.log(category);
    return(
        <div>
            ArticlesScreeen !
            <h1> {category.name} </h1> 

            {/*
                category.map((value) => 
                    <h1>{ value.name }</h1>
                )*/
            }
            
        </div>
    )
}

export default ArticlesScreeen;