// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/site.ts';

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
        if (kids.length === 1 && kids[0].type === 'element' && kids[0].tagName === 'strong' && /\bkr\b/i.test(text(kids[0])) && !/booket|lukket/i.test(text(kids[0]))) {
          c.properties = { ...(c.properties || {}), className: ['price'] };
          c.children.push({
            type: 'element', tagName: 'a', properties: { className: ['btn', 'alt'], href: site.booking },
            children: [{ type: 'text', value: site.bookingLabel }],
          });
        }
      }
      walk(c);
    }
  };
  return (/** @type {any} */ tree) => walk(tree);
}

// Pakker hver ###-overskrift med sit indhold ind i et tilbudskort (op til næste ## eller ###).
function rehypeOffers() {
  return (/** @type {any} */ tree) => {
    /** @type {any[]} */
    const out = [];
    /** @type {any} */
    let cur = null;
    for (const n of tree.children) {
      const tag = n.type === 'element' ? n.tagName : '';
      if (tag === 'h2' || tag === 'h3') {
        cur = null;
        if (tag === 'h3') {
          cur = { type: 'element', tagName: 'section', properties: { className: ['offer'] }, children: [n] };
          out.push(cur);
          continue;
        }
      } else if (cur) {
        cur.children.push(n);
        continue;
      }
      out.push(n);
    }
    tree.children = out;
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://mariannehurup.dk',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: { rehypePlugins: [rehypePriceLine, rehypeOffers] },
  // Gamle WordPress-adresser, der ikke findes mere
  redirects: {
    '/blog/': '/',
    '/book-now/': '/kontakt/',
    '/sample-page/': '/',
    '/kvinder-40-forlob/': '/kvinder-40-forlob-pandrup/',
  },
});
