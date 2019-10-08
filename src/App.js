import React from 'react';
import './App.css';

import Calculator from './components/Calculator'
import { Container, Row, Col } from 'reactstrap';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg="5" md="8" xs="12" className="mx-auto">
                        <div className="d-flex vh-100 flex-column justify-content-center align-items-center">
                            <h1 className="mb-5 w-100 text-center">ReactJS Calculator</h1>
                            <Calculator />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

