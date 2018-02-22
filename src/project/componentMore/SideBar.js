import React, { Component } from 'react';
import '../../main.css';
import { Link } from 'react-router-dom';
import  GoodInBasket from '../componentMore/GoodInBasket';


class SideBar extends Component {
    render() {
        return (
            <div className='col-md-3'>
                <h3 className='lead'>Quick shop</h3>
               <GoodInBasket price={this.props.price} all_quantity={this.props.all_quantity}/>
                <div className='form-group'>
                    <h1 className=''>{this.props.moreItem.name}</h1>
                    <h2 className=''>{this.props.moreItem.price}$</h2>
                </div>
                <Link to='/' className='btn btn-info btn-block'>Back to store</Link>
                <button
                    type='button'
                    onClick={() => this.props.addBasketItemId(this.props.moreItem)}
                    className='btn btn-success btn-block'>
                    Add to cart
                </button>
            </div>
        )
    }
}


    export default SideBar;



