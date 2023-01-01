import React, { Component } from 'react';
import Capture from './Capture';
import Camera from './Camera';
import "../App.css";

class Form extends Component {
    render() {
        return (
            <div>
                <Camera/>
                <Capture/>
            </div>
        );
    }
}

export default Form;
