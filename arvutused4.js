class CmToInches {
    calculate(inches) {
        return inches / 2.54;
    }
    inputUnit() {
        return "cm";
    }
    outputUnit() {
        return "in";
    }
}

class InchesToCm {
    calculate(inches) {
        return inches * 2.54;
    }
    inputUnit() {
        return "in";
    }
    outputUnit() {
        return "cm";
    }
}

class AXplusB {
    constructor(coeficient, intercept, inputUnitType, outputUnitType) {
        this.coeficient = coeficient;
        this.intercept = intercept;
        this.inputUnitType = inputUnitType;
        this.outputUnitType = outputUnitType;
    }
    calculate(x) {
        return this.coeficient * x + this.intercept;
    }
    inputUnit() { return this.inputUnitType; }
    outputUnit() { return this.outputUnitType; }
}

class CelsiusToFahrenheit {
    calculate(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    inputUnit() {
        return "°C";
    }
    outputUnit() {
        return "°F";
    }
}

class FahrenheitToCelsius {
    calculate(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
    inputUnit() {
        return "°F";
    }
    outputUnit() {
        return "°C";
    }
}

class ResistanceToCurrent {
    constructor(resistance) {
        this.resistance = resistance;
    }
    calculate(voltage) {
        return voltage / this.resistance;
    }
    inputUnit() {
        return "V";
    }
    outputUnit() {
        return "A";
    }
}

class VoltageToCurrent {
    constructor(voltage) {
        this.voltage = voltage;
    }
    calculate(resistance) {
        return this.voltage / resistance;
    }
    inputUnit() {
        return "Ω";
    }
    outputUnit() {
        return "A";
    }
}

class ResistanceToPower {
    constructor(resistance) {
        this.resistance = resistance;
    }
    calculate(voltage) {
        return (voltage * voltage) / this.resistance;
    }
    inputUnit() {
        return "V";
    }
    outputUnit() {
        return "W";
    }
}
