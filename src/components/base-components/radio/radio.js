import React from 'react';
import './radio.scss';

export default class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        const radioButtons = this.props.options.map((e, i) => 
            <label key={e.name} className="radio-btn">
                <div className="radio-input">
                    <input className="radio-check" type="radio" name="radio" value={e.value} onChange={this.handleChange}/>
                    <span className="checkmark"><div><div className="dot"></div></div></span>
                </div>
                <div className="radio-name">
                    <div style={{width: "fit-content", border: parseInt(this.state.value) === e.value ? "1px dotted black" : "1px dotted transparent"}}>
                        {e.name}
                    </div>                    
                </div>
                {e.description ? <div className="radio-description">{e.description}</div> : null}
            </label>
        );

        return (
            <div className="radio-wrapper" style={{
                flexDirection: this.props.direction
            }}>
                {radioButtons}
            </div>
        );
    }
}