import { html, css, LitElement } from 'lit'

export class LitSelect extends LitElement {
  static styles = css`
      .select-container {
      position: relative;
      font-family: Arial, sans-serif;
      width: 100%;
    }

    .label {
      font-weight: bold;
      margin-bottom: 4px;
      color: #333;
    }

    .select-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 12px;
      background-color: #e9e9e9; 
      margin-right: 10px;
      border: 1px solid #ccc;
      border-radius: 10px;
      font-size: 14px;
      color: #333;
      transition: border-color 0.3s, background-color 0.3s ease;
    }

    .select-trigger:hover {
      background-color: #f0f0f0;
      border-color: #007bff;
    }

    .select-trigger:focus {
      outline: none;
      border-color: #007bff;
    }

    .select-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 100%;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 2;
      margin-top: 4px;
    }

    .select-menu.is-active {
      display: block;
    }

    .select-item {
      padding: 8px 12px;
      cursor: pointer;
      color: #333;
      transition: background-color 0.3s ease;
    }

    .select-item:hover {
      background-color: #f0f0f0;
    }

    .icon {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
    }

    .icon-rotated {
      transform: rotate(180deg);
    }

  `

  static properties = {
    label: { type: String },
    selected: { type: String },
    closed: { type: Boolean },
    options: { type: Array }
  }

  constructor () {
    super()
    this.label = ''
    this.selected = ''
    this.options = []
    this.closed = true
  }

  renderChevronIcon () {
    return html`
     <svg 
        fill="#000000"
        height="24px" 
        width="24px" 
        version="1.1" 
        id="Layer_1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 407.437 407.437" 
        xml:space="preserve"
        class="icon ${this.closed ? '' : 'icon-rotated'}"
        >
    <polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "/>
    </svg>
    `
  }

  toggleMenu () {
    this.closed = !this.closed
  }

  handleOptionSelect (option) {
    this.selected = option
    this.closed = true
    this.dispatchEvent(new CustomEvent('selection-changed', { detail: { option } }))
  }

  render () {
    return html`
      <div class="select-container">
        <div class="select">
          <div class="select-trigger" @click="${this.toggleMenu}">
            <span>${this.selected || this.label}</span>
            ${this.renderChevronIcon()}
          </div>
          <div class="select-menu ${this.closed ? '' : 'is-active'}">
            ${this.options.map(
              (option) => html`
                <div class="select-item" @click="${() => this.handleOptionSelect(option)}">
                  ${option}
                </div>
              `
            )}
          </div>
        </div>
      </div>
    `
  }
}
