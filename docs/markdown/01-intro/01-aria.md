<!-- .slide: class="with-code-bg-dark" -->

# Qu’est-ce qu'ARIA?


<blockquote>
&laquo; ARIA complète HTML afin que les éléments interactifs et les widgets puissent être utilisés par les outils d'assistance quand les fonctionnalités standard ne le permettent pas. &raquo;
</blockquote>

* Accessible Rich Internet Application

* Les rôles : donnent une sémantique à un élément (role=”button”)
* Les propriétés : Informations statiques supplémentaires (required, label, etc.)
* Les états : Informations amenées à évoluer (aria-pressed)

Notes:
https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA
https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/Attributes


##==##

<!-- .slide -->

<h1>aria-labelledby <span style="font-size: 44px; opacity: 0.7;">vs</span> aria-label <span style="font-size: 44px; opacity: 0.7;">vs</span> contenu</h1>

**aria-labelledby** est prioritaire sur **aria-label** qui est prioritaire sur le **contenu**.

<br>

```
<label>mon super label</label>
<!-- mon super label -->

<label aria-label="nouveau label">mon super label</label>
<!-- nouveau label -->

<span id="super-label">encore un label ?</span>
<label aria-labelledby="super-label" aria-label="nouveau label">mon super label</label>
<!-- encore un label ? -->
```
