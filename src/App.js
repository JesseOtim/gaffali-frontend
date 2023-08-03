import {
  Navbar,
  Nav,
  Button,
  InputGroup,
  Form,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Heading from "./components/heading/index";
import SubHeading from "./components/subHeading/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import myImage from "../src/assets/sumit-shah.jpg";

const App = () => {
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light" style={{borderBottom:'1px solid grey'}}>
        <Container>
          <Navbar.Brand href="#home" style={{ fontWeight: "bold", color:"black" }}>
            <span style={{ color: "red" }}>|</span>
            <span style={{ color: "green" }}>|</span>
            <span style={{ color: "yellow" }}>|</span> GAFFALI
          </Navbar.Brand>
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
                <NavDropdown.Item href="#action/3.3">
                  Exchange Ticker
                </NavDropdown.Item>
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
                <NavDropdown.Item href="#action/3.3">
                  Markets Bar
                </NavDropdown.Item>
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
                <NavDropdown.Item href="#action/3.2">Wallet</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Others"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">
                  Technical Analysis
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Cross Rates
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Symbol Info
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Heat Map</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Sign in</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Sign up</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">404</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Nav>
        </Container>
        <Button
          variant="outline-danger"
          style={{ marginRight: "5px", fontWeight: "bold" }}
        >
          Sign in
        </Button>{" "}
        <Button
          variant="success"
          style={{
            marginRight: "25px",
            paddingLeft: "5px",
            paddingRight: "5px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Get started
        </Button>{" "}
      </Navbar>
      <Heading />
      <InputGroup
        className="mb-3"
        style={{ width: "760px", marginLeft: "300px", marginTop: "40px" }}
      >
        <Form.Control
          placeholder="Enter Your Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          style={{ paddingTop: "15px", paddingBottom: "15px" }}
        />
        <Button variant="primary" id="button-addon2">
          Get Started
        </Button>
      </InputGroup>
      <Container fluid style={{ marginTop: "80px" }}>
        <Row>
          <Col>
            <h2 style={{ color: "#18214D", marginLeft: "122px" }}>
              The most advance and secure cryptocurrency platform.
            </h2>
            <p style={{ marginLeft: "122px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              iusto, nisi illo nulla alias fugiat repudiandae unde ab maxime
              placeat facere, dicta deleniti ipsam animi expedita quam minus
              perferendis veniam?
            </p>
            <div>
              <ul style={{ listStyle: "none", marginLeft: "92px" }}>
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "green" }}
                  />{" "}
                  Live Technical Analysis
                </li>
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "green" }}
                  />{" "}
                  Live Market Data
                </li>
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "green" }}
                  />{" "}
                  Live Cryptocurrency Price
                </li>
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "green" }}
                  />{" "}
                  Deposit & Withdraw
                </li>
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "green" }}
                  />{" "}
                  Buy & Sell
                </li>
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "green" }}
                  />{" "}
                  Coin Listing
                </li>
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "green" }}
                  />{" "}
                  Manage Wallets
                </li>
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "green" }}
                  />{" "}
                  Market depth
                </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <img
                src={myImage}
                alt="sumit-shah.jpg"
                style={{ height: "512px", width: "600px" }}
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
      {/* container 2 */}
      <Container fluid style={{ marginTop: "80px", marginBottom: "100px" }}>
        <Row>
          <Col>
            <div>
              <img
                src={myImage}
                alt="sumit-shah.jpg"
                style={{ height: "512px", width: "500px", marginLeft: "115px" }}
              ></img>
            </div>
          </Col>
          <Col>
            <h2 style={{ color: "#18214D", marginLeft: "122px" }}>
              Live Market Gainers and Losers tracking
            </h2>
            <p style={{ marginLeft: "122px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              iusto, nisi illo nulla alias fugiat repudiandae unde ab maxime
              placeat facere, dicta deleniti ipsam animi expedita quam minus
              perferendis veniam?
            </p>
            <div>
              <ul style={{ listStyle: "none", marginLeft: "92px" }}>
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "green" }}
                  />{" "}
                  Live Gainers Tracking
                </li>
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "green" }}
                  />{" "}
                  Live Losers Tracking
                </li>
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "green" }}
                  />{" "}
                  Live Market Data
                </li>
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "green" }}
                  />{" "}
                  Live Cryptocurrency Price
                </li>
                <li style={{ marginBottom: "20px" }}>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    style={{ color: "green" }}
                  />{" "}
                  Past Coin Price check
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="divider" /> {/* The horizontal line (divider) */}
      <SubHeading />
      <Container fluid="md" style={{marginTop:'70px'}}>
        <Row>
          <Col sm>
            {" "}
            <Card style={{ width: "18rem", color: '#18214D' }}>
              <Card.Body>
                <Card.Title>Security storage</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quaerat, quidem ut, fugiat blanditiis facere
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm>
            {" "}
            <Card style={{ width: "18rem", color: '#18214D' }}>
              <Card.Body>
                <Card.Title>Protected by insurance</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quaerat, quidem ut, fugiat blanditiis facere
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            {" "}
            <Card style={{ width: "18rem", color: '#18214D' }}>
              <Card.Body>
                <Card.Title>Industry best practices</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
                  quaerat, quidem ut, fugiat blanditiis facere
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
