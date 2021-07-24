import {types} from "./categories.types";

const categoriesURL = 'https://api.thecatapi.com/v1/categories';

export const getCategories = () => {
    return async (dispatch) => {
     const request =   await fetch(categoriesURL);
     const data = await request.json();

     dispatch({
         type: types.GET_CATEGORIES,
         payload: data
     })
    }
}

export const getCategoriesData = (url) =>{
    return async (dispatch) => {
        const request =   await fetch(url);
        const data = await request.json();
        dispatch(
            dispatch({
                type: types.GET_CATEGORIES_DATA,
                payload: []
            })
        )
        dispatch({
            type: types.GET_CATEGORIES_DATA,
            payload: data
        })
    }
}

export const getLearnMore = (url) => {
    return async (dispatch) => {
        const request =   await fetch(url);
        const data = await request.json();
        data.forEach(res => {
            dispatch({
                type: types.GET_LEARN_MORE,
                payload: res
            })
        })

    }
}
export const categoriesId = (id) => {
    return  (dispatch) => {
        dispatch({
            type: types.CAT_ID,
            payload: id
        })

    }
}