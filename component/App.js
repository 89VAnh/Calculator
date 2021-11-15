import html from "../js/core.js";
import Display from "./Display.js";
import Buttons from "./Buttons.js";
function App() {
  return html`
    <div class="main">
      ${Display()}
      <div class="buttons">${Buttons()}</div>
    </div>
  `;
}

export default App;
