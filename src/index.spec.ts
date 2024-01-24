import { CalculatorFactory } from "./calculator";

const calc = CalculatorFactory.create();
calc.add(1);
console.log(calc.value);
