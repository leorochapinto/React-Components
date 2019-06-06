import React, { Component } from 'react';

class NavItemComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <li class="nav-item active">{this.props.children}</li>
        );
    }
}

export default NavItemComponent;