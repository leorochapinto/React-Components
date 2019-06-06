import React, { Component } from 'react';
import NavBarComponent from './components/NavBarComponent';
import {Link} from 'react-router-dom'
class Sobre extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <NavBarComponent></NavBarComponent>
                {this.props.children}
            </div>
        );
    }
}

export default Sobre;