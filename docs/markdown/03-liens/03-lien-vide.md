<!-- .slide: class="quote-slide" -->

> 6.2 Dans chaque page web, chaque lien a t-il un intitulé ?
[source](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.2)

##==##

<!-- .slide: class="with-code big-code" -->

# Lien vide

```
❌
<a href="salsifis"></a>

❌
<a href="salsifis"><img src="./assets/images/salsifis.png" alt=""></a>

✅
<a href="salsifis">le site des salsifis</a>

✅
<a href="salsifis">
  <img src="./assets/images/salsifis.png" alt="">
  <span class="hide">le site des salsifis</span>
</a>
```

Notes:
