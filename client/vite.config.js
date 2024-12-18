import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@ui',
        replacement: fileURLToPath(new URL('./src/components/ui', import.meta.url))
      },
      {
        find: '@inversor',
        replacement: fileURLToPath(new URL('./src/components/customers/inversor', import.meta.url))
      },
      {
        find: '@borrower',
        replacement: fileURLToPath(new URL('./src/components/customers/borrower', import.meta.url))
      },
    ]
  }
})
