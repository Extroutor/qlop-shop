import React from 'react';
import CategoryItem from "../CategoryItem/CategoryItem";
import style from './Category.module.css'
import { connect } from 'react-redux'
import {changeCategory, viewAllProducts} from "../../redux/actions";
import {Link} from "react-router-dom";


const Category = (props) => {
    return (
        <div className={style.category}>
            <div className={style.category_list}>
                <Link to='/' style={{textDecoration: 'none'}}>
                <div
                    className={style.category_item}
                    onClick={props.viewAllProducts}>
                    <b>Все категории</b>
                </div>
                </Link>
                {props.categoryList.map((item) =>
                    <CategoryItem
                        key={item.id}
                        item={item}
                        activeCategory={props.activeCategory}
                        changeCategory={props.changeCategory}/>
                )}
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
        },
        viewAllProducts: () => {
            return dispatch(viewAllProducts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)