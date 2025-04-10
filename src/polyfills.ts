
// Polyfill for process.env for Next.js components in Vite

// Define our own Process interface instead of importing it
interface Process {
  env: {
    [key: string]: string | undefined;
  }
}

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
  } as Process;
}
