import React, { Component } from 'react';
import { Alert, ALERT_TYPES } from './Alert';

class SystemAlerts extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="alerts-container">
                {this.props.alerts.map((alert, index) => {
                    return (
                        <Alert 
                            alertType={alert.type}
                            alertTime="Just now"
                            key={`alert-${index}`}
                            message={alert.message}
                            onClose={() => alert.closeHandler(index)}
                        />
                    );
                })}
            </div>
        );
    }
}

export {SystemAlerts, ALERT_TYPES};