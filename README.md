## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000/items-manager](http://localhost:3000/items-manager) with your browser to see the result.

## App features

The project uses Next.js and is based on the **hexagonal architecture**: if this application scaled up, new contexts could be created keeping separation of concerns - kind of a plug'n play folder - and avoid repetition of shared app's components.

List items view is done through a virtualized list (it uses <https://virtuoso.dev/>)

The API endpoint uses NextJS routing so the external EP is hit by an internal EP.

The *price* sort is from the highest to the lowest.
