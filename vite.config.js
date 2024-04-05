// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Function to determine manual chunks
function manualChunks(id) {
 // Example: Group all vendor modules into a single chunk
 if (id.includes('node_modules')) {
    return 'vendor';
 }
}

export default defineConfig({
 plugins: [react()],
 build: {
    rollupOptions: {
      output: {
        manualChunks: manualChunks,
      },
    },
    chunkSizeWarningLimit: 10000, 
 },
})