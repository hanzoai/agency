// No import/export here on purpose: this file must stay a global script so the
// declaration below merges with lib.dom's Window. An `export {}` makes it a
// module, and the augmentation silently stops applying.
interface Window {
  globalMuteState: boolean;
}
