import React from "react";
import { Button, Container, Col, Row } from "react-bootstrap";
import "./App.css";
import image from "./huh.webp";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 className="App-header2">
                {" "}
                Added another header and changed its background color{" "}
            </h1>
            <ul className="uls">
                <li> Mango </li>
                <li> Apple </li>
                <li> Orange </li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <img src={image} alt="4k machine broke" />
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "40",
                                height: "400px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        1st Column
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "40",
                                height: "400px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        2nd Column
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World - Andrew Fonseca
            </p>
        </div>
    );
}

export default App;
