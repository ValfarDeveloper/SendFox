import React, { Component } from 'react';
import ControlButton from './ControlButton';

const INLINE_STYLES = [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
    { label: 'Monospace', style: 'CODE' },
];

class InlineControls extends Component{
    render(){
        let currentStyle = this.props.editorState.getCurrentInlineStyle();

        return (
            <div className="rich-editor-controls">
                {INLINE_STYLES.map((type) =>
                    <ControlButton
                        key={type.label}
                        active={currentStyle.has(type.style)}
                        label={type.label}
                        onToggle={this.props.onToggle}
                        style={type.style}
                    />
                )}
            </div>
        );
    }
}

export default InlineControls;