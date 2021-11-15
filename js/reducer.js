// import storage from "../ulti/storage.js";

const init = {
  buttons: [
    "0",
    ".",
    "",
    "",
    "=",
    "1",
    "2",
    "3",
    "*",
    "/",
    "4",
    "5",
    "6",
    "+",
    "-",
    "7",
    "8",
    "9",
    "Del",
    "AC",
  ],
  buttonsRed: ["=", "AC", "Del"],
  inputVal: "",
  values: [],
  operators: [],
};

const actions = {
  clickBtn(buttons, button) {
    switch (button) {
      case "AC":
        buttons.inputVal = "";
        buttons.values = [];
        buttons.operators = [];
        break;
      case "Del":
        var l = buttons.inputVal.length;
        buttons.inputVal = buttons.inputVal.slice(0, l - 1);
        break;
      case "=":
        buttons.values.push(parseFloat(buttons.inputVal));

        this.cal(buttons, buttons);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        var l = buttons.inputVal.length;
        if (l > 0) {
          buttons.operators.push(button);
          buttons.values.push(parseFloat(buttons.inputVal));
          buttons.inputVal = "";
        }
        break;
      default:
        buttons.inputVal += button;
        break;
    }
  },
  cal(buttons, { values, operators }) {
    var result = values.shift();
    for (var i in operators) {
      switch (operators[i]) {
        case "+":
          result += values[i];
          break;
        case "-":
          result -= values[i];
          break;

        case "*":
          result *= values[i];
          break;

        case "/":
          result /= values[i];
          break;
      }
      buttons.values = [];

      buttons.inputVal = this.handleR(result);
      buttons.operators = [];
    }
  },
  handleR(result) {
    var afterPoint = 10 ** 9;
    if (result % 1 != 0) {
      result = Math.round(result * afterPoint) / afterPoint;
    }
    return result.toString();
  },
};

export default function reducer(state = init, action, args) {
  actions[action] && actions[action](state, ...args);
  return state;
}
