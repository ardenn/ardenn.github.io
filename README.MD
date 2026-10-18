[![Netlify Status](https://api.netlify.com/api/v1/badges/6f120534-053a-4d96-b4c5-b3a39b8244c5/deploy-status)](https://app.netlify.com/sites/ardenn/deploys)

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

Keep `HUGO_VERSION` in `Containerfile` and `netlify.toml` in step.

## Licence

[MIT](LICENCE). IBM Plex Mono is licensed under the [SIL Open Font License](static/fonts/OFL.txt).
