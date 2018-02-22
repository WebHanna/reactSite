import React, { Component } from 'react';
import '../../main.css';

class Phone extends Component {
    render() {
        return (
            <div className='col-md-9'>
                <div className='thumbnail'>
                    <div className='row'>
                        <div className='col-md-6 center'>
                            <img
                                className='img-thumbnail'
                                src={this.props.moreItem.image}
                                alt={this.props.moreItem.image}
                            />
                        </div>
                        <div className='col-md-6 pad'>
                            {this.props.filterArr.map((item, index) =>
                                <div className='column' key={index} >
                                    <div className='ab-details-title'>
                                        <p>{item[0]}</p>
                                    </div>
                                    <div className='ab-details-info'>
                                        {item[1]}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='caption-full'>
                        <h4 className='pull-right'>${this.props.moreItem.price}</h4>
                        <h4>{this.props.moreItem.name}</h4>
                        <p>{this.props.moreItem.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Phone;



