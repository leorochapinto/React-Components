import React, { Component } from 'react';

class NavBarTogglerComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        );
    }
}

export default NavBarTogglerComponent;