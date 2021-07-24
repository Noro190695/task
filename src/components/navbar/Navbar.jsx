import React, {useEffect} from 'react';
import style from  './navbar.module.scss';
import {connect} from 'react-redux'
import {categoriesId, getCategories, getCategoriesData} from "../../redux/categories/categories.action";
import {Link} from "react-router-dom";

const Navbar = ({categories, dispatch}) => {

    useEffect(() => {
        dispatch(getCategoriesData(`https://api.thecatapi.com/v1/images/search?limit=10&page=1`))
    }, [])
    const getData = (e) => {
        dispatch(categoriesId(e.target.dataset.id))
        dispatch(getCategoriesData(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${e.target.dataset.id}`))
    }
    return (
        <nav className={style.navbar}>
            <h2>Navbar</h2>
            <ul>
                {
                    categories.categories.map(res => {
                        return (
                            <li key={res.id}>
                                <Link to={res.name} onClick={getData} data-id={res.id}>{res.name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCategories: dispatch(getCategories()),
        dispatch: dispatch

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);