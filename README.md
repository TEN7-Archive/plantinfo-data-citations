# plantinfo-data-citations
This repo contains the citations data for plantinfo.org.

*The following is to create an index file:*

Run

```sh
   npm install
```

To create **file-index.json**, run:

```javascript
   node index
```

In `index.js`, settings available to edit:

```javascript
const fileName = 'file-index.json'
const minified = true
```