# @hanzo/waitlist

Monochromatic, brand-neutral viral waitlist widget. Backed by [Hanzo Base](../../../base).

```tsx
import { Waitlist } from '@hanzo/waitlist'
import '@hanzo/waitlist/styles.css'
import MyLogo from './MyLogo' // your component, your SVG, your <img>

export default function Landing() {
  return (
    <Waitlist
      waitlist="my-product"
      baseUrl="https://api.example.com"
      logo={<MyLogo />}
    />
  )
}
```

> The widget ships with **no logo** and **no brand colors**. Each consumer
> brings its own mark via the `logo` prop (or `<slot name="logo">` in the
> custom element) and its own palette via CSS variables.

## Drop-in (no bundler)

```html
<link rel="stylesheet" href="https://cdn.example.com/@hanzo/waitlist/waitlist.css" />
<script src="https://cdn.example.com/@hanzo/waitlist/waitlist.iife.js"></script>

<hanzo-waitlist waitlist="my-product" base-url="https://api.example.com">
  <!-- Bring your own logo. Either slot in markup: -->
  <img slot="logo" src="/logo.svg" alt="My brand" />
  <!-- ...or use the logo-url attribute instead:
  <hanzo-waitlist ... logo-url="/logo.svg" logo-alt="My brand" />
  -->
</hanzo-waitlist>
```

## Theming

Override any CSS variable on `.hanzo-waitlist` (or any ancestor). The widget
ships fully neutral — no hardcoded brand colors, no logos, no embedded
identity. Each consumer sets its own tokens once:

```css
.your-brand {
  --hw-accent: <accent>;     /* brand accent */
  --hw-accent-fg: <text>;    /* text color on accent */
  --hw-radius: <radius>;     /* corner radius */
}
```

Force a theme with `theme="light" | "dark"`. Default `theme="auto"` follows
`prefers-color-scheme`.

## Programmatic client (no React)

```ts
import { WaitlistClient } from '@hanzo/waitlist/client'

const c = new WaitlistClient({ baseUrl: 'https://api.example.com' })
const result = await c.join({ waitlist: 'my-product', email: 'a@b.co' })
```

## Server

The backend is the [`waitlist`](../../../base/plugins/waitlist) plugin for
Hanzo Base. Register it once at boot:

```go
waitlist.MustRegister(app, waitlist.Config{
    Enabled:         true,
    TurnstileSecret: os.Getenv("TURNSTILE_SECRET_KEY"),
    AdminSecret:     os.Getenv("WAITLIST_ADMIN_SECRET"),
})
```
