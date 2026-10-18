[![Netlify Status](https://api.netlify.com/api/v1/badges/6f120534-053a-4d96-b4c5-b3a39b8244c5/deploy-status)](https://app.netlify.com/projects/ardenn/deploys)

# makalila.dev

My personal website, built with [Hugo](https://gohugo.io) and [Tailwind CSS](https://tailwindcss.com), set in
[IBM Plex Mono](https://www.ibm.com/plex/) and hosted on [Netlify](https://netlify.com).

## Development

Hugo and Node run in a container, so nothing needs installing on the host:

```sh
podman build -t makalila-dev .
podman run --rm --userns=keep-id -v .:/src:Z makalila-dev npm ci
podman run --rm --userns=keep-id -p 1313:1313 -v .:/src:Z makalila-dev npm run dev
```

The site is then served at http://localhost:1313 with drafts included. `npm run build` produces the production build in
`public/`.

## Layout

- `layouts/`: all templates. There is no separate theme.
- `assets/css/main.css`: Tailwind entry point, colour tokens for light and dark mode, and prose styling. Hugo compiles it
  with `css.TailwindCSS`, along with Chroma syntax highlighting styles generated at build time.
- `static/fonts/`: self-hosted IBM Plex Mono (Latin subset, 400, 400 italic, 500 and 600).
- `content/`: the home page bio and blog posts. Posts with images are page bundles, and images are converted to WebP at
  build time.

Prose supports a few inline styles: `~~text~~` and `<span class="comment">text</span>` render as a
`/* code comment */`, and `<em class="highlight">text</em>` gives a word an accent highlight.

Hugo 0.165 and later no longer allow `tailwindcss` to run by default, so `hugo.yaml` adds it to `security.exec.allow`.

## Deployment

Netlify builds every push to `main` and every pull request using `netlify.toml`, which takes precedence over the
settings in the Netlify UI. It pins the Hugo and Node versions and sets security and caching headers. Keep
`HUGO_VERSION` in `Containerfile` and `netlify.toml` in step.

## Analytics

Page views are counted with [GoatCounter](https://makalila.goatcounter.com), which sets no cookies. The script loads
only in production builds. The site code lives in `hugo.yaml` under `params.goatcounter`.

## Licence

[MIT](LICENCE). IBM Plex Mono is licensed under the [SIL Open Font License](static/fonts/OFL.txt).
