import React, { Component } from 'react';
import '../../main.css';

class BasketElements extends Component {
    render() {
        return (
            <div className='col-md-9'>
                <div className='table-responsive'>
                    <table className='table-bordered table-striped table-condensed cf'>
                        <tbody>
                        {this.props.arr_item.map((item, index) => (
                            <tr key={index}
                                className='item-checout'>
                                <td className='first-column-checkout'>
                                    <img className='img-thumbnail ' src={item.image}
                                         alt="Card image cap"/>
                                </td>
                                <td> {item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <span className='delete-cart'
                                          onClick={() => { this.props.deleteItem(item.id)}}/>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className='row'>
                    <div className='pull-right total-user-checkout'>
                        <b>Total:</b>
                        {this.props.price}
                    </div>
                </div>
            </div>
        )
    }
}

export default BasketElements;

