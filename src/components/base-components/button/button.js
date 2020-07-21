import React from 'react';
import './button.scss';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div onClick={this.props.mode ? null : this.props.callback} className={`btn-wrapper ${this.props.mode ? 'btn-disabled' : null}`} style={{
                width: this.props.width,
                height: this.props.height
            }}>
                <div className="btn-inner">
                    <div>{this.props.before}</div>
                    <div>{this.props.children}</div>
                    <div>{this.props.after}</div>
                </div>
            </div>
        );
    }
}