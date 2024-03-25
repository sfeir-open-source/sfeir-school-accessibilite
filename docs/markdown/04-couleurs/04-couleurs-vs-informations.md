<!-- .slide: class="quote-slide" -->

> 3.1 Dans chaque page web, l’information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?
> [source](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1)

Notes:
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current

Par exemple un trait de couleurs sous l'onglet

Autre exemples à l'oral:
Compte bancaires -> chiffres en rouges pour un compte à découvert
Les liens sont le plus souvent soulignés afin d'indiquer son interactivité
Ne pas faire référence à un élément par la couleur : « Les champs en rouge doivent être saisis » ;

##==##

<!-- .slide: class="two-column" -->

## Don't
Utiliser la couleur comme seul vecteur d'information

<div>
<p>Les LEGO c'est pour :</p>
<ul style="list-style-type: none;">
  <li style="color:green;">Les enfants</li>
  <li style="color:green;">Les adultes</li>
  <li style="color:red;">Les chats</li>
</ul>
</div>
<br>
<img src="./assets/images/invalid-input.png" alt="champ de formulaire avec une bordure rouge" class="h-300">

##--##

## Do
Identifier l'information en ne passant pas que par la couleur

<div>
<p>Les LEGO c'est pour :</p>
<ul style="list-style-type: none;">
  <li style="color:green;">✅ Les enfants</li>
  <li style="color:green;">✅ Les adultes</li>
  <li style="color:red;">❌ Les chats</li>
</ul>
</div>
<br>
<img src="./assets/images/invalid-input-with-error.png" alt="champ de formulaire avec une bordure rouge et un texte indiquant l'erreur" class="h-300">
