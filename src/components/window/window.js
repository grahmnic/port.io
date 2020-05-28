import React from 'react';
import './window.scss';

export default class Window extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.width = this.props.width;
        this.height = this.props.height;
    }

    render() {

        return (
            <div className="window" style={{
                width: this.props.width,
                height: this.props.height
            }}>
                <div className="modalHandle">
                    {this.props.title}
                    <div className="modalBar">
                        <div className="modalBtn">
                            <i class="fas fa-minus"></i>
                        </div>
                        <div className="modalBtn">
                            <i class="fas fa-question"></i>
                        </div>
                    </div>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}