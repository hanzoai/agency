import { GuiProvider } from '@hanzo/gui'
import guiConfig from '@hanzo/ui/gui-config'
import { Consent } from '@hanzo/ui/consent'

/**
 * The consent banner, the one thing on this site gui draws, under its own
 * provider. A module of its own so the renderer loads beside the page rather
 * than ahead of it (src/analytics.tsx imports it lazily).
 */
export default function Banner() {
  return (
    <GuiProvider config={guiConfig as never} defaultTheme="dark">
      <Consent />
    </GuiProvider>
  )
}
