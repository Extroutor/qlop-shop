import React, {useState} from 'react';
import ProductItem from "./ProductItem/ProductItem";
import style from './Catalog.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {setSortOption} from "../../redux/slices/catalogSlice";

const Catalog = () => {

    console.log('rendering...')

    const catalogList = useSelector(state => state.catalog.catalogList)
    const filteredCatalogList = useSelector(state => state.catalog.filteredCatalogList)
    const activeCategory = useSelector(state => state.catalog.activeCategory)
    const dispatch = useDispatch()

    const [selectedOption, setSelectedOption] = useState('')

    const onchange = (sort) => {
        setSelectedOption(sort)
        dispatch(setSortOption(sort))
    }


    return (
        <div className={style.catalog}>
            <div className={style.filter_full}>Сортировка по:
                <select
                    value={selectedOption}
                    onChange={(e) => onchange(e.target.value)}
                    className={style.select}
                >
                    <option disabled value=''>выберите</option>
                    <option value='titleAZ'>алфавиту (а-я)</option>
                    <option value='titleZA'>алфавиту (я-а)</option>
                    <option value='price91'>убыванию цены</option>
                    <option value='price19'>возрастанию цены</option>
                </select>
            </div>
            <div className={style.wrap}>
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