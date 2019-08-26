import React, { Component } from 'react'

class ControlButton extends Component {
    handlerMouseDown(e) {
        e.preventDefault();
        this.props.onToggle(this.props.style);
    }

    render() {
        let className = 'rich-editor-button';

        if (this.props.active) {
            className += ' rich-editor-button-active';
        }

        return (
            <span className={className} onMouseDown={this.handlerMouseDown.bind(this)}>
                {this.props.label}
            </span>
        );
    }
}

export default ControlButton;