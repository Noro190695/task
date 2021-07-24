import {types} from "./categories.types";
const initialState = {
    categories: [],
    data: [],
    id: 0
}
export const categoriesReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case types.GET_CATEGORIES:
            return {...state, categories: payload}
        case types.GET_CATEGORIES_DATA:
            return {...state, data: payload}
        case types.GET_LEARN_MORE:
            return {...state, data: [...state.data, payload]}
        case types.CAT_ID:
            return {...state, id: payload}
        default:
            return state
    }
}