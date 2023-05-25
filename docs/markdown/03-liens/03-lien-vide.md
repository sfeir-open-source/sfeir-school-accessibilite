<!-- .slide: class="with-code-bg-dark big-code" -->

# Lien vide

> 6.2 Dans chaque page web, chaque lien a t-il un intitulé ?

```
❌
<a href="salsifis"></a>

✅
<a href="salsifis" aria-label="le site des salsifis"></a>

✅
<a href="salsifis">
  <span class="hide">le site des salsifis</span>
</a>
```

Notes:
