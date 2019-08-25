import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className={`card ${this.props.className}`}>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;