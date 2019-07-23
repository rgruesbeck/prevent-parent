# prevent-parent
Prevent keydown events from reaching the parent page for iframed pages.
Useful for games that use arrow keys for input and are displayed on a gallery page.

## Install
```sh
npm install --save prevent-parent
```

## Use
Call `preventParent()` once after your app loads.
### Syntax
```js 
preventParent([optional-keycode-list])
```
`optional-keycode-list`:

list of key codes, defaults to arrow keys ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft']

### Examples
prevent arrow keys
```js
import preventParent from 'prevent-parent';

// prevent parent window form scrolling
preventParent();
```

pass in custom list of keycodes
```js
import preventParent from 'prevent-parent';

// prevent Space and ShiftRight keys in parent
preventParent(['Space', 'ShiftRight']);
```