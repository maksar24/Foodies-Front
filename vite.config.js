import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { resolve } from 'path';

const root = resolve('src');

export default defineConfig({
    plugins: [react()],
    base: '/foodies',
    resolve: {
        alias: {
            '~': root,
        },
    },
});
