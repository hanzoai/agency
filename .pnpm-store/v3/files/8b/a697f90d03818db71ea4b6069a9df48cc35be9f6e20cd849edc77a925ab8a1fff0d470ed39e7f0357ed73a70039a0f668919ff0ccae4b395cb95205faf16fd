// Custom-element wrapper for drop-in usage:
//
//   <script src="https://cdn.example.com/waitlist.iife.js"></script>
//   <link rel="stylesheet" href="https://cdn.example.com/waitlist.css" />
//   <hanzo-waitlist waitlist="my-product" base-url="https://api.example.com">
//     <!-- Optional: bring your own logo. Either inline HTML/SVG: -->
//     <img slot="logo" src="/logo.svg" alt="My brand" />
//     <!-- ...or use the logo-url attribute below for a simple image. -->
//   </hanzo-waitlist>
//
// The CSS lives outside Shadow DOM on purpose: monochrome design picks
// up the host page's color/font tokens, so we want to inherit, not
// isolate.

import { createRoot, type Root } from 'react-dom/client'
import { Waitlist, type WaitlistMode, type WaitlistTheme } from './Waitlist'
import './styles.css'

const ATTRS = [
  'waitlist',
  'base-url',
  'mode',
  'theme',
  'title',
  'subtitle',
  'submit-label',
  'success-title',
  'trigger-label',
  'turnstile-token',
  'hide-share',
  'logo-url',
  'logo-alt',
] as const

class HanzoWaitlistElement extends HTMLElement {
  private root: Root | null = null
  private logoHtml: string | null = null

  static get observedAttributes(): string[] {
    return ATTRS.slice()
  }

  connectedCallback() {
    // Capture consumer-provided logo markup BEFORE React renders into this
    // element. Pattern: <img slot="logo" ...> or <div slot="logo">...</div>.
    const slotted = this.querySelector('[slot="logo"]')
    if (slotted) {
      this.logoHtml = slotted.outerHTML
    }
    // Clear children so React doesn't double-render the original markup.
    this.replaceChildren()
    this.root = createRoot(this)
    this.render()
  }

  attributeChangedCallback() {
    this.render()
  }

  disconnectedCallback() {
    this.root?.unmount()
    this.root = null
  }

  private resolveLogo(): React.ReactNode {
    // Priority: explicit slotted markup wins over logo-url attribute.
    if (this.logoHtml) {
      return <div dangerouslySetInnerHTML={{ __html: this.logoHtml }} />
    }
    const url = this.getAttribute('logo-url')
    if (url) {
      const alt = this.getAttribute('logo-alt') ?? ''
      return <img src={url} alt={alt} />
    }
    return undefined
  }

  private render() {
    if (!this.root) return
    const waitlist = this.getAttribute('waitlist')
    if (!waitlist) {
      console.error('hanzo-waitlist: `waitlist` attribute is required')
      return
    }
    this.root.render(
      <Waitlist
        waitlist={waitlist}
        baseUrl={this.getAttribute('base-url') ?? undefined}
        mode={(this.getAttribute('mode') as WaitlistMode | null) ?? undefined}
        theme={(this.getAttribute('theme') as WaitlistTheme | null) ?? undefined}
        logo={this.resolveLogo()}
        title={this.getAttribute('title') ?? undefined}
        subtitle={this.getAttribute('subtitle') ?? undefined}
        submitLabel={this.getAttribute('submit-label') ?? undefined}
        successTitle={this.getAttribute('success-title') ?? undefined}
        triggerLabel={this.getAttribute('trigger-label') ?? undefined}
        turnstileToken={this.getAttribute('turnstile-token') ?? undefined}
        hideShare={this.hasAttribute('hide-share')}
      />
    )
  }
}

if (typeof customElements !== 'undefined' && !customElements.get('hanzo-waitlist')) {
  customElements.define('hanzo-waitlist', HanzoWaitlistElement)
}

export default HanzoWaitlistElement
