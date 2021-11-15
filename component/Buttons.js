import html from "../js/core.js";
import { connect } from "../js/store.js";

function Buttons({ buttons, buttonsRed }) {
  function btncheck(value) {
    return buttonsRed.some((button) => button == value);
  }
  return buttons.map(
    (btn) =>
      html` <input
        type="button"
        value="${btn}"
        ${buttonsRed.some((button) => button == btn) &&
        "style='background-color:#ea3226;color:#fff'"}
        onclick="dispatch('clickBtn','${btn}')"
      />`
  );
}

export default connect()(Buttons);
