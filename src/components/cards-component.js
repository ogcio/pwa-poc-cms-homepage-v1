import {LitElement, css, html} from 'lit-element';

export class CardsComponent extends LitElement {
  static get properties() {
    return {
      cards: {type: Array}
    }
  }
  static get styles() {
    //language=CSS
    return css`
        :host {
          display: block;
          width: 100%;
        }

        #container {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: center;
          background-color: #ffffff;
        }

        #cards-container {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          width: 100%;
          margin: 20px 0;
        }

        @media screen and (min-width: 1024px) {
          #cards-container {
            justify-content: space-between;
          }
        }

        content-card {
          flex-basis: 100%;
          --background-color: #F6F6F2;
          min-height: 156px;
          margin: 20px;
        }
        
        content-card img {
          width: 100%;
        }

        content-card a {
          font-size: 24px;
          display: block;
          border-bottom: 1px solid var(--main-light-brown);
          padding-bottom: 8px;
          text-decoration: none;
          color: #2C55A2;
        }

        content-card a:hover {
          text-decoration: underline;
        }

        content-card p {
          color: #000000;
          font-size: 18px;
        }

        @media screen and (min-width: 1024px) {
          content-card {
            flex-basis: 31%;
            margin: 0 0 30px 0;
          }
        }
      `;
  }

  render() {
    return html`
      <div id="container">
        <div id="cards-container">
          ${this.cards.map(({title, url, body, image}) => html`
            <content-card>
              ${image ? html`<img src="${image}" slot="image">` : ``}
              <a href="${url}" slot="title">${title}</a>
              <p slot="body">${body}</p>
            </content-card>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define('cards-component', CardsComponent);
