import React, {useState} from 'react';
import ProductItem from "./ProductItem/ProductItem";
import style from './Catalog.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {setSortOption} from "../../redux/slices/catalogSlice";
import {useParams} from "react-router-dom";

const Catalog = () => {

    const dispatch = useDispatch()
    const param = +useParams().id // convert to number
    const catalogList = useSelector(state => state.catalog.catalogList)
    let filteredCatalogList = catalogList.filter(item => item.category === param)
    let list;

    const [selectedOption, setSelectedOption] = useState('')

    if (param) {
        list = filteredCatalogList
    } else {
        list = catalogList
    }

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
                <div className={style.products}>
                    {list.map(item =>
                        <ProductItem
                            key={item.id}
                            item={item}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Catalog