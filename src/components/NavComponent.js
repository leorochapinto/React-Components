import React, { Component } from 'react';

class NavComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
             <ul class="navbar-nav mr-auto">{this.props.children}</ul>
        );
    }
}

export default NavComponent;