import { defineConfig } from 'astro-imagetools/config';

export default defineConfig({
    objectPosition: '50% 50%',
    breakpoints: { count: 3, minWidth: 300, maxWidth: 2000 },
    width: 1024,
    brightness: 0.5,
});
