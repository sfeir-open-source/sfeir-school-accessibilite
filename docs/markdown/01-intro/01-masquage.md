<!-- .slide: class="with-code-bg-dark" -->

# aria-hidden

* Si un élément ne doit pas être lu par les lecteurs d'écran:

```
<div aria-hidden="true">Un élément à cacher</div>
```

* Par défaut sa valeur est à false

Notes:


##==##


<!-- .slide: class="with-code-bg-dark" -->

# Le masquage accessible

* Le but est simple: enrichir la page de contenus textuels qui seront visuellement cachés
* Ne doit pas être utilisé pour alourdir vocalement la page
* Peut servir dans un cas d'information visuellement non transmissible par le lecteur d'écran

```
.hide {
    position: absolute !important;
    height: 1px; 
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px);
}
```

Notes:
https://gist.github.com/ffoodd/000b59f431e3e64e4ce1a24d5bb36034
Pierre
