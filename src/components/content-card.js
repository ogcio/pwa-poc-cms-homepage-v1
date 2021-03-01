import {LitElement, css, html} from 'lit-element';

export class ContentCard extends LitElement {
  static get styles() {
    //language=CSS
    return css`
        :host {
          display: block;
          width: 100%;
          --background-color: #ffffff;
          background-color: var(--background-color);
        }
        
        :host([full-width]) {
          flex-basis: 100% !important;
        }
        
        .card {
          height: 100%;
        }
        
        .content {
          padding: 12px
        }
      `;
  }

  render() {
    return html`
      <div class="card" part="body">
        <slot name="image"></slot>
        <div class="content">
          <slot name="title"></slot>
          <slot name="body"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('content-card', ContentCard);
