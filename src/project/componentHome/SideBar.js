import React, { Component } from 'react';
import '../../main.css';
import  FilterBrads from './sideBar/FilterBrads';
import  FindDevicesInput from './sideBar/FindDevicesInput';
import  GoodInBasket from './sideBar/GoodInBasket';


class SideBar extends Component {
    render() {
        return (
            <div className='col-md-3'>
                <GoodInBasket price={this.props.price} all_quantity={this.props.all_quantity}/>
                <FindDevicesInput onFindDevice={this.props.onFindDevice}/>
                <FilterBrads arr_categories={this.props.arr_categories} findCategory={this.props.findCategory}/>
            </div>
        )
    }
}

export default SideBar;
