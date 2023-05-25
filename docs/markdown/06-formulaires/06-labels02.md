<!-- .slide: class="with-code-bg-dark" -->

# Les labels

Un input doit être lié à un label

```
// La voie classique (et celle conseillée)
<label for="firstname">First name:</label>
<input type="text" name="firstname" id="firstname">

// Cacher le label
<label for="search" class="hide">Search: </label>
<input type="text" name="search" id="search">
<button type="submit">Search</button>

// title
<input title="Search" type="text" name="search">
<button type="submit">Search</button>

// aria-label
<input type="text" name="search" aria-label="Search">
<button type="submit">Search</button>

// aria-labelledby
<input type="text" name="search" aria-labelledby="searchbutton">
<button id="searchbutton" type="submit">Search</button>
```

Notes:

