import {html, render, LitElement} from 'lit';
import {waterCss} from './styles'

class WelcomeBanner extends LitElement {
  static styles = [ waterCss ]

  constructor() {
    super();
  }

  render() {
    return html`<button @click=${this.onclick2}><slot></slot></button>`
  }
}

customElements.define('welcome-banner', WelcomeBanner)

class Counter extends LitElement {
  static styles = [ waterCss ]
  static get properties() {
    return {
      count: {state: true}
    }
  }

  constructor() {
    super();
    this.count = 0
  }

  increase() {
    this.count = this.count + 1
  }

  decrease() {
    this.count = this.count - 1
  }

  render() {
    return html`<div>
  <span>simple count: ${this.count}</span>
      <button @click=${this.increase}>+</button>
      <button @click=${this.decrease}>-</button>
</div>`

  }
}

customElements.define('simple-counter', Counter)

// Define a template
const myTemplate = (name) => html`<div>
  <div><welcome-banner .onclick2="${() => console.log('whoop de doo')}">LitElement welcome banner</welcome-banner></div>
  <div><simple-counter></simple-counter></div>
  <div><button @click=${() => console.log('click')}>in a template</button></div>
</div>`;

// Render the template to the document
render(myTemplate('World'), document.body)
