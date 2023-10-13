# KDD Lab Website Frontend

This is a `Next.js` Project, css framework use `TailwindCSS`.
Connected with `Strapi` headless CMS for backend.
Deploy on self-hosted server with `nginx-proxy` by `docker-compose`.

## Getting Started

```bash
yarn dev
```

## Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs/)
- [Strapi Headless CMS](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)
- [Docker Compose](https://docs.docker.com/compose/)
- [NGINX Proxy](https://hub.docker.com/r/jwilder/nginx-proxy)

## Check

Run `yarn build` every pull request on `develop` branch.
Enable CodeQL analysis on `develop` branch. (in experiment)

## Deployment

This project is deployed on self-hosted server, and setup the Github Action CI.
