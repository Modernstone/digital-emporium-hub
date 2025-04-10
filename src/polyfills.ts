
// Polyfill for process.env for Next.js components in Vite
import type { Process } from 'process';

declare global {
  interface Window {
    process: Process;
  }
}

if (typeof window !== 'undefined' && !window.process) {
  window.process = {
    env: {
      NODE_ENV: 'development',
      NEXT_PUBLIC_BASE_PATH: ''
    }
  } as unknown as Process;
}
