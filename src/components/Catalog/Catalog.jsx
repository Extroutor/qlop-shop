import React from 'react';
import ProductItem from "./ProductItem/ProductItem";
import style from './Catalog.module.scss'
import {connect} from 'react-redux'

const Catalog = (props) => {
    return (
        <div className={style.catalog}>
            <div className={style.filter_full}>Сортировка по:
                <select className={style.select}>
                    <option>алфавиту (а-я)</option>
                    <option>алфавиту (я-а)</option>
                    <option>убыванию цены</option>
                    <option>возрастанию цены</option>
                </select>
            </div>
            <div>
                {!props.activeCategory
                    ?
                    <div className={style.products}>
                        {props.catalogList.map(item =>
                            <ProductItem
                                key={item.id}
                                item={item}
                            />
                        )}
                    </div>
                    :
                    <div className={style.products}>
                        {props.filteredCatalogList.map(item =>
                            <ProductItem
                                key={item.id}
                                item={item}
                            />
                        )}
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

export default connect(mapStateToProps)(Catalog);