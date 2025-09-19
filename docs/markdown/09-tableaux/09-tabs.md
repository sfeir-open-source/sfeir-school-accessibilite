<!-- .slide: class="quote-slide" -->

> 5.1 Chaque tableau de données complexe a-t-il un résumé ? 
> [source](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.1)


##==##




## De la bonne utilisation des tableaux

* Bannir au maximum l'utilisation de ``<table>`` pour de la mise en forme.
* Implémenter le role="presentation" sur l'élément ``<table>`` si le tableau est simple
* Que le tableau soit lisible linéairement

Notes: 
https://disic.github.io/guide-integrateur/4-tableaux.html


##==##




## role="presentation"

* Permet d'annuler la sémantique native de l'élément qui la possède
* Va lire le contenu, tel qu'il se présente devant nous
* Perds les comportements clavier du composant pour celui du traitement de texte

Notes: 

