import React, { Component } from 'react';
import '../../../main.css';

class FilterBrads extends Component {

    render() {
        return (
            <div className='well'>
                <h4>Brand</h4>
                <ul className="list-group">
                    {this.props.arr_categories.map((item, index) =>
                        <button key={index} className={item.active ? 'list-group-item active' : 'list-group-item'}
                                onClick={() => this.props.findCategory(item.id, item.active, item)}>
                            {item.name}
                        </button>
                    )}
                </ul>
            </div>
        )
    }
}


export default FilterBrads;
