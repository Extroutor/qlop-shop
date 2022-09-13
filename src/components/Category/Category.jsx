import React from 'react';
import CategoryItem from "../CategoryItem/CategoryItem";
import style from './Category.module.scss'
import {connect} from 'react-redux'
import {changeCategory, viewAllProducts} from "../../redux/actions";
import {Link} from "react-router-dom";
import {GiSettingsKnobs} from "react-icons/gi";


const Category = (props) => {
    return (
        <div className={style.category}>
            <div className={style.category_list}>
                {props.categoryList.map((item) => {
                    return <CategoryItem
                        key={item.id}
                        item={item}
                        activeCategory={props.activeCategory}
                        changeCategory={props.changeCategory}
                    />
                })}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        categoryList: state.catalog.categoryList,
        activeCategory: state.catalog.activeCategory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCategory: (id) => {
            return dispatch(changeCategory(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)