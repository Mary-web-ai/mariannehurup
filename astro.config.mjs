// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mariannehurup.dk',
  trailingSlash: 'always',
  // Gamle WordPress-adresser, der ikke findes mere
  redirects: {
    '/blog/': '/',
    '/book-now/': '/kontakt/',
    '/sample-page/': '/',
    '/kvinder-40-forlob/': '/kvinder-40-forlob-pandrup/',
  },
});
