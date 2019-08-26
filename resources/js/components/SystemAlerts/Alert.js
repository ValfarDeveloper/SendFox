import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

const ALERT_TYPES = {
    ALERT_SUCCESS: 0,
    ALERT_ERROR: 1,
    ALERT_INFO: 2
};

class Alert extends Component {
    getDetailsFromType(alertType){
        switch(alertType){
            case ALERT_TYPES.ALERT_ERROR:
                return {
                    color: '#f73859',
                    title: 'An error has ocurred...'
                };
            case ALERT_TYPES.ALERT_INFO:
                return {
                    color: '#7ac7c4',
                    title: 'Here some info for you...'
                };
            case ALERT_TYPES.ALERT_SUCCESS: 
                return {
                    color: '#27aa80',
                    title: 'Well done!'
                };
        }
    }

    render() {
        let alertDetails = this.getDetailsFromType(this.props.alertType);

        return (
            <div className="system-alert card" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="card-body">
                    <div className="alert-header-container card-title">
                        <div className="alert-title-container">
                            <div className="pr-3">
                                <FontAwesomeIcon icon={faBell} color={alertDetails.color} />
                            </div>
                            <strong className="mr-auto alert-title">{ alertDetails.title }</strong>
                            <small className="text-muted alert-title-date">{this.props.alertTime}</small>
                        </div>
                        <button className="alert-close-btn ml-2 mb-1" aria-label="Close" onClick={this.props.onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="alert-body card-text">
                        { this.props.message }
                    </div>
                </div>
            </div>
        );
    }
}

export {Alert, ALERT_TYPES};