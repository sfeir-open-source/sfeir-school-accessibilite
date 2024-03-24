<!-- .slide: class="with-code" -->

# Navigation
La page courante ne peut être indiquée que par la couleur, il faut compléter :
- Visuellement
  - Une icone
  - Une bordure
  - ...
- aria-current

```
<nav>
  <ul>
    <li><a href="./home"> home </a></li>
    <li><a href="./rgaa"> RGAA </a></li>
    <li><a href="./" aria-current="page"> ARIA </a></li>
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
