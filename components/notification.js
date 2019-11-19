import React from 'react';
import Close from '../components/icons/close';

class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        let target = document.getElementById("notif");
        target.classList.remove("show")
        this.props.resetForm();
    }

    render() {
        return (
            <div className={`notification ${this.props.status || " "} 
                ${this.props.showNotification ? " show " : " "}`} id="notif">

                <div className="message">
                    {this.props.message || "Direct message is here."}
                </div>

                <div className="close" onClick={() => this.handleClick()}>
                    <Close />
                </div>

            </div>
        )
    }
}

export default Notification;