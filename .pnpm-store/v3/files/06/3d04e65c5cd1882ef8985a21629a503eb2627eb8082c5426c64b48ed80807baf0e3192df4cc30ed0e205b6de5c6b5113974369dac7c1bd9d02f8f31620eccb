/** Transient confirmation. Mount <Toaster /> once, then call toast() from anywhere. */
export interface ToasterProps {
  /** Auto-dismiss in ms. */
  duration?: number;
  position?: 'bottom-right' | 'top-right';
}
export function Toaster(props: ToasterProps): JSX.Element;
export interface ToastOptions { description?: string; tone?: 'default' | 'success' | 'error' }
export const toast: ((message: string, opts?: ToastOptions) => number) & {
  success(message: string, opts?: ToastOptions): number;
  error(message: string, opts?: ToastOptions): number;
};
