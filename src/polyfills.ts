
// Polyfill for process.env for Next.js components in Vite
if (typeof window !== 'undefined' && !window.process) {
  window.process = {
    env: {
      NODE_ENV: 'development',
      NEXT_PUBLIC_BASE_PATH: ''
    }
  };
}
