# mariannehurup.dk

Statisk hjemmeside bygget med [Astro](https://astro.build). Ingen database, ingen plugins.

## Ret tekst (uden at installere noget)

1. Find filen på GitHub under `src/content/`:
   - `home/` – sektionerne på forsiden
   - `pages/` – Om mig, Virksomheder, Kvinder 40+ og Kontakt
   - `referencer/` – én fil pr. reference
2. Klik på blyanten (Edit this file), ret teksten, og klik **Commit changes**.
3. Siden opdateres automatisk efter ca. 1–2 minutter. Følg med under fanen **Actions**.

Teksten skrives i Markdown: `## Overskrift`, `**fed**`, `- punkt`, `[tekst](adresse)`.

Telefon, e-mail og menu ligger i `src/site.ts`.

## Kør lokalt

Kræver Node 22.23.4 eller nyere.

```
npm install
npm run dev      # forhåndsvisning på http://localhost:4321
npm run build    # bygger siden til dist/
```
