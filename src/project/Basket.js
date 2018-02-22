import React, { Component } from 'react';
import '../main.css';
import {connect} from 'react-redux';
import { deleteItem, clearCart } from './actions';
import  BasketElements from './componentBasket/BasketElements';
import  AreaButtons from './componentBasket/AreaButtons';
import  EmptyCart from './componentBasket/EmptyCart';

class Basket extends Component {
    render() {
        if (this.props.arr_item.length >= 1) { // need to
            return (
                <div className='view-container'>
                    <div className='container'>
                        <div className='row'>
                            <BasketElements arr_item={this.props.arr_item} price={this.props.price} deleteItem={this.props.deleteItem}/>
                            <AreaButtons clearCart={this.props.clearCart}/>
                        </div>
                    </div>
                </div>
            )
        } else  {
            return  (
             <EmptyCart/>
            )

        }
    }
}

function mapStateToProps(state) {
    return {
        arr_item: state.basket.arr_item,
        price: state.basket.price,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteItem: (id_del) => deleteItem(dispatch, id_del),
        clearCart: () => clearCart(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
