 import React from "react";
import NavBarBrandComponent from "./NavBarBrandComponent";
import NavBarTogglerComponent from "./NavBarTogglerComponent";
import NavComponent from "./NavComponent";
import NavLinkComponent from "./NavLinkComponent";
import NavDropdownComponent from "./NavDropdownComponent";
import NavBarCollapseComponent from "./NavBarCollapseComponent";
import NavDropDownItem from "./NavDropdownItem";
import NavItemComponent from "./NavItemComponent";


class NavBarComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavBarBrandComponent>NavBar</NavBarBrandComponent>
        <NavBarTogglerComponent />
        <NavBarCollapseComponent>
          <NavComponent>
            <NavItemComponent>
              <NavLinkComponent href="http://localhost:3000/">Home</NavLinkComponent>
            </NavItemComponent>
            <NavItemComponent>
              <NavLinkComponent href="http://localhost:3000/App">Sobre</NavLinkComponent>
            </NavItemComponent>
            <NavDropdownComponent>
              <NavDropDownItem>Action</NavDropDownItem>
              <NavDropDownItem>Another Action</NavDropDownItem>
              <NavDropDownItem>Some else</NavDropDownItem>
            </NavDropdownComponent>
            <NavItemComponent>
              <NavLinkComponent />
            </NavItemComponent>
          </NavComponent>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </NavBarCollapseComponent>
      </nav>
    );
  }
}

export default NavBarComponent;
