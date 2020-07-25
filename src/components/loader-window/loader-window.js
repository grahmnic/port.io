import React from 'react';
import './loader-window.scss';

export default class LoaderWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            module: ""
        }
    }

    componentDidMount() {
        this.modules = this.props.modules;
        this.interval = setInterval(function() {
            if(!this.modules.length) {
                this.props.callback(this.props.index);
            }
            else {
                this.setState({
                    current: this.state.current + 1 <= this.props.length ? this.state.current + 1 : 0,
                    module: this.modules[0].module
                });
                if(!(this.modules[0].value - 1))
                    this.modules.shift();
                else
                    this.modules[0].value--;
            }
        }.bind(this), 250);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }



    render() {
        const progress = [...Array(this.props.length).keys()].map((e, i) => 
            <div key={e} className={`loader-block ${i > this.state.current ? 'loader-white' : null}`}></div>
        );

        return (
            <div className="loader-wrapper">
                <div className="loader-info">
                    {this.state.module}
                </div>
                <div className="loader-progress">
                    {progress}
                </div>
            </div>
        );
    }
}