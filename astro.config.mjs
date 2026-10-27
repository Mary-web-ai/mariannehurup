// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Markerer et afsnit, der kun består af fed tekst med "kr", som en prislinje, og tilføjer en kontaktknap.
function rehypePriceLine() {
  /** @param {any} node */
  const text = (node) => (node.type === 'text' ? node.value : (node.children || []).map(text).join(''));
  /** @param {any} node */
  const walk = (node) => {
    if (!node.children) return;
    for (const c of node.children) {
      if (c.type === 'element' && c.tagName === 'p') {
        const kids = c.children.filter((k) => !(k.type === 'text' && !k.value.trim()));
        if (kids.length === 1 && kids[0].type === 'element' && kids[0].tagName === 'strong' && /\bkr\b/i.test(text(kids[0]))) {
          c.properties = { ...(c.properties || {}), className: ['price'] };
          c.children.push({
            type: 'element', tagName: 'a', properties: { className: ['btn', 'alt'], href: '/kontakt/' },
            children: [{ type: 'text', value: 'Hør mere' }],
          });
        }
      }
      walk(c);
    }
  };
  return (/** @type {any} */ tree) => walk(tree);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://mariannehurup.dk',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: { rehypePlugins: [rehypePriceLine] },
  // Gamle WordPress-adresser, der ikke findes mere
  redirects: {
    '/blog/': '/',
    '/book-now/': '/kontakt/',
    '/sample-page/': '/',
    '/kvinder-40-forlob/': '/kvinder-40-forlob-pandrup/',
  },
});
