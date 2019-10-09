import React from 'react';
import '../App.css';

import Result from './Result'
import Keypad from './Keypad'
import { Card, CardTitle, CardBody } from 'reactstrap'

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

            // Clear Output Button
            if (button === "CE") {
                if (prevState.result === prevState.output) {
                    return {
                        result: "0",
                        output: "0"
                    }
                }
                else if(prevState.result === "Invalid equation.") {
                    return {
                        result: "0"
                    }
                }
                else {
                    return {
                        output: "0"
                    }
                }
            }

            // Clear All Button
            else if (button === "C") {
                return {
                    result: "0",
                    output: "0"
                }
            }

            // Backspace Button
            else if (button === "DEL") {

                // If the character you're backspacing is an operation, it just adds a 0 since you can't erase the operation in the Windows 10 Calculator.
                if (prevState.result.trim().slice(-1) === "%" || prevState.result.trim().slice(-1) === "/" || prevState.result.trim().slice(-1) === "*" || prevState.result.trim().slice(-1) === "-" || prevState.result.trim().slice(-1) === "+") {
                    return {
                        result: prevState.result + "0"
                    }
                }
                // Check if the character you're backspacing is the last value
                else if (prevState.output.length <= 1) {
                    return {
                        result: prevState.result.trim().replace(/.$/, "0"),
                        output: "0"
                    }
                }
                else if (prevState.result === "Infinity" || prevState.result === "Invalid equation." || prevState.result === "NaN") {
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

            // Squared Button
            else if (button === "^2") {
                return {
                    result: Math.pow(prevState.result, 2).toString(),
                    output: Math.pow(prevState.result, 2).toString()
                }
            }

            // Square Root Button
            else if (button === "sqrt") {
                return {
                    result: Math.sqrt(prevState.result).toString(),
                    output: Math.sqrt(prevState.result).toString()
                }
            }

            // Inverse Button
            else if (button === "1/x") {
                return {
                    // eslint-disable-next-line
                    result: eval(1 / prevState.result).toString(),
                    // eslint-disable-next-line
                    output: eval(1 / prevState.result).toString()
                }
            }

            // Converts input to negative
            else if (button === "+/-") {
                if (prevState.output === "0") {
                    return {
                        output: prevState.output,
                        result: prevState.result
                    }
                }
                else {
                    return {
                        output: "-" + prevState.output,
                        result: prevState.result.replace(prevState.output, "-" + prevState.output)
                    }
                }
            }

            // Equals or Calculate Button
            else if (button === "=") {
                try {
                    return {
                        // eslint-disable-next-line
                        result: eval(prevState.result).toString(),
                        // eslint-disable-next-line
                        output: eval(prevState.result).toString()
                    }
                }
                catch (e) {
                    return {
                        result: "Invalid equation."
                    }
                }

            }

            // Checks if user has clicked a Math operation
            else if (button === "%" || button === "/" || button === "*" || button === "-" || button === "+") {
                if (prevState.result.trim().slice(-1) === "%" || prevState.result.trim().slice(-1) === "/" || prevState.result.trim().slice(-1) === "*" || prevState.result.trim().slice(-1) === "-" || prevState.result.trim().slice(-1) === "+") {
                    return {
                        result: prevState.result.trim().replace(/.$/, button + " ")
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
                        result: prevState.result + " " + button + " ",
                        output: "0"
                    }
                }
            }
            
            // Checks if user clicked on a number or period
            else {
                if (prevState.result === "0" && prevState.output === "0") {
                    return {
                        result: button,
                        output: button
                    }
                }
                else if ((prevState.result === "Infinity" && prevState.output === "Infinity") || prevState.result === "Invalid equation." || prevState.result === "NaN") {
                    return {
                        result: button,
                        output: button
                    }
                }
                else if (prevState.result.length > 1 && prevState.result.slice(-1) === "0" && prevState.output === "0") {
                    return {
                        result: prevState.result.trim().replace(/.$/, button),
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