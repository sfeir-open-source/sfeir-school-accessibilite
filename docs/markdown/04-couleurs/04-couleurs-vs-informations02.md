<!-- .slide: class="with-code-bg-dark" -->

# Couleurs != Informations

Compléter avec de l'information supplémentaire, par exemple: 
- Visuellement => trait de couleur
- DOM => aria-current

```
<nav aria-label="Breadcrumb" class="breadcrumb">
  <ol>
    <li>
      <a href="../../../"> ARIA </a>
    </li>
    <li>
      <a href="../../"> ARIA States and Properties </a>
    </li>
    <li>
      <a href="./" aria-current="page"> ARIA: `aria-current` attribute </a>
    </li>
  </ol>
</nav>
```


Notes: 
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current

Par exemple un trait de couleurs sous l'onglet

Autre exemples à l'oral: 
Compte bancaires -> chiffres en rouges pour un compte à découvert
Les liens sont le plus souvent soulignés afin d'indiquer son interactivité
Ne pas faire référence à un élément par la couleur : « Les champs en rouge doivent être saisis » ;
