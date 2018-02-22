import React, { Component } from 'react';
import '../main.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {setMore, addBasketItemId} from './actions';
import  Phone from './componentMore/Phone';
import  SideBar from './componentMore/SideBar';

class More extends Component {

    componentWillMount(){
        this.props.devices.forEach((item) => {
            if(this.props.match.params.id === item.id){
                this.props.setMore(item);
            }
        });
    }

    render() {
        if(this.props.moreItem){
            return (
                <div>
                    <div className='view-container'>
                        <div className='container'>
                            <div className='row'>
                                <Phone moreItem={this.props.moreItem} filterArr={this.props.filterArr}/>
                                <SideBar
                                    moreItem={this.props.moreItem} addBasketItemId={this.props.addBasketItemId}
                                    price={this.props.price} all_quantity={this.props.all_quantity}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else return false;
    }
}

function mapStateToProps(state) {
    return {
        moreItem: state.more.moreItem,
        filterArr: state.more.filterArr,
        devices: state.date.devices,
        price: state.basket.price,
        all_quantity:state.basket.all_quantity,
}
}

function mapDispatchToProps(dispatch) {
    return {
        setMore: (item) => setMore(dispatch, item),
        addBasketItemId: (item) => addBasketItemId(dispatch, item),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(More);