import React from 'react';
import ProductItem from "../ProductItem/ProductItem";
import style from './Catalog.module.css'
import {connect} from 'react-redux'

const Catalog = (props) => {

    return (
        <div className={style.catalog}>
            <div className={style.catalog_title}>Каталог</div>
            <div className={style.catalog_wrap}>
                {!props.activeCategory
                    ?
                    <div className={style.products}>
                        {props.catalogList.map(item =>
                            <ProductItem
                                key={item.id}
                                item={item}
                            />
                        )}
                        {console.log('нет активных')}
                    </div>
                    :
                    <div className={style.products}>
                        {props.filteredCatalogList.map(item =>
                            <ProductItem
                                key={item.id}
                                item={item}
                            />
                        )}
                        {console.log('есть активные')}

                    </div>
                }
            </div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        catalogList: state.catalog.catalogList,
        filteredCatalogList: state.catalog.filteredCatalogList,
        activeCategory: state.catalog.activeCategory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);