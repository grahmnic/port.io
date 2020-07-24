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
        // this.modules = this.props.modules;
        // this.interval = setInterval(function() {
        //     if(!this.modules.length)
        //         this.props.callback(this.props.id);
        //     else {
        //         this.setState({
        //             current: this.state.current + 1 > this.props.length ? this.state.current + 1 : 1,
        //             module: this.modules[0].module
        //         });
        //         if(!this.modules[0].value)
        //             this.modules.shift();
        //         else
        //             this.modules[0].value--;
        //     }
        // }.bind(this), 250);
    }

    componentWillUnmount() {
        //clearInterval(this.interval);
    }



    render() {
        const progress = [...Array(this.props.length).keys()].map((e) => 
            <div key={e} className="loader-block"></div>
        );

        return (
            <div className="loader-wrapper">
                <div className="loader-info">
                    {/* {this.state.module} */} Loading files
                </div>
                <div className="loader-progress">
                    {progress}
                </div>
            </div>
        );
    }
}