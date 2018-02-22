import React, { Component } from 'react';
import '../../main.css';
import { Link } from 'react-router-dom';


class Phones extends Component {

    funcDescription(item){
        let all_inf = item.split(".");
        let small_inf = all_inf[0]+ "...";
        return small_inf;
    }

    render() {
        return (
            <div className='col-md-9'>
                <div className='row'>
                    <div className='books row'>
                        {this.props.devices.map((item, index) =>
                            <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
                                <div className='thumbnail'>
                                    <Link to={`/more/${item.id}`}>
                                        <img className="img-thumbnail" src={item.image}
                                              alt="Card image"/>
                                    </Link>
                                    <div className="caption">
                                        <h5 className='pull-right'>{item.price}$</h5>
                                        <h5>{item.name}</h5>
                                        <p>{this.funcDescription(item.description)}</p>
                                        <p className='itemButton '>
                                            <button type="button" className="btn btn-primary"
                                                    onClick={() => this.props.addBasketItemId(item)} >
                                                Buy now
                                            </button>
                                            <Link to={`/more/${item.id}`}
                                                  className="btn btn-default">
                                                More Inf
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}


export default Phones;
