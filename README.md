# 📂 Alpine Collapse Plus 📂

An Alpine JS plugin to enhance the collapse directive. It seperates transform and opacity animations for a more organic transition.

## Install

### Via CDN

```html
<script defer src="https://unpkg.com/alpine-collapse-plus@latest/dist/collapse-plus.min.js"></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
npm install -D alpine-collapse-plus
```

```js
import Alpine from 'alpinejs'
import collapse from 'alpine-collapse-plus'

Alpine.plugin(collapse)

Alpine.start()
```

## Example

See index.html for an example with default settings.

## Modifiers

- `duration` - The duration of the collapse/expand transition in milliseconds. See original [Alpine.js collapse directive](https://alpinejs.dev/plugins/collapse#duration) for more information.
- `min` - The minimum height of the collapse/expand transition in pixels. See original [Alpine.js collapse directive](https://alpinejs.dev/plugins/collapse#min) for more information.

- `content-delay` - The delay of the opacity transition in milliseconds.
- `content-duration` - The duration of the content opacity transition.
- `content-duration-out` - The duration of the content opacity transition when closing.
- `content-stagger` - The stagger interval

## Stats

![](https://img.shields.io/bundlephobia/min/alpine-collapse-plus)
![](https://img.shields.io/npm/v/alpine-collapse-plus)
![](https://img.shields.io/npm/dt/alpine-collapse-plus)
![](https://img.shields.io/github/license/markmead/alpine-collapse-plus)
