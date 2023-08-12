import {
  Navbar,
  Nav,
  Button,
  InputGroup,
  Form,
  Row,
  Col,
  Card,
  Container,
  NavDropdown,
} from "react-bootstrap";
import Heading from "./components/heading/index";
import SubHeading from "./components/subHeading/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import myImage from "../src/assets/sumit-shah.jpg";
import Logo from "./assets/GaffaliLOGO.svg";


const App = () => {
  return (
    <div className="App">
      <Navbar
        bg="light"
        data-bs-theme="light"
        style={{ borderBottom: "1px solid grey" }}
      >
        <Container>
          <Navbar.Brand
            href="#home"
            style={{ fontWeight: "bold", color: "black" }}
          >
            <img src={Logo} alt="GaffaliLOGO.svg"></img>
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
      {/* Heading starts here */}
      <Heading />
      {/* Heading ends here */}
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
      <Container fluid="md" style={{ marginTop: "70px", marginLeft: "150px" }}>
        <Row className="justify-content-center">
          <Col sm>
            {" "}
            <Card
              style={{ width: "18rem", color: "#18214D", textAlign: "center" }}
            >
              <Card.Body>
                <svg
                  id="Layer_5"
                  enable-background="new 0 0 64 64"
                  height="100"
                  viewBox="0 0 64 64"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m60 46h-6c-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3h2v1c0 .552-.449 1-1 1h-8c0-1.383-.945-2.539-2.22-2.884.139-.346.22-.721.22-1.116s-.081-.77-.22-1.116c1.275-.346 2.22-1.501 2.22-2.884v-2c0-1.383-.945-2.539-2.22-2.884.139-.346.22-.721.22-1.116s-.081-.77-.22-1.116c1.275-.346 2.22-1.501 2.22-2.884v-2c0-1.654-1.346-3-3-3h-1v-2h11c4.962 0 9-4.038 9-9s-4.038-9-9-9c-.426 0-.847.039-1.263.098-1.389-8.107-8.393-14.098-16.737-14.098-6.857 0-13.017 4.139-15.655 10.405-.75-.266-1.545-.405-2.345-.405-2.773 0-5.269 1.671-6.381 4.154-.526-.096-1.066-.154-1.619-.154-4.962 0-9 4.038-9 9s4.038 9 9 9h11v2h-1c-1.654 0-3 1.346-3 3h-4v-1c0-1.654-1.346-3-3-3h-6c-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3v-1h4c0 1.383.945 2.539 2.22 2.884-.139.346-.22.721-.22 1.116s.081.77.22 1.116c-1.275.345-2.22 1.501-2.22 2.884h-8c-1.654 0-3 1.346-3 3v1h-2c-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3v-4c0-1.654-1.346-3-3-3h-2v-1c0-.552.449-1 1-1h8c0 1.383.945 2.539 2.22 2.884-.139.346-.22.721-.22 1.116s.081.77.22 1.116c-1.275.345-2.22 1.501-2.22 2.884v2c0 1.654 1.346 3 3 3h24c1.654 0 3-1.346 3-3h8c1.654 0 3-1.346 3-3v-1h2c1.654 0 3-1.346 3-3v-4c0-1.654-1.346-3-3-3zm-49-5c0 .552-.449 1-1 1h-6c-.551 0-1-.448-1-1v-4c0-.552.449-1 1-1h6c.551 0 1 .448 1 1zm0 14v4c0 .552-.449 1-1 1h-6c-.551 0-1-.448-1-1v-4c0-.552.449-1 1-1h6c.551 0 1 .448 1 1zm19.503-8.419c-1.185-.689-1.737-2.003-1.409-3.348.255-1.042 1.128-1.905 2.173-2.148.249-.058.496-.086.739-.086.677 0 1.318.222 1.857.649.723.575 1.137 1.431 1.137 2.352 0 1.068-.562 2.033-1.503 2.581l-.497.289v9.13c0 .552-.449 1-1 1s-1-.448-1-1v-9.13zm-1.503 8.419h-7c-.551 0-1-.448-1-1s.449-1 1-1h7zm6-2h7c.551 0 1 .448 1 1s-.449 1-1 1h-7zm10-3c0 .552-.449 1-1 1h-2-7v-3.021c.373-.281.695-.615.973-.979h6.027 2c.551 0 1 .448 1 1zm-8.105-7h5.105c.551 0 1 .448 1 1s-.449 1-1 1h-5.11c.068-.327.11-.661.11-1 0-.34-.039-.674-.105-1zm-26.895-12c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7h2c0-3.701-2.248-6.886-5.449-8.267.843-1.643 2.556-2.733 4.449-2.733.844 0 1.679.215 2.416.624l1.039.575.39-1.122c2.096-6.027 7.785-10.077 14.155-10.077 7.415 0 13.629 5.362 14.792 12.592-.999.381-1.93.939-2.744 1.658l1.323 1.499c1.278-1.128 2.922-1.749 4.629-1.749 3.86 0 7 3.14 7 7s-3.14 7-7 7h-11v-3c0-6.065-4.935-11-11-11s-11 4.935-11 11v3zm13-3c0-4.962 4.038-9 9-9s9 4.038 9 9v7h-2v-7c0-3.86-3.14-7-7-7s-7 3.14-7 7v7h-2zm14 3h-10v-3c0-2.757 2.243-5 5-5s5 2.243 5 5zm-10 2h10v2h-10zm-8 5c0-.552.449-1 1-1h24c.551 0 1 .448 1 1v2c0 .552-.449 1-1 1h-2-6.006c-.254-.337-.547-.647-.887-.917-1.203-.955-2.769-1.304-4.293-.945-1.142.266-2.138.944-2.824 1.862h-5.99-2c-.551 0-1-.448-1-1zm2 6c0-.552.449-1 1-1h5.111c-.133.678-.136 1.356-.003 2h-5.108c-.551 0-1-.448-1-1zm-2 4c0-.552.449-1 1-1h2 6.02c.277.365.602.697.98.98v3.02h-7-2c-.551 0-1-.448-1-1zm26 12c0 .552-.449 1-1 1h-24c-.551 0-1-.448-1-1v-2c0-.552.449-1 1-1h2 7.184c.414 1.161 1.514 2 2.816 2s2.402-.839 2.816-2h7.184 2c.551 0 1 .448 1 1zm16-7c0 .552-.449 1-1 1h-6c-.551 0-1-.448-1-1v-4c0-.552.449-1 1-1h6c.551 0 1 .448 1 1z" />
                  <path d="m55 50h4v2h-4z" />
                  <path d="m5 56h4v2h-4z" />
                  <path d="m5 38h4v2h-4z" />
                  <path d="m46.084 13.598 1.832-.802c-2.071-4.736-6.748-7.796-11.916-7.796v2c4.373 0 8.331 2.59 10.084 6.598z" />
                  <path d="m59 24c0-2.757-2.243-5-5-5v2c1.654 0 3 1.346 3 3s-1.346 3-3 3h-1v2h1c2.757 0 5-2.243 5-5z" />
                  <path d="m49 27h2v2h-2z" />
                  <path d="m45 27h2v2h-2z" />
                  <path d="m5 24h2c0-1.654 1.346-3 3-3v-2c-2.757 0-5 2.243-5 5z" />
                </svg>
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
            <Card
              style={{ width: "18rem", color: "#18214D", textAlign: "center" }}
            >
              <Card.Body>
                <svg
                  id="Layer_5"
                  enable-background="new 0 0 64 64"
                  height="100"
                  viewBox="0 0 64 64"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m32 23c-2.438 0-4.467-1.756-4.906-4.069l1.351.901 1.109-1.664-3.554-2.37-3.555 2.37 1.109 1.664 1.5-1c.414 3.469 3.369 6.168 6.946 6.168 1.964 0 3.85-.833 5.175-2.285l-1.479-1.348c-.946 1.038-2.293 1.633-3.696 1.633z" />
                  <path d="m38.946 17.168c-.414-3.469-3.369-6.168-6.946-6.168-2.029 0-3.957.879-5.287 2.413l1.51 1.311c.951-1.096 2.328-1.724 3.777-1.724 2.438 0 4.467 1.756 4.906 4.069l-1.351-.901-1.109 1.664 3.554 2.37 3.555-2.37-1.109-1.664z" />
                  <path d="m51 21h2c0-2.206-1.794-4-4-4v2c1.103 0 2 .897 2 2z" />
                  <path d="m13 23h2v2h-2z" />
                  <path d="m17 23h2v2h-2z" />
                  <path d="m21 23h2v2h-2z" />
                  <path d="m58.333 38h-2.333v-4c0-1.654-1.346-3-3-3h-13c-.552 0-1-.449-1-1v-1h10c4.411 0 8-3.589 8-8s-3.589-8-8-8c-.02 0-.039.003-.058.004-.498-4.495-4.316-8.004-8.942-8.004-1.487 0-2.93.362-4.228 1.056-2.238-3.141-5.896-5.056-9.772-5.056-6.617 0-12 5.383-12 12 0 .023.002.046.003.069-3.942.493-7.003 3.858-7.003 7.931 0 4.411 3.589 8 8 8h10v1c0 .551-.448 1-1 1h-11c-1.654 0-3 1.346-3 3v1h-6c-1.654 0-3 1.346-3 3v10c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-10c0-1.654-1.346-3-3-3h-6v-1c0-.552.448-1 1-1h11c1.654 0 3-1.346 3-3v-1h4v4.069c-3.94.495-7 3.859-7 7.931 0 2.78 1.427 5.231 3.585 6.665-6.123 1.89-10.585 7.6-10.585 14.335v1h30v-1c0-6.735-4.462-12.445-10.585-14.335 2.158-1.434 3.585-3.885 3.585-6.665 0-4.072-3.06-7.436-7-7.931v-4.069h4v1c0 1.654 1.346 3 3 3h13c.552 0 1 .448 1 1v4h-7v16h16v-12.5zm-39.333 0v10c0 .552-.448 1-1 1h-14c-.552 0-1-.448-1-1v-10c0-.552.448-1 1-1h14c.552 0 1 .448 1 1zm18.56 12.264c.361.172.713.359 1.055.563l-.5 2.498-2.134 1.067zm-1.706 4.46 1.001 3.006-3.269 3.27h-.133zm-5.44 6.276-3.27-3.271 1.001-3.005 2.402 6.276zm-2.396-6.609-2.133-1.067-.5-2.498c.342-.203.693-.391 1.054-.562zm-4.417-2.288.515 2.573 1.662.831-.922 2.764 2.73 2.729h-3.586v-4h-2v4h-2.962c.272-3.56 1.993-6.713 4.563-8.897zm21.361 8.897h-2.962v-4h-2v4h-3.586l2.73-2.729-.922-2.764 1.662-.831.515-2.573c2.57 2.184 4.291 5.337 4.563 8.897zm-9.264-11.464-3.698 9.667-3.699-9.666c1.173-.349 2.414-.537 3.699-.537 1.284 0 2.525.188 3.698.536zm2.302-8.536c0 3.309-2.691 6-6 6s-6-2.691-6-6 2.691-6 6-6 6 2.691 6 6zm-29-20c0-3.02 2.244-5.518 5.186-5.933.277 1.591.866 3.114 1.756 4.479l1.676-1.092c-1.058-1.622-1.618-3.508-1.618-5.454 0-5.514 4.486-10 10-10 3.51 0 6.807 1.886 8.604 4.923l.546.923.883-.609c1.171-.809 2.543-1.237 3.967-1.237 3.612 0 6.594 2.751 6.961 6.269-1.853.488-3.494 1.628-4.595 3.258l1.658 1.119c1.12-1.657 2.979-2.646 4.976-2.646 3.309 0 6 2.691 6 6s-2.691 6-6 6h-34c-3.309 0-6-2.691-6-6zm44 19h4v2h-4zm8 12h-12v-12h2v4h8v-3l2 1.5z" />
                  <path d="m51 48h8v2h-8z" />
                  <path d="m17 45h-2v-2h-2v2h-2v-4h-2v4h-2v-6h-2v8h12z" />
                </svg>
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
            <Card
              style={{ width: "18rem", color: "#18214D", textAlign: "center" }}
            >
              <Card.Body>
                <svg
                  id="Layer_5"
                  enable-background="new 0 0 64 64"
                  height="100"
                  viewBox="0 0 64 64"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m32 12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
                  <path d="m60 53c-1.302 0-2.402.839-2.816 2h-12.184c-.552 0-1-.449-1-1v-5.349l2.093-1.944c.32 1.312 1.497 2.293 2.907 2.293h6.184c.414 1.161 1.514 2 2.816 2 1.654 0 3-1.346 3-3s-1.346-3-3-3c-1.302 0-2.402.839-2.816 2h-6.184c-.552 0-1-.449-1-1v-1.064l5.791-5.377c.769-.714 1.209-1.725 1.209-2.774 0-2.087-1.698-3.785-3.785-3.785h-.146c-.936 0-1.835.345-2.532.972l-.537.482v-5.454h1c2.398 0 4.649-1.062 6.176-2.915 1.526-1.851 2.135-4.286 1.669-6.681-.616-3.172-3.171-5.692-6.355-6.27-.523-.095-1.042-.126-1.557-.122.037-.335.067-.672.067-1.012 0-4.962-4.037-9-9-9-1.918 0-3.768.611-5.304 1.738-2.262-2.387-5.38-3.738-8.696-3.738-6.617 0-12 5.383-12 12 0 .023.002.045.002.068-1.8.222-3.458 1.036-4.744 2.36-1.52 1.566-2.32 3.632-2.256 5.817.13 4.276 3.85 7.755 8.292 7.755h.706v5.454l-.536-.483c-.697-.626-1.597-.971-2.533-.971h-.146c-2.087 0-3.785 1.698-3.785 3.785 0 1.049.44 2.06 1.209 2.774l5.791 5.378v1.063c0 .551-.448 1-1 1h-6.184c-.414-1.161-1.514-2-2.816-2-1.654 0-3 1.346-3 3s1.346 3 3 3c1.302 0 2.402-.839 2.816-2h6.184c1.41 0 2.587-.98 2.907-2.293l2.093 1.944v5.349c0 .551-.448 1-1 1h-12.184c-.414-1.161-1.514-2-2.816-2-1.654 0-3 1.346-3 3s1.346 3 3 3c1.302 0 2.402-.839 2.816-2h12.184c1.654 0 3-1.346 3-3v-3.364c.637.857 1 1.9 1 2.98v9.384h18v-9.384c0-1.08.363-2.124 1-2.98v3.364c0 1.654 1.346 3 3 3h12.184c.414 1.161 1.514 2 2.816 2 1.654 0 3-1.346 3-3s-1.346-3-3-3zm-2-6c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm-52 2c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zm-2 8c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zm42-20.746-2 1.8v-8.054c0-.551.448-1 1-1h1zm-7.675-22.236c.094.2.18.406.255.616l.139.389 1.281.609v2.736l-1.281.609-.139.389c-.075.21-.161.416-.255.616l-.175.372.475 1.335-1.936 1.935-1.336-.475-.373.176c-.201.095-.406.179-.616.255l-.388.14-.608 1.28h-2.736l-.608-1.28-.388-.14c-.21-.076-.415-.16-.616-.255l-.373-.176-1.336.475-1.936-1.935.475-1.335-.175-.372c-.094-.2-.18-.406-.255-.616l-.139-.389-1.281-.609v-2.736l1.281-.609.139-.389c.075-.21.161-.416.255-.616l.175-.372-.475-1.335 1.936-1.935 1.336.475.373-.176c.201-.095.406-.179.616-.255l.388-.14.608-1.28h2.736l.608 1.28.388.14c.21.076.415.16.616.255l.373.176 1.336-.475 1.936 1.935-.475 1.335zm-29.322 7.168c-.05-1.64.552-3.19 1.691-4.364.941-.97 2.151-1.573 3.49-1.756.281 1.616.883 3.16 1.797 4.542l1.668-1.103c-1.079-1.634-1.649-3.537-1.649-5.505 0-5.514 4.486-10 10-10 3.045 0 5.889 1.368 7.801 3.752l.198.248h-4.631l-.804 1.689c-.004.001-.008.003-.012.005l-1.764-.626-3.721 3.722.626 1.763c-.002.004-.004.008-.005.012l-1.688.803v5.264l1.689.803c.001.004.003.008.005.012l-.626 1.763 3.721 3.722 1.764-.626c.004.001.008.003.012.005l.803 1.689h5.264l.804-1.689c.004-.001.008-.003.012-.005l1.764.626 3.721-3.722-.626-1.763c.002-.004.004-.008.005-.012l1.688-.803v-5.264l-1.689-.803c-.001-.004-.003-.008-.005-.012l.626-1.763-3.721-3.722-1.764.626c-.004-.001-.008-.003-.012-.005l-.658-1.383.482-.445c1.301-1.2 2.984-1.861 4.741-1.861 3.859 0 7 3.14 7 7 0 .437-.055.868-.134 1.293-1.284.353-2.472 1.021-3.464 1.991l1.4 1.429c1.41-1.382 3.353-1.967 5.329-1.61 2.381.432 4.289 2.314 4.75 4.684.351 1.806-.104 3.638-1.249 5.027s-2.833 2.186-4.632 2.186h-4c-1.654 0-3 1.346-3 3v9.855l-.406.366c-1.013.911-2.205 1.57-3.496 1.946 1.184-1.396 1.902-3.198 1.902-5.167 0-4.411-3.589-8-8-8s-8 3.589-8 8c0 1.969.718 3.771 1.903 5.167-1.292-.377-2.484-1.035-3.496-1.946l-.407-.366v-9.855c0-1.654-1.346-3-3-3h-3.706c-3.373 0-6.195-2.608-6.291-5.814zm22.997 26.094-1.692-2.368.55.079 1.037.005c.036-.001.07.004.105.004.029 0 .057-.004.086-.004l.914.004.698-.098zm0-4.28c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm-4.429 1.52 3.189 4.465-1.372 1.83-1.893-6.306zm8.859-.002.074-.01-1.893 6.307-1.372-1.83zm-18.43-15.518h1c.552 0 1 .449 1 1v8.055l-2-1.8zm21 24.616v7.384h-14v-7.384c0-1.94-.815-3.81-2.236-5.129l-11.194-10.393c-.362-.337-.57-.814-.57-1.309 0-.984.801-1.785 1.785-1.785h.146c.442 0 .867.163 1.195.458l6.942 6.25c1.221 1.098 2.654 1.9 4.208 2.363l3.335 11.114 3.389-4.518 3.389 4.518 3.335-11.114c1.554-.463 2.987-1.266 4.208-2.364l6.942-6.249c.328-.295.753-.458 1.194-.458h.146c.985 0 1.786.801 1.786 1.785 0 .495-.208.972-.57 1.309l-11.194 10.393c-1.421 1.32-2.236 3.189-2.236 5.129zm21 3.384c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1z" />
                </svg>
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
      <Container
        fluid
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          marginTop: "100px",
          height: "178px",
          Padding: "40px 0",
        }}
      >
        <Row style={{ marginLeft: "174px" }}>
          <Col>
            <h1 style={{ marginTop: "40px", fontSize: "60px" }}>$657B</h1>
            <p style={{ color: "#FFFFFFBO" }}>Quarterly volume traded</p>
          </Col>
          <Col>
            <h1 style={{ marginTop: "40px", fontSize: "60px" }}>100+</h1>
            <p style={{ color: "#FFFFFFBO" }}>Countries supported</p>
          </Col>
          <Col>
            <h1 style={{ marginTop: "40px", fontSize: "60px" }}>56+M</h1>
            <p style={{ color: "#FFFFFFBO" }}>Verified users</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <h2 style={{ color: "#18214D", marginTop: "100px" }}>
              Get started in a few steps
            </h2>
          </Col>
        </Row>
        <Row style={{ marginTop: "100px" }}>
          <Col>
            <Card
              style={{
                width: "22rem",
                textAlign: "center",
                paddingRight: "38px",
              }}
            >
              <Card.Body>
                <span
                  style={{
                    float: "left",
                    fontSize: "110px",
                    lineHeight: "60px",
                    color: "grey",
                  }}
                >
                  1
                </span>{" "}
                <svg
                  id="Layer_1"
                  enable-background="new 0 0 480.063 480.063"
                  height="100"
                  viewBox="0 0 480.063 480.063"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m402.032 424.806v47.257c0 4.418-3.582 8-8 8s-8-3.582-8-8v-47.257c0-36.795-29.775-66.572-66.573-66.571-17.411 0-33.208-8.87-42.259-23.728-2.298-3.773-1.103-8.696 2.671-10.994 3.773-2.299 8.695-1.103 10.994 2.671 6.122 10.051 16.811 16.051 28.594 16.051 45.637-.002 82.573 36.93 82.573 82.571zm-139.606-80.193c.941 4.317-1.796 8.579-6.113 9.52-21.054 4.587-42.467-.005-59.516-11.642-16.878 18.087-39.176 15.744-36.191 15.744-36.795-.001-66.573 29.773-66.573 66.571v47.257c0 4.418-3.582 8-8 8s-8-3.582-8-8v-47.257c0-45.636 36.929-82.571 82.571-82.571 18.462 0 33.429-14.875 33.429-33.342v-2.107c-34.919-16.697-59.429-51.784-60.923-92.643-14.37-3.455-25.077-16.317-25.077-31.62v-41.473c-.437-20.3 2.577-71.143 39.648-106.877 45.775-44.126 119.183-41.323 173.161-15.338 5.261 2.535 6.06 9.643 1.691 13.324 27.345 6.67 50.925 23.48 66.074 47.538.782 1.239 2.214 3.184 1.84 6.287-.232 1.931-.807 3.565-2.295 5.075-9.75 9.888-15.119 22.991-15.119 36.896v54.57c0 4.418-3.582 8-8 8s-8-3.582-8-8v-54.57c0-16.037 5.479-31.259 15.542-43.487-15.338-21.936-39.268-36.044-66.332-38.942l-14.061-1.506c-8.222-.88-9.835-12.207-2.194-15.352l6.395-2.633c-83.286-29.035-172.351 3.226-172.351 114.928v41.56c0 6.348 3.656 11.865 9 14.636v-51.863c0-30.878 25.122-56 56-56h102c30.878 0 56 25.12 56 55.997v65.503c0 69.574-67.988 122.42-137.17 102.053-.45 5.708-1.871 11.216-4.186 16.336 13.458 9.242 30.453 12.97 47.23 9.314 4.317-.94 8.579 1.797 9.52 6.114zm-22.394-43.425c50.178 0 91-40.822 91-91v-64.895c0-22.054-17.944-39.997-40-39.997h-102c-22.056 0-40 17.944-40 40v64.892c0 50.178 40.822 91 91 91zm81 137.875h-24c-4.418 0-8 3.582-8 8s3.582 8 8 8h24c4.418 0 8-3.582 8-8s-3.582-8-8-8z" />
                </svg>
                <Card.Title style={{ marginLeft: "50px", marginTop: "15px" }}>
                  Create an account
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card
              style={{
                width: "22rem",
                textAlign: "center",
                paddingRight: "38px",
              }}
            >
              <Card.Body>
                <span
                  style={{
                    float: "left",
                    fontSize: "100px",
                    lineHeight: "60px",
                    color: "grey",
                  }}
                >
                  2
                </span>
                <svg
                  id="Capa_1"
                  enable-background="new 0 0 512 512"
                  height="100"
                  viewBox="0 0 512 512"
                  width="80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m472.215 353.215c6.604 0 11.978-5.361 11.978-11.95v-20.761h15.715c6.667 0 12.091-5.425 12.091-12.092v-27.439c0-6.667-5.425-12.092-12.091-12.092h-21.611v-82.438c2.116.527 4.285.805 6.471.805 2.374 0 4.766-.313 7.124-.947 7.024-1.887 12.876-6.381 16.462-12.631 3.623-6.26 4.583-13.578 2.703-20.606-1.881-7.032-6.372-12.898-12.644-16.517l-227.844-131.542c-4.172-2.427-9.211-3.71-14.571-3.71s-10.399 1.283-14.549 3.698l-227.874 131.557c-12.973 7.509-17.429 24.156-9.938 37.111 3.62 6.273 9.48 10.764 16.503 12.645 4.526 1.212 9.174 1.238 13.588.138v82.436h-21.611c-6.668 0-12.092 5.425-12.092 12.092v27.439c0 6.667 5.425 12.092 12.092 12.092h15.714v20.761c0 6.59 5.361 11.95 11.95 11.95h9.026v73.156h-9.026c-6.589 0-11.95 5.373-11.95 11.978v20.733h-15.714c-6.668 0-12.092 5.425-12.092 12.092v27.439c0 6.667 5.425 12.092 12.092 12.092h228.235c4.142 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-225.328v-21.623h481.976v21.623h-222.039c-4.142 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h224.947c6.667 0 12.091-5.425 12.091-12.092v-27.439c0-6.667-5.425-12.092-12.091-12.092h-15.715v-20.733c0-6.605-5.374-11.978-11.978-11.978h-9.025v-73.156h9.025zm-438.959-182.598c-2.806 1.618-6.084 2.044-9.236 1.2-3.149-.844-5.775-2.851-7.391-5.653-.002-.003-.003-.005-.005-.008-3.356-5.799-1.353-13.257 4.458-16.62l227.888-131.565c1.83-1.065 4.392-1.676 7.028-1.676 2.675 0 5.171.595 7.05 1.688l227.869 131.555c2.8 1.616 4.807 4.245 5.652 7.403.844 3.154.419 6.427-1.209 9.24-1.601 2.789-4.214 4.79-7.359 5.636-3.153.847-6.429.424-9.229-1.197l-219.024-126.453c-1.16-.67-2.455-1.005-3.75-1.005s-2.59.335-3.75 1.005zm-18.232 113.264h225.328c4.142 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-191.625v-89.877l207.271-119.682 207.3 119.683v89.876h-189.584c-4.142 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h223.286v21.623h-481.976zm194.476 54.334v-17.711h92.996v17.711zm71.992 15v73.156h-50.988v-73.156zm-238.661-15v-17.711h92.967v17.711zm71.992 15v73.156h-51.016v-73.156zm20.975 105.867h-92.967v-17.711h92.967zm58.702-20.733v20.733h-43.703v-20.733c0-6.605-5.36-11.978-11.95-11.978h-9.025v-73.156h9.025c6.59 0 11.95-5.361 11.95-11.95v-20.761h43.703v20.761c0 6.59 5.374 11.95 11.978 11.95h9.026v73.156h-9.026c-6.604 0-11.978 5.373-11.978 11.978zm107.996 20.733h-92.996v-17.711h92.996zm58.702-20.733v20.733h-43.703v-20.733c0-6.605-5.374-11.978-11.978-11.978h-9.025v-73.156h9.025c6.604 0 11.978-5.361 11.978-11.95v-20.761h43.703v20.761c0 6.59 5.374 11.95 11.979 11.95h9.025v73.156h-9.025c-6.605 0-11.979 5.373-11.979 11.978zm107.996 3.022v17.711h-92.996v-17.711zm-71.992-15v-73.156h50.988v73.156zm-21.004-88.156v-17.711h92.996v17.711z" />
                    <path d="m288.611 119.004c0-17.374-14.134-31.509-31.508-31.509s-31.508 14.135-31.508 31.509 14.134 31.509 31.508 31.509 31.508-14.135 31.508-31.509zm-48.016 0c0-9.103 7.406-16.509 16.508-16.509s16.508 7.406 16.508 16.509-7.406 16.509-16.508 16.509-16.508-7.406-16.508-16.509z" />
                    <g>
                      <path d="m165.528 205.254c2.058-3.236 3.268-7.063 3.268-11.174 0-11.525-9.377-20.902-20.902-20.902h-16.918c-4.143 0-7.5 3.358-7.5 7.5v26.819.043 31.381c0 1.995.795 3.908 2.209 5.315 1.405 1.4 3.308 2.185 5.291 2.185h.033s15.553-.069 19.84-.069c12.779 0 23.177-10.397 23.177-23.177-.001-7.213-3.314-13.666-8.498-17.921zm-17.634-17.075c3.255 0 5.902 2.647 5.902 5.902s-2.647 5.902-5.902 5.902c-1.237 0-9.418.016-9.418.016v-11.819h9.418zm2.955 43.174c-2.282 0-7.746.02-12.373.038v-16.381c1.105-.004 12.373-.012 12.373-.012 4.509 0 8.177 3.668 8.177 8.178-.001 4.509-3.669 8.177-8.177 8.177z" />
                      <path d="m226.07 178.849c-.025-.067-.052-.134-.078-.201-1.365-3.323-4.566-5.469-8.158-5.469-.002 0-.004 0-.005 0-3.595.002-6.797 2.153-8.159 5.479-.023.057-.046.114-.067.171l-21.87 57.423c-1.475 3.871.469 8.204 4.34 9.678 3.866 1.475 8.203-.468 9.678-4.339l3.607-9.471h24.786l3.566 9.45c1.133 3.003 3.987 4.854 7.018 4.854.88 0 1.775-.156 2.647-.485 3.875-1.463 5.831-5.79 4.368-9.665zm-15 38.272 6.737-17.688 6.675 17.688z" />
                      <path d="m311.601 173.179c-.024 0-.05 0-.074 0-4.143.04-7.468 3.43-7.428 7.572l.337 34.778-26.935-39.003c-1.864-2.701-5.266-3.874-8.404-2.898-3.133.977-5.268 3.878-5.268 7.16v58.135c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-34.076l25.638 37.125c2.193 3.171 5.86 4.521 9.337 3.434 3.547-1.107 5.839-4.422 5.839-8.518l-.544-56.281c-.04-4.118-3.39-7.428-7.498-7.428z" />
                      <path d="m387.951 233.525-26.197-25.274 23.972-22.034c3.05-2.803 3.25-7.548.446-10.598-2.802-3.049-7.548-3.25-10.597-.446l-19.147 17.6v-12.823c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v58.972c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-14.968l21.109 20.366c1.455 1.404 3.332 2.103 5.206 2.103 1.965 0 3.927-.767 5.398-2.292 2.877-2.982 2.792-7.73-.19-10.606z" />
                    </g>
                  </g>
                </svg>
                <Card.Title style={{ marginLeft: "50px", marginTop: "15px" }}>
                  Link your bank account
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card
              style={{
                width: "22rem",
                textAlign: "center",
                paddingRight: "38px",
              }}
            >
              <Card.Body>
                <span
                  style={{
                    float: "left",
                    fontSize: "100px",
                    lineHeight: "60px",
                    color: "grey",
                  }}
                >
                  3
                </span>
               
                <Card.Title style={{ marginLeft: "50px", marginTop: "15px" }}>
                  Start buying and selling
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{backgroundColor:"Darkgreen", color:'white', fontWeight:'Bold', marginTop:'100px', height:'360px'}}>
        <Row style={{textAlign:"center"}}>
          <Col><h2 style={{marginTop:'90px'}}>Become part of a global community of people who have <br></br>found their path to the crypto world with Crypo</h2></Col>
        </Row>
        <Row style={{textAlign:"center"}}>
          <Col><Button variant="outline-danger" style={{border:'1px solid white', display:'inline-block', width: '150px', color:'white', fontWeight:'Bold', paddingTop:'15px', paddingBottom:'15px',  marginTop:'30px'}}>Get started</Button>{' '}</Col>
        </Row>
      </Container>

    </div>
  );
};

export default App;
