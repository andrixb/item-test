# Getting Started

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

### Warning

The *favorites* won't be a consistent list since no ids are returned by the external EP.
They're stored in the localStorage - which has got it's 5MB limit. Ideally an EP should store them up by contacting a DB, and serve them back when required.
Even adding them up through the current internal service won't add a great benefits since they will be calculated anytime a new search is done, so they will be consistent only till a new search is done. This will affect the favorites icon color any time a new search is done.

### Test

### For unit testing

`yarn jest`

### For e2e tests

(make sure the app is running)
`yarn cypress`
