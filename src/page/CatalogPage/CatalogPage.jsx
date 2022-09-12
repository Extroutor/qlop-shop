import React from 'react';
import Category from "../../components/Category/Category";
import Catalog from "../../components/Catalog/Catalog";
import './CatalogPage.scss'
import {connect} from "react-redux";

const CatalogPage = (props) => {
    return (
        <div className='content'>
            <Category />
            <Catalog />
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