# \<lit-select>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

O linting é feito com standard ao invés do prettier.

![GIF mostrando um componente de select](./lit-select.gif)

Elementp Lit para o comportamento de select com ícone animado com css


## Usage

```html
<script type="module">
  import 'lit-select/lit-select.js';
</script>

<lit-select .options=${yourStringArrayOfOptions}></lit-select>
```

## Local Demo with `web-dev-server`

```bash
npm i
npm run start
```

To run a local development server that serves the basic demo located in `demo/index.html`

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```
To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.


