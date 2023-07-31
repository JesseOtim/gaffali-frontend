import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

const App = () => {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontWeight:'bold'}}><span style = {{color:'darkgreen'}} >|</span><span style={{color:'orangered'}}>|</span><span style={{color:'grey'}}>|</span> GAFFALI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Landing Page"
                menuVariant="dark"
            >
                <NavDropdown.Item href="#action/3.1">
                  Landing page 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Landing page 2
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Exchange"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Exchange</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Exchange Live Price
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Exchange Ticker</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Exchange Fluid
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

             <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Markets"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Markets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Markets Line
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Markets Bar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Markets Overview
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Markets Screener
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Markets Crypto
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dashboard"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Wallet
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Others"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Technical Analysis</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Cross Rates
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Symbol Info</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Heat Map
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Sign in
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Sign up
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                404
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
