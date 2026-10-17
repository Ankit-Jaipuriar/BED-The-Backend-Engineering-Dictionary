# The Backend Engineering Dictionary

A standalone interactive technical dictionary. Open `index.html` in a browser to use it.

## Included in the first edition

- Dictionary-style technical definitions with universal examples.
- Alphabetical groups such as `Ab`, `Ac`, `Ad`, and `Co`.
- Search, keyboard page turns, random term navigation, and animated page turns.
- 62 foundational backend-engineering terms covering APIs, Java/Spring concepts, databases, Kafka, cloud, testing, and distributed systems.

## Add a new term

Add a new object to the `terms` array in `terms.js`:

```js
{
  term: "Term Name",
  group: "Te",
  pronunciation: "/pronunciation/",
  type: "noun",
  definition: "A plain-English definition.",
  example: "A universal example.",
  related: ["Related Term"]
}
```

The application automatically creates the relevant dictionary page and adds the group to the index.
