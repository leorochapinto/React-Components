import React, { Component } from 'react';

class NavBarCollapseComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div class="collapse navbar-collapse" id="navbarSupportedContent">{this.props.children}</div>
        );
    }
}

export default NavBarCollapseComponent;