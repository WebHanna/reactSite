import React, { Component } from 'react';
import '../../../main.css';
import { Link } from 'react-router-dom';

class GoodInBasket extends Component {

    render() {
        return (
            <Link to='/basket'>
                <div className='cart'>
                    <div className='dropdown'>
                        <div className='btn btn-inverse btn-block btn-lg'>
                            <span>
                                {this.props.all_quantity} item(s) - ${this.props.price}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
export default GoodInBasket;
