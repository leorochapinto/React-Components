import React, { Component } from "react";

class NavDropdownComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    );
  }
}

export default NavDropdownComponent;
