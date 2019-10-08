import React from 'react';
import '../App.css';

import Result from './Result'
import Keypad from './Keypad'
import { Card, CardTitle, CardBody } from 'reactstrap';

export default class Calculator extends React.Component {
    constructor() {
        super()

        this.state = {
            result: "0",
            output: "0"
        }
    }

    onClick = button => {
        this.setState(prevState => {
            if (button === "CE") {
                return {
                    result: "0",
                    output: "0"
                }
            }

            else if (button === "DEL") {
                if (prevState.output.length <= 1) {
                    return {
                        result: "0",
                        output: "0"
                    }
                }
                else if (prevState.result === "Invalid equation.") {
                    return {
                        result: "0",
                        output: "0"
                    }
                }
                else {
                    return {
                        result: prevState.result.trim().slice(0, -1),
                        output: prevState.output.trim().slice(0, -1)
                    }
                }
            }

            else if (button === "sqrt") {
                return {
                    result: Math.sqrt(prevState.result).toString(),
                    output: Math.sqrt(prevState.result).toString()
                }
            }

            else if (button === "=") {
                try {
                    return {
                        result: eval(prevState.result).toString(),
                        output: eval(prevState.result).toString()
                    }
                }
                catch (e) {
                    return {
                        result: "Invalid equation."
                    }
                }

            }

            else if (button === "%" || button === "/" || button === "*" || button === "-" || button === "+") {
                if (prevState.result.trim().slice(-1) === "%" || prevState.result.trim().slice(-1) === "/" || prevState.result.trim().slice(-1) === "*" || prevState.result.trim().slice(-1) === "-" || prevState.result.trim().slice(-1) === "+") {
                    return {
                        result: prevState.result.trim().replace(/.$/, button + " ")
                    }
                }
                else {
                    return {
                        result: prevState.result + " " + button + " ",
                        output: "0"
                    }
                }
            }

            else {
                if (prevState.result === "0" && prevState.result === "0") {
                    return {
                        result: button,
                        output: button
                    }
                }
                else if (prevState.output === "0") {
                    return {
                        result: prevState.result + button,
                        output: button
                    }
                }
                else {
                    return {
                        result: prevState.result + button,
                        output: prevState.output + button
                    }
                }
            }
        })
    }

    render() {
        return (
            <Card className="w-100 bg-light">
                <CardBody>
                    <CardTitle>
                        <Result result={this.state.result} output={this.state.output} />
                    </CardTitle>
                    <Keypad onClick={this.onClick} />
                </CardBody>
            </Card>
        )
    }
}