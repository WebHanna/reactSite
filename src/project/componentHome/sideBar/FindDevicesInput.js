import React, { Component } from 'react';
import '../../../main.css';

class FindDevicesInput extends Component {
    render() {
        return (
            <div className='well blosd'>
                <h3 className='lead'>Quick shop</h3>
                <div className='input-group'>
                    <form>
                        <input
                            type='text'
                            className='form-control'
                            ref={(input) => {
                                this.searchInput = input
                            }}/>
                    </form>
                    <span className='input-group-btn'>
                        <button className='btn btn-default'
                                onClick={() => this.props.onFindDevice(this.searchInput.value)}>
                            <span className='glyphicon glyphicon-search'/>
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

export default FindDevicesInput;
