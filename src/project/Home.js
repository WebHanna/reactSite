import React, { Component } from 'react';
import '../main.css';
import {connect} from 'react-redux';
import {findCategory, addBasketItemId, onFindDevice} from './actions';
import  Phones from './componentHome/Phones';
import  SideBar from './componentHome/SideBar';

class Home extends Component {
   render() {
        return (
            <div>
                <div className='view-container'>
                    <div className='container'>
                        <div className='row'>
                            <SideBar
                                arr_categories={this.props.arr_categories} findCategory={this.props.findCategory}
                                onFindDevice={this.props.onFindDevice}
                                price={this.props.price} all_quantity={this.props.all_quantity}
                            />
                            <Phones devices={this.props.devices} addBasketItemId={this.props.addBasketItemId}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        devices: state.date.devices,
        price: state.basket.price,
        all_quantity:state.basket.all_quantity,
        arr_categories:state.date.arr_categories,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        findCategory: (id, item) => findCategory(dispatch, id, item),
        addBasketItemId: (item) => addBasketItemId(dispatch, item),
        onFindDevice: (search_name) => onFindDevice(dispatch, search_name),
    };
}

export default connect (mapStateToProps, mapDispatchToProps)(Home);
