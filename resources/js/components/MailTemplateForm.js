import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { EditorState, convertToRaw } from 'draft-js';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Card from './Card';
import DraftInput from './DraftJsInput/DraftInput';
import { SystemAlerts, ALERT_TYPES } from './SystemAlerts/SystemAlerts';

class MailTemplateForm extends Component {
    constructor(props){
        super(props);
        this.state = this.getInitialState();
        this.initHandlers();
    }

    initHandlers(){
        this.handlerSaveClick = this._handlerSaveClick.bind(this);
        this.handlerChangeBody = this._handlerChangeBody.bind(this);
        this.handlerChangeSubject = this._handlerChangeSubject.bind(this);
    }

    getInitialState(){
        return {
            alerts: [],
            bodyContent: EditorState.createEmpty(),
            errors: {
                body: "",
                subject: "",
            },
            isSaving: false,
            subject: ""
        };
    }

    _handlerChangeBody(bodyContent){
        this.setState({bodyContent});
    }

    _handlerChangeSubject(event){
        this.setState({subject: event.target.value});
    }

    async _handlerSaveClick(){
        if(!this.state.isSaving){
            try{
                this.setState({isSaving: true});
                let emailTemplateSubject = this.state.subject;
                let emailTemplateBody = convertToRaw(this.state.bodyContent.getCurrentContent());
                let data = {emailTemplateSubject, emailTemplateBody};
    
                if(this.isValidData(data)){
                    await this.saveEmailTemplate(data);
                }
            }
            catch(err){
                this.createSystemAlert(ALERT_TYPES.ALERT_ERROR, `Error saving information: ${err.message}`);
            }
            finally{
                this.setState({isSaving: false});
            }
        }
    }

    async saveEmailTemplate(data){
        let storeRoute = javascriptBackVars.storeMailTemplateRoute;
        let storeResult = await axios.post(storeRoute, data);

        this.createSystemAlert(ALERT_TYPES.ALERT_SUCCESS,  `Email template successfully saved with the id: ${storeResult.data.id}`);
    }

    isValidData(data){
        let isBodyEmpty = data.emailTemplateBody.blocks.length === 1 && data.emailTemplateBody.blocks[0].text === "";
        let isSubjectEmpty = data.emailTemplateSubject === "";
        let isSubjectLengthGT100 = data.emailTemplateSubject.length > 100;
        let bodyErrorMessage = "";
        let subjectErrorMessage = "";
        let isValidData = !isBodyEmpty && !isSubjectEmpty && !isSubjectLengthGT100;

        if(isBodyEmpty){
            bodyErrorMessage = "The body doesn't must be empty.";
        }
        
        if(isSubjectEmpty){
            subjectErrorMessage = "The subject doesn't must be empty.";
        }
        else if(isSubjectLengthGT100){
            subjectErrorMessage = "The max length for the subject is 100 characters."
        }

        this.setState({
            errors: {
                body: bodyErrorMessage,
                subject: subjectErrorMessage,
            }
        });

        if(!isValidData){
            this.createSystemAlert(ALERT_TYPES.ALERT_ERROR, `${subjectErrorMessage} \n ${bodyErrorMessage}`);
        }

        return isValidData;
    }

    createSystemAlert(alertType, alertMessage){
        this.setState({
            alerts: [
                ...this.state.alerts, 
                {
                    type: alertType,
                    message: alertMessage,
                    closeHandler: this.systemAlertCloseHandler.bind(this)
                }
            ]
        });
    }

    systemAlertCloseHandler(alertIndex){
        let alerts = [...this.state.alerts];

        alerts.splice(alertIndex, 1);

        this.setState({alerts});
    }

    render() {
        return (
            <>
                <SystemAlerts alerts={this.state.alerts} />
                <div className="row justify-content-center">
                    <div className="col-10 col-xl-6">
                        <Card className="mail-template-form">
                            <div className="template-title">Subject</div>

                            {this.state.errors.subject !== "" ? (
                                <div className="text-danger">
                                    {this.state.errors.subject}
                                </div> ) : ""}

                            <input 
                                className="subject-input"
                                name="subject" 
                                onChange={this.handlerChangeSubject}
                                placeholder="Write the subject of your template here..."
                                type="text"
                                value={this.state.subject} />
                            <div className="template-title">Body</div>

                            {this.state.errors.body !== "" ? (
                                <div className="text-danger">
                                    {this.state.errors.body}
                                </div> ) : ""}

                            <DraftInput 
                                editorState={this.state.bodyContent} 
                                onChange={this.handlerChangeBody} 
                                placeholder="Write the body of your template here..."/>

                            <div className="row justify-content-end p-4">
                                <button className="btn btn-success px-5" onClick={this.handlerSaveClick}>
                                    {this.state.isSaving ? (<FontAwesomeIcon icon={faSpinner} spin />) : "Save"}
                                </button>
                            </div>
                        </Card>
                    </div>
                </div>
            </>
        );
    }
}

if (document.getElementById('create-mail-template')) {
    ReactDOM.render(<MailTemplateForm />, document.getElementById('create-mail-template'));
}

export default MailTemplateForm;