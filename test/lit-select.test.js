/* eslint-disable no-unused-expressions */
import { html } from 'lit'
import { fixture, expect } from '@open-wc/testing'

import '../lit-select.js'

describe('LitSelect', () => {
  let el
  const mockOptions = ['Aracaju', 'Belém', 'Curitiba', 'Duque de Caxias']
  beforeEach(async () => {
    el = await fixture(html`<lit-select .options=${mockOptions}></lit-select>`)
  })

  it('should exist', () => {
    expect(el).to.exist
  })

  it('should receive new options to populate select', async () => {
    const newOptions = ['kiko', 'kikoo', 'ra', 'raa', 'raaa']
    const override = await fixture(html`<lit-select .options=${newOptions}></lit-select>`)
    expect(override.options).to.deep.equal(newOptions)
  })

  it('should toggle the menu on click', () => {
    expect(el.closed).to.equal(true)
    el.toggleMenu()
    expect(el.closed).to.equal(false)
  })

  it('should select an option using handleOptionSelect, close the menu', () => {
    el.handleOptionSelect('Aracaju')
    expect(el.selected).to.equal('Aracaju')
    expect(el.closed).to.equal(true)
  })
})
