import React, { useState } from 'react';

const ArticlesForm = () => {

    const [search, setSearch] = useState();
    const [title, setTitle] = useState();
    const [cat, setCat] = useState();

    const addedTitle = (e) => {
        const newTitle = e.target.value;
        console.log(newTitle);
        setTitle(newTitle);
    }

    const addArticle = async (e) => {
        const addTitle = e.target.value;
        console.log(e.target); 
    }
 
    return(
        <div>
            <div className="row">
                <div className="col-6 col-lg-12">
                    <input type="text" name="title" placeholder="Titre de l'Article" onChange={addedTitle} />
                </div>
                <div className="col-6 col-lg-12">
                    <input type="text" name="categorie" placeholder="*Catégorie de l'Article" />
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-lg-12">
                    <input type="submit" value="Enregister" onClick={addArticle}/>
                </div>
            </div>
        </div>
        
    )
}

export default ArticlesForm;