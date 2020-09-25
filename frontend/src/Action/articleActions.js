import { ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAIL } from "../Constants/articleConstants"

const listArticles = () => async (dispatch) => {
    try {
        dispatch({type: ARTICLE_LIST_REQUEST});
        const response = await fetch("/api/nos-articles");
        const data = await response.json();
        console.log(data); 
        dispatch({type: ARTICLE_LIST_SUCCESS, payload: data});
    } catch(error) {
        dispatch({type: ARTICLE_LIST_FAIL, payload: error.message});
    }
} 

const histoireArticle = () => async (dispatch) => {
    try {
        dispatch({type: ARTICLE_LIST_REQUEST});
        const response = await fetch("/api/nos-articles");
        const data = await response.json();
        const histoire = data.find(value => value.category.replaceAll(' ', '-').toLowerCase() === 'Histoire');
        dispatch({type: ARTICLE_LIST_SUCCESS, payload: histoire});
    } catch(error) {
        dispatch({type: ARTICLE_LIST_FAIL, payload: error.message});
    }
} 

export { listArticles,  histoireArticle };