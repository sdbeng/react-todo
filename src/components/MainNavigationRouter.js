import React, {Component} from 'react'
// import {Route, Link, Match, Miss} from 'react-router-dom'

class MainNavigationRouter extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>


        {/* <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/" href="/" >My React</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="/resume"><Link to="/resume" >Resume</Link></NavItem>
                <NavItem eventKey={2} href="/projects">Projects</NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Node Backend1</MenuItem>
                  <MenuItem eventKey={3.2}>Firebase Backend</MenuItem>
                  <MenuItem eventKey={3.3}>Node Backend-MongoDB</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>React server</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">Login</NavItem>
                <NavItem eventKey={2} href="#">About</NavItem>
              </Nav>
            </Navbar.Collapse>

        </Navbar> */}
      </div>

  )
  }

}

export default MainNavigationRouter
