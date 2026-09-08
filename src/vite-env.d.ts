/// <reference types="vite/client" />

declare global {
  interface Window {
    /** Whether every video on the page starts muted. One switch, read by
     *  GlobalMuteButton and each VideoCard, so they cannot disagree. */
    globalMuteState?: boolean
  }
}

export {}
