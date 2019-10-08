import React from 'react';
import '../App.css';
import { Row, Col, Button, ButtonGroup } from 'reactstrap';

export default class Keypad extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <ButtonGroup className="w-100">
                            <Button onClick={val => this.props.onClick("%")} color="light" className="rounded-0 py-4 w-25"><span className="lead font-weight-normal">%</span></Button>
                            <Button onClick={val => this.props.onClick("sqrt")} color="light" className="w-25"><span className="lead font-weight-normal">sqrt</span></Button>
                            <Button onClick={val => this.props.onClick("^2")} color="light" className="w-25"><span className="lead font-weight-normal">^2</span></Button>
                            <Button onClick={val => this.props.onClick("1/x")} color="light" className="w-25"><span className="lead font-weight-normal">1/x</span></Button>
                            
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonGroup className="w-100">
                            <Button onClick={val => this.props.onClick("CE")} color="light" className="rounded-0 py-4 w-25"><span className="lead font-weight-bold">CE</span></Button>
                            <Button onClick={val => this.props.onClick("C")} color="light" className="w-25"><span className="lead font-weight-bold">C</span></Button>
                            <Button onClick={val => this.props.onClick("DEL")} color="light" className="w-25"><span className="lead font-weight-normal">DEL</span></Button> 
                            <Button onClick={val => this.props.onClick("/")} color="light" className="w-25"><span className="lead font-weight-normal">/</span></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonGroup className="w-100">
                            <Button onClick={val => this.props.onClick("7")} color="light" className="rounded-0 py-4 w-25"><span className="lead font-weight-bold">7</span></Button>
                            <Button onClick={val => this.props.onClick("8")} color="light" className="w-25"><span className="lead font-weight-bold">8</span></Button>
                            <Button onClick={val => this.props.onClick("9")} color="light" className="w-25"><span className="lead font-weight-bold">9</span></Button>
                            <Button onClick={val => this.props.onClick("*")} color="light" className="rounded-0 w-25"><span className="lead font-weight-normal">*</span></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonGroup className="w-100">
                            <Button onClick={val => this.props.onClick("4")} color="light" className="rounded-0 py-4 w-25"><span className="lead font-weight-bold">4</span></Button>
                            <Button onClick={val => this.props.onClick("5")} color="light" className="w-25"><span className="lead font-weight-bold">5</span></Button>
                            <Button onClick={val => this.props.onClick("6")} color="light" className="w-25"><span className="lead font-weight-bold">6</span></Button>
                            <Button onClick={val => this.props.onClick("-")} color="light" className="rounded-0 w-25"><span className="lead font-weight-normal">-</span></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonGroup className="w-100">
                            <Button onClick={val => this.props.onClick("1")} color="light" className="rounded-0 py-4 w-25"><span className="lead font-weight-bold">1</span></Button>
                            <Button onClick={val => this.props.onClick("2")} color="light" className="w-25"><span className="lead font-weight-bold">2</span></Button>
                            <Button onClick={val => this.props.onClick("3")} color="light" className="w-25"><span className="lead font-weight-bold">3</span></Button>
                            <Button onClick={val => this.props.onClick("+")} color="light" className="rounded-0 w-25"><span className="lead font-weight-normal">+</span></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonGroup className="w-100">
                            <Button onClick={val => this.props.onClick("+/-")} color="light" className="w-25"><span className="lead font-weight-normal">+/-</span></Button>
                            <Button onClick={val => this.props.onClick("0")} color="light" className="w-25 py-4"><span className="lead font-weight-bold">0</span></Button>
                            <Button onClick={val => this.props.onClick(".")} color="light" className="rounded-0 w-25"><span className="lead font-weight-bold">.</span></Button>
                            <Button onClick={val => this.props.onClick("=")} color="light" className="rounded-0 w-25"><span className="lead font-weight-normal">=</span></Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                
            </div>
        )
    }
}