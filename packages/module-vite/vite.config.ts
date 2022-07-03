import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { a } from '@module/shared'

console.log({ a })

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@module/shared': resolve(__dirname, '../module-shared/src')
    }
  },
  plugins: [react()]
})
