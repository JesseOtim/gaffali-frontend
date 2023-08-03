import { Navbar, Nav, Button, InputGroup, Form, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Heading from "./components/heading/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';


const App = () => {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{fontWeight:'bold'}}><span style = {{color:'red'}} >|</span><span style={{color:'green'}}>|</span><span style={{color:'yellow'}}>|</span> GAFFALI</Navbar.Brand>
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
        <Button variant="outline-danger" style={{marginRight:'5px', fontWeight:'bold'}}>Sign in</Button>{' '}
        <Button variant="success" style={{marginRight:'25px', paddingLeft:'5px', paddingRight:'5px', fontWeight:'bold', color:'white'}}>Get started</Button>{' '}
      </Navbar>
      <Heading/>
      <InputGroup className="mb-3"style={{width:'760px', marginLeft:'300px',marginTop:'40px'}}>
        <Form.Control
          placeholder="Enter Your Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        style={{paddingTop:'15px', paddingBottom:'15px'}}/>
        <Button variant="primary" id="button-addon2">
          Get Started
        </Button>
      </InputGroup>

      <Container>
      <Row>
        <Col>
        <h1>The most advance and secure cryptocurrency platform.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iusto, nisi illo nulla alias fugiat repudiandae unde ab maxime placeat facere, dicta deleniti ipsam animi expedita quam minus perferendis veniam?</p>
        <ul style={{listStyle:'none'}}>
          <li style={{marginBottom:'20px'}}><FontAwesomeIcon icon={faCircleCheck} style={{color:'darkgreen'}}/> Live Technical Analysis</li>
          <li style={{marginBottom:'20px'}}><FontAwesomeIcon icon={faCircleCheck} style={{color:'darkgreen'}}/> Live Market Data</li>
          <li style={{marginBottom:'20px'}}><FontAwesomeIcon icon={faCircleCheck} style={{color:'darkgreen'}}/> Live Cryptocurrency Price</li>
          <li style={{marginBottom:'20px'}}><FontAwesomeIcon icon={faCircleCheck} style={{color:'darkgreen'}}/> Deposit & Withdraw</li>
          <li style={{marginBottom:'20px'}}><FontAwesomeIcon icon={faCircleCheck} style={{color:'darkgreen'}}/> Buy & Sell</li>
          <li style={{marginBottom:'20px'}}><FontAwesomeIcon icon={faCircleCheck} style={{color:'darkgreen'}}/> Coin Listing</li>
          <li style={{marginBottom:'20px'}}><FontAwesomeIcon icon={faCircleCheck} style={{color:'darkgreen'}}/> Manage Wallets</li>
          <li style={{marginBottom:'20px'}}><FontAwesomeIcon icon={faCircleCheck} style={{color:'darkgreen'}}/> Market depth</li>
        </ul>
        </Col>
        <Col>Madooo</Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
