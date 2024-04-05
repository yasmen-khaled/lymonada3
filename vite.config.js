import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function manualChunks(id) {
 if (id.includes('node_modules')) {
    return 'vendor';
 }
}

export default defineConfig(({ mode }) => {
 const env = loadEnv(mode, process.cwd(), '')
 return {
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: manualChunks,
        },
      },
      chunkSizeWarningLimit: 10000, 
    },
    base: './dist',
 }
})
