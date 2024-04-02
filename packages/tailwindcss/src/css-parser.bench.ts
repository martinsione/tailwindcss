import { bench } from 'vitest'
import * as CSS from './css-parser'

const css = String.raw
const input = css`
  @theme {
    --color-primary: #333;
  }

  @tailwind utilities;

  .foo {
    color: red;
    /* comment */
    &:hover {
      color: blue;
      @apply font-bold;
    }
  }
`

bench('CSS with sourcemaps', () => {
  CSS.parse(input, {
    trackSource: true,
  })
})

bench('CSS', () => {
  CSS.parse(input, {
    trackSource: false,
  })
})
