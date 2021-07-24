import React, {useEffect, useState} from 'react';
import cat from './categories.module.scss';
import {connect} from "react-redux";
import {getLearnMore} from "../../redux/categories/categories.action";

const Categories = (props) => {
    const learnMore = (e) => {
        let page = 1
        if (props.id === 0){
            props.dispatch(getLearnMore(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page + 1}`))
        }else{
            props.dispatch(getLearnMore(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page + 1}&category_ids=${props.id}`))
        }
    }
    return (
        <div className={cat.cat}>
            <div>
            {
                props.data.map((data, i) => {
                    return (
                        <img key={i} src={data.url} alt={data.id}/>
                    )
                })
            }
            </div>
            <button onClick={learnMore}>Learn more</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.categories.data,
        id: state.categories.id
    }
}
export default connect(mapStateToProps, null)(Categories);