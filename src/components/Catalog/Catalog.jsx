import React from 'react';
import ProductItem from "./ProductItem/ProductItem";
import style from './Catalog.module.scss'
import {useSelector} from 'react-redux'

const Catalog = () => {

    const catalogList = useSelector(state => state.catalog.catalogList)
    const filteredCatalogList = useSelector(state => state.catalog.filteredCatalogList)
    const activeCategory = useSelector(state => state.catalog.activeCategory)

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
                {!activeCategory
                    ?
                    <div className={style.products}>
                        {catalogList.map(item =>
                            <ProductItem
                                key={item.id}
                                item={item}
                            />
                        )}
                    </div>
                    :
                    <div className={style.products}>
                        {filteredCatalogList.map(item =>
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

export default Catalog