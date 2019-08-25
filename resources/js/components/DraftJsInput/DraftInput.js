import React, { Component } from 'react';
import { Editor, RichUtils, getDefaultKeyBinding } from 'draft-js';
import BlockControls from './BlockControls';
import InlineControls from './InlineControls';

class DraftInput extends Component {
    constructor(props) {
        super(props);
        this.initHandlers();
    }

    initHandlers() {
        this.handlerToggleBlockControl = this._handlerToggleBlockControl.bind(this);
        this.handlerToggleInlineStyle = this._handlerToggleInlineStyle.bind(this);
        this.handlerKeyCommand = this._handlerKeyCommand.bind(this);
        this.handlerKeyBinding = this._handlerKeyBinding.bind(this);
        this.focusEditor = this._focusEditor.bind(this);
        this.handlerBlockStyle = this._handlerBlockStyle.bind(this);
    }

    _handlerToggleBlockControl(blockType) {
        let newEditorState = RichUtils.toggleBlockType(this.props.editorState, blockType);

        this.props.onChange(newEditorState);
    }

    _handlerToggleInlineStyle(inlineStyle) {
        let newEditorState = RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle);

        this.props.onChange(newEditorState);
    }

    _handlerKeyCommand(command, editorState) {
        let newEditorState = RichUtils.handleKeyCommand(editorState, command);

        if (newEditorState) {
            this.props.onChange(newEditorState);

            return true;
        }

        return false;
    }

    _handlerKeyBinding(e) {
        if (e.keyCode === 9 /* TAB */) {
            let newEditorState = RichUtils.onTab(e, this.props.editorState, 4);

            this.props.onChange(newEditorState);

            return false;
        }

        return getDefaultKeyBinding(e);
    }

    _focusEditor() {
        this.refs.editor.focus();
    }

    _handlerBlockStyle(block) {
        switch (block.getType()) {
            case 'blockquote':
                return 'rich-editor-blockquote';
            default:
                return null;
        }
    }

    getCustomStyleMap() {
        return {
            // Custom overrides for "code" style.
            CODE: {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
                fontSize: 16,
                padding: 2,
            },
        };
    }

    render() {
        let styleMap = this.getCustomStyleMap;
        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let editorContainerClass = 'editor-body-container';
        let contentState = this.props.editorState.getCurrentContent();

        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                editorContainerClass += ' hide-placeholder';
            }
        }

        return (
            <div className="editable-container" onClick={this.focusEditor}>
                <div className="controls-container">
                    <BlockControls
                        editorState={this.props.editorState}
                        onToggle={this.handlerToggleBlockControl.bind(this)}
                    />
                    <InlineControls
                        editorState={this.props.editorState}
                        onToggle={this.handlerToggleInlineStyle.bind(this)}
                    />
                </div>
                <div className={editorContainerClass}>
                    <Editor
                        blockStyleFn={this.handlerBlockStyle}
                        customStyleMap={styleMap}
                        editorState={this.props.editorState}
                        handleKeyCommand={this.handlerKeyCommand}
                        keyBindingFn={this.handlerKeyBinding}
                        onChange={this.props.onChange}
                        placeholder={this.props.placeholder}
                        ref="editor" />
                </div>
            </div>
        );
    }
}

export default DraftInput;