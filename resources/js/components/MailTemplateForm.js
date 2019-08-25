import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { EditorState } from 'draft-js';
import Card from './Card';
import DraftInput from './DraftJsInput/DraftInput';

class MailTemplateForm extends Component {
    constructor(props){
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(){
        return {
            bodyContent: EditorState.createEmpty()
        };
    }

    bodyEditorChangeHandler(bodyContent){
        this.setState({bodyContent});
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-10 col-xl-6">
                    <Card className="mail-template-form">
                        <div className="template-title">Subject</div>
                        <input 
                            className="subject-input"
                            name="subject" 
                            placeholder="Write the subject of your template here..."
                            type="text"/>
                        <div className="template-title">Body</div>
                        <DraftInput 
                            editorState={this.state.bodyContent} 
                            onChange={this.bodyEditorChangeHandler.bind(this)} 
                            placeholder="Write the body of your template here..."/>
                    </Card>
                </div>
            </div>
        );
    }
}

if (document.getElementById('create-mail-template')) {
    ReactDOM.render(<MailTemplateForm />, document.getElementById('create-mail-template'));
}

export default MailTemplateForm;