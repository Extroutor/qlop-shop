import React from 'react';
import {IoBasketOutline} from "react-icons/io5";
import {Link} from "react-router-dom";
import './Header.scss'
import {changeCategory} from "../../redux/actions";
import {connect} from "react-redux";

const Header = (props) => {
    return (
        <div className='header'>
            <div className='wrapper'>
                <div className='left_side'>
                    <div className='header_title'><Link to='./'>QLOP</Link></div>
                    <ul className='header_category'>
                        {props.categoryList.map(item => {
                            return <li key={item.id}>
                                <Link
                                    className='header_category_item'
                                    to={`/catalog/${item.id}`}
                                    onClick={() => props.changeCategory(item.id)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
                <div className='right_side'>
                    <Link to='/basket'>
                        <IoBasketOutline className='basket'/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        categoryList: state.catalog.categoryList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCategory: (id) => {
            return dispatch(changeCategory(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)