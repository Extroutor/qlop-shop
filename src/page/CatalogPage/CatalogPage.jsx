import React from 'react';
import Category from "../../components/Category/Category";
import Catalog from "../../components/Catalog/Catalog";
import './CatalogPage.scss'
import {connect} from "react-redux";
import style from "../../components/Category/Category.module.scss";
import {GiSettingsKnobs} from "react-icons/gi";

const CatalogPage = (props) => {
    return (
        <div className='catalog_page'>
            <div className='filter_full'>Filter</div>
            {/*<div className='filter'>*/}
            {/*    <GiSettingsKnobs className={style.setting}/>*/}
            {/*</div>*/}
            <div className='content'>
                    <Category />
                    <Catalog />
            </div>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {
        activeCategory: state.catalog.activeCategory,
        categoryList: state.catalog.categoryList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);