import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
    resolve: {
        alias: {
            src: '/src',
            components: '/src/components',
            hoc: '/src/hoc',
            assets: '/src/assets',
            constants: '/src/constants',
            utils: '/src/utils',
            hooks: '/src/hooks',
            styles: '/src/styles',
        },
    },
});
