import React from 'react';
import './taskbar.scss';

export default class Taskbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            now: new Date()
        }
    }

    componentDidMount() {
        this.interval = setInterval(function() {
            this.setState({
                now: new Date()
            });
        }.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    prependZero(time) {
        return time.toString().length < 2 ? '0' + time.toString() : time;
    }

    render() {
        return (
            <div className="taskbar">
                <div className="tb-start">
                </div>
                <div className="tb-windows">
                </div>
                <div className="tb-info">
                    <div className="tb-time">
                        {(this.state.now.getMonth() + 1) + "/" + this.state.now.getDate() + "/" + this.state.now.getFullYear()}
                    </div>
                    <div className="tb-info-divider"></div>
                    <div className="tb-date">
                        {((this.state.now.getHours() + 11) % 12 + 1) + ":" + this.prependZero(this.state.now.getMinutes()) + ":" + this.prependZero(this.state.now.getSeconds()) + " " + (this.state.now.getHours() >= 12 ? "PM" : "AM")}
                    </div>
                </div>
            </div>
        );
    }
}