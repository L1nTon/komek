import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/css/sections/header.css',
                'resources/css/sections/card-list.css',
                'resources/css/sections/footer.css',
                'resources/js/sections/card-list.js',
                'resources/js/sections/header.js'
            ],
            refresh: true,
        }),
    ],
});
