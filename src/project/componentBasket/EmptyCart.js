import React, { Component } from 'react';
import '../../main.css';
import { Link } from 'react-router-dom';


class EmptyCartimport  extends Component {
    render() {
        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            <div>Your shopping cart is empty!</div>
                        </div>
                        <div className='col-md-3 btn-user-checkout'>
                            <Link to='/'>
                                <div className='btn btn-info'>
                                    <span className='glyphicon glyphicon-info-sign'/>
                                    <span>Continue shopping!</span>
                                </div>
                            </Link>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmptyCartimport;



