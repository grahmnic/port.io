import React from 'react';
import './button.scss';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.width = this.props.width;
        this.height = this.props.height;
    }

    render() {
        return (
            <div onClick={this.props.callback} className="btn-wrapper" style={{
                width: this.props.width,
                height: this.props.height
            }}>
                <div className="btn-inner">
                    <div>{this.props.text}</div>
                </div>
            </div>
        );
    }
}