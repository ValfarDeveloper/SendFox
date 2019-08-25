import React, { Component } from 'react';
import ControlButton from './ControlButton';

const BLOCK_TYPES = [
    { label: 'H1', style: 'header-one' },
    { label: 'H2', style: 'header-two' },
    { label: 'H3', style: 'header-three' },
    { label: 'H4', style: 'header-four' },
    { label: 'H5', style: 'header-five' },
    { label: 'H6', style: 'header-six' },
    { label: 'Blockquote', style: 'blockquote' },
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' },
    { label: 'Code Block', style: 'code-block' },
];

class BlockControls extends Component{
    render() {
        let { editorState } = this.props;
        let selection = editorState.getSelection();
        let blockType = editorState.getCurrentContent()
                                    .getBlockForKey(selection.getStartKey())
                                    .getType();

        return (
            <div className="rich-editor-controls">
                {BLOCK_TYPES.map((type) =>
                    <ControlButton
                        key={type.label}
                        active={type.style === blockType}
                        label={type.label}
                        onToggle={this.props.onToggle}
                        style={type.style}
                    />
                )}
            </div>
        );
    }
}

export default BlockControls;