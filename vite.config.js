import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    root: './resources',
    base: '/assets/',
    server: {
        watch: {
            disableGlobbing: false
        },
        host: '0.0.0.0'
    },
    build: {
        outDir: './public/assets',
        //1 seul fichier assets
        assetsDir: '',
        manifest: true,
        rollupOptions: {
            output: {
                manualChunks: undefined
            },
            input: {
                'main.js': './resources/js/main.js',
            }
        }
    }
})

