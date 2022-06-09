"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    static calculatate(fisrtOperand, secondOperand, operator) {
        switch (operator) {
            case this.ADDITION:
                return fisrtOperand + secondOperand;
            case this.SUBTRACTION:
                return fisrtOperand - secondOperand;
            case this.MULTIPLICATION:
                return fisrtOperand * secondOperand;
            case this.DIVISION:
                if (secondOperand !== 0) {
                    return fisrtOperand / secondOperand;
                }
                else {
                    console.log('can not device by 0');
                }
            default:
                console.log('unsupported operation');
        }
    }
}
exports.Calculator = Calculator;
Calculator.ADDITION = '+';
Calculator.SUBTRACTION = '-';
Calculator.MULTIPLICATION = '*';
Calculator.DIVISION = '/';
