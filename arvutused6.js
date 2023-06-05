var InchesToCm = /** @class */ (function () {
    function InchesToCm() {
    }
    InchesToCm.prototype.calculate = function (inches) {
        return inches * 2.54;
    };
    InchesToCm.prototype.inputUnit = function () {
        return "in";
    };
    InchesToCm.prototype.outputUnit = function () {
        return "cm";
    };
    return InchesToCm;
}());
var Figure = /** @class */ (function () {
    function Figure(calculator, g) {
        this.calculator = calculator;
        this.g = g;
        this.draw();
    }
    Figure.prototype.draw = function () {
        for (var i = 0; i < 20; i += 2) {
            this.g.fillRect(10 * i, 300 - 3 * this.calculator.calculate(i), 3, 3);
            this.g.fillText(i + "", 10 * i, 300);
            this.g.fillText(this.calculator.calculate(i).toFixed(1), 0, 300 - 3 * this.calculator.calculate(i));
        }
        this.g.fillText(this.calculator.inputUnit(), 10 * 20, 300);
        this.g.fillText(this.calculator.outputUnit(), 0, 300 - 3 * this.calculator.calculate(20));
    };
    return Figure;
}());