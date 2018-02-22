import React, { Component } from 'react';
import '../../main.css';
import { Link } from 'react-router-dom';


class AreaButtons extends Component {
    render() {
        return (
            <div className='col-md-3 btn-user-checkout'>
                <Link   className='btn btn-info' to='/'>
                    <span className='glyphicon glyphicon-info-sign'/>
                    <span>Continue shopping!</span>
                </Link>
                <div>
                    <button className='btn btn-danger' onClick={() => {
                        this.props.clearCart()
                    }}>
                        <span className='glyphicon glyphicon--envelope'/>
                        Clear cart
                    </button>
                </div>
            </div>
        )
    }
}

export default AreaButtons;



