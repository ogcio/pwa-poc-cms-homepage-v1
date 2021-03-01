import {css, html} from '@lion/core';
import {LionInput} from '@lion/input';

export class SearchInput extends LionInput {
  static get styles() {
    //language=CSS
    return [
      super.styles,
      css`
        :host {
          width: 100%;
        }

        ::slotted(input) {
          padding: 10px 16px;
        }

      `
    ];
  }

  _render() {
    return html`
      ${super.render()}
<!--      <lion-input>-->
<!--        <div slot="suffix">[suffix]</div>-->
<!--      </lion-input>-->
    `;


  }
}

customElements.define('search-input', SearchInput);
