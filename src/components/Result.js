import React from 'react';
import '../App.css';
import { Row, Col, Card } from 'reactstrap';

const Result = props => {
    return (
        <div>
            <Row>
                <Col>
                    <div className="mt-5 mr-5 text-right">
                        <h1>{props.output}</h1>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="mt-4 mb-1 mr-5 text-right">
                        <small>{props.result}</small>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Result;