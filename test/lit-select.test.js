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
})
