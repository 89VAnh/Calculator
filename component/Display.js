import html from "../js/core.js";
import { connect } from "../js/store.js";

function Display({ inputVal }) {
  return html`
    <div id="display">
      <input type="text" id="textIp" value="${inputVal}" />
    </div>
  `;
}
export default connect()(Display);
