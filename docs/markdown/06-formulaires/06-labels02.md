<!-- .slide: class="with-code" -->

# Lier labels et inputs

Un input doit toujours être lié à un label

```
// La voie classique (et celle conseillée)
<label for="firstname">First name:</label>
<input type="text" name="firstname" id="firstname">

// le label implicite
// /!\ non conforme RGAA 4.1.2 mais conforme WCAG ¯\_(ツ)_/¯
<label>
  <span>First name:</span>
  <input type="text" name="firstname">
</label>

// Cacher le label
<label for="search" class="hide">Search: </label>
<input type="text" name="search" id="search">
<input type="submit" value="Search">
```

##==##
<!-- .slide: class="with-code" -->

# Lier labels et inputs avec ARIA

Un input doit toujours être lié à un label

```
// aria-label
<input type="text" name="search" aria-label="Search">
<input type="submit" value="Search">

// aria-labelledby
<input type="text" name="search" aria-labelledby="searchbutton">
<button id="searchbutton" type="submit">Search</button>
```

Notes:

